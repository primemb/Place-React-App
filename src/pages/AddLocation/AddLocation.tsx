import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import AddBox from "../../components/AddBox/AddBox";
import MapElement from "../../components/MapElement/MapElement";
import Button from "../../components/UI/Button/Button";
import ImageUpload from "../../components/UI/ImageUpload/ImageUpload";
import InputGroup from "../../components/UI/InputGroup/InputGroup";
import InputText from "../../components/UI/InputText/InputText";
import SelectInput from "../../components/UI/SelectInput/SelectInput";
import { useAppDispatch } from "../../store/hooks";
import { add, ILocation } from "../../store/location-store/location-store";
import classes from "./AddLocation.module.css";

const AddLocation = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [locationName, setLocationName] = useState<string>("");

  const [locationCoords, setLocationCoords] = useState<{
    lat: number | null;
    long: number | null;
  }>({ lat: null, long: null });

  const [locationType, setLocationType] = useState<string>("Computer");

  const [imageIsValid, setImageIsValid] = useState<boolean>(false);
  const [imageData, setImageData] = useState<string | null>(null);

  const locationChangeHandler = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setLocationName(event.target.value);
    },
    []
  );

  const locationTypeChangeHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLocationType(event.target.value);
  };

  const locationCoordsChangeHandler = useCallback(
    (lat: number, long: number) => {
      setLocationCoords({ lat, long });
    },
    []
  );

  const imageChangeHandler = (isValid: boolean, image: string) => {
    setImageIsValid(isValid);
    if (isValid) {
      setImageData(image);
    } else {
      setImageData(null);
    }
  };

  const errorHandler = (message: string) => {
    alert(message);
  };

  const saveClickHandler = () => {
    if (locationCoords.lat === null || locationCoords.long === null) {
      errorHandler("Please select your location");
      return;
    }
    if (locationName.trim().length === 0) {
      errorHandler("Please select your location name");
      return;
    }
    if (locationType.trim().length === 0) {
      errorHandler("Please select your location type");
      return;
    }
    if (!imageData || imageData.length === 0) {
      errorHandler("Please select your logo");
      return;
    }
    if (!imageIsValid) {
      errorHandler("Please select valid logo");
      return;
    }

    const location: ILocation = {
      id: Math.random(),
      locationCoords: locationCoords as { lat: number; long: number },
      locationImage: imageData,
      locationName: locationName,
      locationType: locationType,
    };

    dispatch(add(location));
    navigate("/", { replace: true });
  };

  const cancelClickHandler = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className={classes.container}>
      <AddBox title="Share Location">
        <InputGroup label="Location name:">
          <InputText
            onChange={locationChangeHandler}
            value={locationName}
            placeHolder="Location Name"
          />
        </InputGroup>
        <InputGroup label="Location on map:">
          <MapElement onLocationChange={locationCoordsChangeHandler} />
        </InputGroup>
        <InputGroup label="Location type:">
          <SelectInput
            onChange={locationTypeChangeHandler}
            options={["Computer", "ISP", "Security", "Others"]}
          />
        </InputGroup>
        <InputGroup label="Logo:">
          <ImageUpload onImageChange={imageChangeHandler} />
        </InputGroup>
      </AddBox>
      <div className={classes.actions}>
        <Button title="Save" onClick={saveClickHandler} isActive />
        <Button title="Cancel" onClick={cancelClickHandler} />
      </div>
    </div>
  );
};

export default AddLocation;
