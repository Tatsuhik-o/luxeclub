import React from "react";
import styles from "./GoldBar.module.css";
export default function GoldBar({ floatLocation = "left" }) {
  const barStyle =
    floatLocation === "left"
      ? {
          marginRight: "auto",
        }
      : {
          marginLeft: "auto",
        };
  return <div className={styles.gold_bar} style={barStyle}></div>;
}
