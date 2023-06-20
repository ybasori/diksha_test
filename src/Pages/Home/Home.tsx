import React, { useRef } from "react";
import styles from "./Home.module.scss";
import Navbar from "../../Components/Atoms/Navbar/Navbar";
import SlideDownIcon from "../../Components/Icons/SlideDownIcon";
import CoverSection from "../../Components/Organisms/CoverSection/CoverSection";
import IntroSection from "../../Components/Organisms/IntroSection/IntroSection";
import CoreValues from "../../Components/Organisms/CoreValues/CoreValues";
import OurSpecialty from "../../Components/Organisms/OurSpecialty/OurSpecialty";
import Footer from "../../Components/Organisms/Footer/Footer";

const Home: React.FC = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const onBtn = () => {
    window.scrollTo({
      left: 0,
      top: divRef.current?.offsetTop ?? 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles["frame-home"]}>
      <Navbar />
      <div className={styles["container"]}>
        <CoverSection />
        <button
          type="button"
          className={styles["btn-slidedown"]}
          onClick={onBtn}
        >
          <SlideDownIcon />
        </button>
        <IntroSection introRef={divRef} />
        <CoreValues />
        <OurSpecialty />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
