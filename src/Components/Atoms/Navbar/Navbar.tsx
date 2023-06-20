import React from "react";
import styles from "./Navbar.module.scss";
import BurgerIcon from "../../Icons/BurgerIcon";

const Navbar = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["logo"]}>
        <img src={require("../../../Assets/company-logo.png")} alt="" />
      </div>
      <button type="button" className={styles["btn-burger"]}>
        <BurgerIcon />
      </button>
    </div>
  );
};

export default Navbar;
