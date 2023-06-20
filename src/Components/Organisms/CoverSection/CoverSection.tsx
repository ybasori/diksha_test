import CoverBackground from "../../Atoms/CoverBackground/CoverBackground";
import styles from "./CoverSection.module.scss";

const CoverSection = () => {
  return (
    <>
      <div className={styles["cover-section"]}>
        <img
          className={styles["cover-picture"]}
          src={require("../../../Assets/cover.png")}
          alt=""
        />
        <CoverBackground>
          <div className={styles["cover-text"]}>
            <div className={styles["cover-title"]}>Discover Your Wonder</div>
            <div className={styles["cover-subtitle"]}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </div>
          </div>
        </CoverBackground>
      </div>
    </>
  );
};

export default CoverSection;
