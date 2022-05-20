import classes from "./BigMap.module.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Locations } from "../../store/location-store/location-store";
import { LatLngExpression } from "leaflet";

interface IBigMapProps {
  locations: Locations;
}
const BigMap = (props: IBigMapProps) => {
  const { locations } = props;

  const getCenterMap = (): number[] => {
    const length = locations.length;
    if (length > 0) {
      const coords = locations[length - 1].locationCoords;
      return [coords.lat, coords.long];
    } else {
      return [51.505, -0.09];
    }
  };

  const Markers = locations.map((location) => {
    const coords = location.locationCoords;
    return (
      <Marker position={[coords.lat, coords.long]}>
        <Popup>
          <div className={classes.popup_container}>
            <h4>Location Details</h4>
            <span>Name: {location.locationName}</span>
            <span>Type: {location.locationType}</span>
            <div className={classes.image}>
              <img src={location.locationImage} alt={location.locationName} />
            </div>
          </div>
        </Popup>
      </Marker>
    );
  });

  return (
    <div className={classes.container}>
      <MapContainer
        className={classes.container}
        center={getCenterMap() as LatLngExpression}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {Markers}
      </MapContainer>
    </div>
  );
};

export default BigMap;
