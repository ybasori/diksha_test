import React from "react";
import styles from "./Home.module.scss";
import Navbar from "../../Components/Atoms/Navbar/Navbar";
import SlideDownIcon from "../../Components/Icons/SlideDownIcon";
import CoverSection from "../../Components/Organisms/CoverSection/CoverSection";
import IntroSection from "../../Components/Organisms/IntroSection/IntroSection";
import CoreValues from "../../Components/Organisms/CoreValues/CoreValues";
import OurSpecialty from "../../Components/Organisms/OurSpecialty/OurSpecialty";
import Footer from "../../Components/Organisms/Footer/Footer";

const Home: React.FC = () => {
  return (
    <div className={styles["frame-home"]}>
      <Navbar />
      <div className={styles["container"]}>
        <CoverSection />
        <button type="button" className={styles["btn-slidedown"]}>
          <SlideDownIcon />
        </button>
        <IntroSection />
        <CoreValues />
        <OurSpecialty />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
