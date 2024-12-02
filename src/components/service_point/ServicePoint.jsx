import React from "react";
import styles from "./ServicePoint.module.css";
import PropTypes from "prop-types";

ServicePoint.propTypes = {
  pointContent: PropTypes.string.isRequired,
};

export default function ServicePoint({ pointContent }) {
  return (
    <div className={styles.service_point}>
      <img src="./img/service_section/sparkle.webp" alt="" />
      <p>{pointContent}</p>
    </div>
  );
}
