import classes from "./AddBox.module.css";

interface IAddBoxProps {
  title: string;
  children: React.ReactNode;
}
const AddBox = (props: IAddBoxProps) => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h4>{props.title}</h4>
      </div>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

export default AddBox;
