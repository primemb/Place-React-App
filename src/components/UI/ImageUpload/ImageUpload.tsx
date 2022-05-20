import classes from "./ImageUpload.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";

interface IImageUploadProps {
  onImageChange: (isValid: boolean, imageData: string) => void;
}

const ImageUpload = (props: IImageUploadProps) => {
  const { onImageChange } = props;

  const [file, setFile] = useState<Blob | undefined>();
  const [previewUrl, setPreviewUrl] = useState<string | ArrayBuffer | null>(
    null
  );
  const [isValid, setIsValid] = useState(false);

  const filePickerRef =
    React.useRef() as React.MutableRefObject<HTMLInputElement>;

  const pickImageHandler = () => {
    filePickerRef.current.click();
  };

  useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

  useEffect(() => {
    onImageChange(isValid, previewUrl as string);
  }, [onImageChange, isValid, previewUrl]);

  const pickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div onClick={pickImageHandler} className={classes.container}>
      <input
        ref={filePickerRef}
        type="file"
        style={{ display: "none" }}
        onChange={pickHandler}
        accept=".jpg,.png,.jpeg"
      />
      <h4 className={classes.title}>Upload</h4>
      <div className={classes.icon}>
        {previewUrl && (
          <img
            style={{ width: "auto", height: "100%" }}
            src={previewUrl as string}
            alt="Preview"
          />
        )}
        {!previewUrl && <FontAwesomeIcon icon={faUpload} />}
      </div>
    </div>
  );
};

export default ImageUpload;
