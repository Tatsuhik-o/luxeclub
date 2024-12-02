import React from "react";
import styles from "./Hero.module.css";
import CustomButton from "../../ui/CustomButton";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
export default function Hero({ expanded }) {
  const customStyle = expanded
    ? {
        flexDirection: "column",
      }
    : {
        flexDirection: "row",
      };

  return (
    <div className={styles.hero}>
      <div className={styles.main_panel} style={customStyle}>
        <CustomButton
          contentText="plan your trip"
          fontIcon={faMagnifyingGlass}
          bgColor="#0E3242"
          color="#fff"
          link="planning"
        />
        <CustomButton
          contentText="track trip"
          color="#0E3242"
          link="tracking"
          borderWidth={2}
        />
      </div>
    </div>
  );
}
