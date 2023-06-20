import React from "react";
import styles from "./CoreValues.module.scss";
import { data } from "./CoreValues.constant";
import CoreValuesIllustration from "../../Icons/CoreValuesIllustration";

const CoreValues = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["title"]}>Our Core Values</div>
      <div className={styles["description"]}>
        Ridiculus laoreet libero pretium et, sit vel elementum convallis fames.
        Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit.
        <br />
        <br />
        In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec
        amet enim.
      </div>
      <ul className={styles["cores"]}>
        {data.map((item, key) => (
          <li key={key}>
            <div className={styles["core-title"]}>{item.title}</div>
            <div className={styles["core-description"]}>{item.description}</div>
          </li>
        ))}
      </ul>
      <div className={styles["canvas"]}>
        <CoreValuesIllustration className={styles["illustration"]} />
      </div>
    </div>
  );
};

export default CoreValues;
