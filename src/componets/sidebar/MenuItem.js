import React from "react";
import "./menuItem.scss";
import { Link, useLocation } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
export const MenuItem = (props) => {
  const location = useLocation();
  const { name, icon, to } = props;
  return (
    <li key={props.index} className="listContainer ">
      <Link
        to={to}
        className={
          location.pathname.includes(name)
            ? "active sideMenuItem"
            : "sideMenuItem"
        }
      >
        <div className="MenuIcon">
          <FeatherIcon icon={icon} size="1rem"></FeatherIcon>
        </div>
        <span>{name}</span>
      </Link>
    </li>
  );
};
