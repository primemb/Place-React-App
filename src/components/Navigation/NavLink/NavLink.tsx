import classes from "./NavLink.module.css";

import { NavLink } from "react-router-dom";

interface INavLinkProps {
  path: string;
  name: string;
}

const CustomNavLink = (props: INavLinkProps) => {
  const { path, name } = props;
  return (
    <li className={classes.container}>
      <NavLink
        to={path}
        className={({ isActive }) => {
          return `${classes.base} ${
            isActive ? classes.active : classes.disabled
          }`;
        }}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default CustomNavLink;
