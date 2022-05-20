import BigMap from "../../components/BigMap/BigMap";
import { useAppSelector } from "../../store/hooks";
import classes from "./HomePage.module.css";

const HomePage = () => {
  const locations = useAppSelector((state) => state.location);

  return (
    <div className={classes.container}>
      <BigMap locations={locations} />
    </div>
  );
};

export default HomePage;
