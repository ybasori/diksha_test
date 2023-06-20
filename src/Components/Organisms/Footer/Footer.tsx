import React from "react";
import styles from "./Footer.module.scss";

const Footer = () => (
  <div
    className={styles["container"]}
    style={{
      backgroundImage: `url(${require("../../../Assets/footer-bg.png")})`,
    }}
  >
    <div className={styles["company-logo"]}>
      <img
        className={styles["footer-logo"]}
        src={require("../../../Assets/footer-logo.png")}
        alt=""
      />
    </div>
    <div className={styles["address"]}>
      <div className={styles["cla"]}>TECHNOLOGY DEPARTMENT</div>
      <div className={styles["address-text"]}>
        Jl. Lembong No 8<br />
        Kel. Braga Kec. Sumur
        <br />
        Bandung, Kota
        <br />
        Bandung, Jawa Barat
      </div>
    </div>
    <div className={styles["group-link"]}>
      <div className={styles["link"]}>Who We Are</div>
      <div className={styles["link"]}>Our Values</div>
      <div className={styles["link"]}>The Perks</div>
    </div>
  </div>
);

export default Footer;
