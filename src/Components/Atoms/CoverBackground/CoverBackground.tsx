import React from "react";
import styles from "./CoverBackground.module.scss";

const CoverBackground: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles["container-cbg"]}>
      <svg
        style={{
          width: "100%",
          position: "absolute",
          zIndex: -1,
          left: 0,
          top: 0,
        }}
        viewBox="0 0 420 364"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M420 7.67201L1.0194 143.303L1.01941 362.5L420 362.5L420 7.67201Z"
          fill="#53A7E9"
        />
        <path
          d="M2.92243e-05 363.344L-1.65288e-05 6.10352e-05L418.981 78.0563L418.981 363.344L2.92243e-05 363.344Z"
          fill="#4097DB"
        />
      </svg>
      {children}
    </div>
  );
};

export default CoverBackground;
