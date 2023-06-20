import React, { useRef, useState } from "react";
import styles from "./OurSpecialty.module.scss";
import { data } from "./OurSpecialty.constant";
import Arrow from "../../Icons/Arrow";
import CurrentDot from "../../Icons/CurrentDot";
import RegularDot from "../../Icons/RegularDot";

const OurSpecialty = () => {
  const slider = useRef<HTMLDivElement>(null);
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
  const onPosition = (value: number) => {
    if (slider.current) {
      const widthSlider = slider.current.offsetWidth;
      const gap = 10;
      const totalItem = data.length;

      const pos =
        widthSlider / 2 -
        (widthSlider * ((value + 1) / totalItem) +
          value * gap -
          70 / (value + 1));

      return pos;
    } else {
      return 132;
    }
  };
  return (
    <div className={styles["container-blue"]}>
      <div className={styles["container"]}>
        <div className={styles["title"]}>OUR SPECIALITY</div>
        <div className={styles["description"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
          sit amet congue aliquam.
        </div>
        <div className={styles["slider-container"]} ref={slider}>
          <div
            className={styles["slider"]}
            style={{
              transform: `translate(${onPosition(indexOrder)}px, 0px)`,
            }}
          >
            {data.map((item, key) => (
              <div key={key} className={styles["slider-item"]}>
                <div className={styles["slider-item-icon"]}>{item.icon}</div>
                {indexOrder === key && (
                  <div className={styles["slider-item-name"]}>{item.name}</div>
                )}
              </div>
            ))}
          </div>
          <div className={styles["slider-cover"]}></div>
        </div>
        <div className={styles["description-slider"]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod
          libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc
          sit amet congue aliquam.
        </div>
        <div className={styles["slider-navigation"]}>
          <button
            type="button"
            className={styles["btn-left"]}
            onClick={() => onBtn(-1)}
          >
            <Arrow variant="left" color={"#D2D2D2"} />
          </button>
          <div className={styles["slider-indicators"]}>
            {data.map((item, index) => (
              <div className={styles["slider-item-indicator"]} key={index}>
                {indexOrder === index ? <CurrentDot /> : <RegularDot />}
              </div>
            ))}
          </div>
          <button
            type="button"
            className={styles["btn-right"]}
            onClick={() => onBtn(1)}
          >
            <Arrow variant="right" color={"#3D46A2"} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurSpecialty;
