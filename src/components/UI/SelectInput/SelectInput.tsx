import React from "react";
import classes from "./SelectInput.module.css";

interface ISelectInputProps {
  options: Array<string>;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput = (props: ISelectInputProps) => {
  const { options, onChange } = props;
  const OptionsList = options.map((option) => (
    <option key={option} value={option}>
      {option}
    </option>
  ));
  return (
    <select onChange={onChange} className={classes.select}>
      {OptionsList}
    </select>
  );
};

export default SelectInput;
