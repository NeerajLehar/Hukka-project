import React from "react";
import style from "./nav.module.scss";

const Nav = () => {
  return (
    <nav className={style.navBar}>
      <div className={style.searchBar}>
        <input type="text" placeholder="Search here.." />
      </div>
      <div className={style.user}>user Container</div>
      <div className={style.profile}> profile</div>
    </nav>
  );
};

export default Nav;
