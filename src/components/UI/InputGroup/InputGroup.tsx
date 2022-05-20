import classes from "./InputGroup.module.css";

interface IInputGroupProps {
  label: string;
  children: React.ReactNode;
}

const InputGroup = (props: IInputGroupProps) => {
  return (
    <div className={classes.container}>
      <label className={classes.label}>{props.label}</label>
      {props.children}
    </div>
  );
};

export default InputGroup;
