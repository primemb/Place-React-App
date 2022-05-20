import Navigation from "../components/Navigation/Navigation";
import classes from "./MainLayout.module.css";

interface IMainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = (props: IMainLayoutProps) => {
  return (
    <div className={classes.container}>
      <Navigation />
      <main>{props.children}</main>
    </div>
  );
};

export default MainLayout;
