import React from "react";

import classes from "./Button.module.css";

interface IButtonProps {
  title: string;
  isActive?: boolean;
  onClick: () => void;
}

const Button = (props: IButtonProps) => {
  const { title, isActive, onClick } = props;
  return (
    <button
      className={`${classes.button} ${
        isActive ? classes.active : classes.cancel
      }`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
