import React from "react";
import classes from "./InputText.module.css";
interface IInputTextProps {
  value: string;
  placeHolder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputText = (props: IInputTextProps) => {
  const { value, placeHolder, onChange } = props;
  return (
    <input
      className={classes.input}
      type="text"
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
    />
  );
};

export default InputText;
