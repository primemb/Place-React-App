import classes from "./Navigation.module.css";
import CustomNavLink from "./NavLink/NavLink";

const Navigation = () => {
  return (
    <header>
      <div className={classes.container}>
        <nav>
          <ul className={classes.nav_list}>
            <CustomNavLink name="Home" path="/" />
            <CustomNavLink name="Add" path="/add" />
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
