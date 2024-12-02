import React from "react";
import styles from "./CustomButton.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

CustomButton.propTypes = {
  contentText: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderWidth: PropTypes.number,
  fontIcon: PropTypes.object,
  link: PropTypes.string,
  borderColor: PropTypes.string,
};

export default function CustomButton({
  contentText,
  bgColor = "#F3EBE5",
  color = "#4F5557",
  borderWidth = 0,
  fontIcon,
  link = "",
  borderColor = "#4F5557",
}) {
  const cutsomStyle = {
    backgroundColor: bgColor,
    color,
    border: `${borderWidth}px solid ${borderColor}`,
  };
  return (
    <Link className={styles.custom_button} style={cutsomStyle} to={`/${link}`}>
      {fontIcon && <FontAwesomeIcon icon={fontIcon} />}
      {contentText}
    </Link>
  );
}
