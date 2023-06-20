import React, { useState } from "react";
import styles from "./IntroSection.module.scss";
import { data } from "./IntroSection.constant";
import Arrow from "../../Icons/Arrow";

const IntroSection = () => {
  const [indexOrder, setIndexOrder] = useState(0);
  const onBtn = (value: number) => {
    const newValue = indexOrder + value;
    if (newValue < 0) {
      return setIndexOrder(2);
    }
    if (newValue > 2) {
      return setIndexOrder(0);
    }

    return setIndexOrder(newValue);
  };
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>{data[indexOrder].title}</div>
      <div className={styles["subtitle"]}>{data[indexOrder].subtitle}</div>
      <div className={styles["description"]}>
        {data[indexOrder].description}
      </div>
      <div className={styles["navigation"]}>
        <div className={styles["number"]}>
          <span className={styles["current-number"]}>
            {indexOrder + 1 < 10 ? `0${indexOrder + 1}` : indexOrder + 1}
          </span>{" "}
          <span className={styles["separator-number"]}>/</span>{" "}
          <span className={styles["total-number"]}>
            {data.length < 10 ? `0${data.length}` : data.length}
          </span>
        </div>
        <div className={styles["btn-navigation"]}>
          <button
            type="button"
            className={styles["btn-left"]}
            onClick={() => onBtn(-1)}
          >
            <Arrow variant="left" color="#B6B6B6" />
          </button>
          <button
            type="button"
            className={styles["btn-right"]}
            onClick={() => onBtn(1)}
          >
            <Arrow variant="right" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
