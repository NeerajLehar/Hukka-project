import React from "react";
import Logo from "../../images/logo.png";
import ukFlag from "../../images/uk.png";
import finlandFlag from "../../images/finland.png";
import russia from "../../images/russia.png";
import { Link } from "react-router-dom";
import style from "./sidebar.module.scss";
import { MenuItem } from "./MenuItem";
import FeatherIcon from "feather-icons-react";
// import { useState } from "react";

export const menuItems = [
  {
    name: "Home",
    exact: true,
    to: "/home",
    icon: "home",
  },
  {
    name: "Projects",
    exact: true,
    to: `/projects`,
    icon: "briefcase",
  },
  {
    name: "Workers",
    exact: true,
    to: `/workers`,
    icon: "users",
  },
];
export const Sidebar = () => {
  const IconSize = "1rem";
  // const [inactive, setInactive] = useState(false);

  return (
    <div className={style.sidebar}>
      <div className={style.logoContainer}>
        <img src={Logo} alt="" />
      </div>
      <div className={style.sideMenuWarper}>
        <div className={style.sideMenuContainer}>
          {menuItems.map((item, index) => (
            <MenuItem
              name={item.name}
              to={item.to}
              icon={item.icon}
              key={index}
            />
          ))}
        </div>
        <div className={style.langSelection}>
          <Link to="/">
            <img src={ukFlag} alt="" />
          </Link>
          <Link to="#">
            <img src={finlandFlag} alt="" />
          </Link>
          <Link to="#">
            <img src={russia} alt="" />
          </Link>
        </div>
      </div>
      <div className={style.sideMenuOption}>
        <li className={style.sideMenuOptionItem}>
          <Link to="#">
            <div className={style.OptionItemIcon}>
              <FeatherIcon icon="settings" size={IconSize} />
            </div>
            <p>Settings</p>
          </Link>
        </li>
        <li className={style.sideMenuOptionItem}>
          <Link to="#">
            <div className={style.OptionItemIcon}>
              <FeatherIcon icon="edit" size={IconSize} />
            </div>
            Edit
          </Link>
        </li>
        <li className={style.sideMenuOptionItem}>
          <Link to="#">
            <div className={style.OptionItemIcon}>
              <FeatherIcon icon="log-out" size={IconSize} />
              {/* <LogOut size={IconSize} /> */}
            </div>
            <p>Log out</p>
          </Link>
        </li>
      </div>
    </div>
  );
};
