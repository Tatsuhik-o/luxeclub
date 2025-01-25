import React from "react";
import styles from "./ConfirmButton.module.css";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

CustomButton.propTypes = {
  contentText: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
  borderWidth: PropTypes.number,
  fontIcon: PropTypes.object,
  link: PropTypes.string,
  borderColor: PropTypes.string,
  booking_id: PropTypes.string,
};

export default function CustomButton({
  contentText,
  bgColor = "#F3EBE5",
  color = "#4F5557",
  borderWidth = 0,
  fontIcon,
  borderColor = "#4F5557",
  booking_id,
}) {
  const navigate = useNavigate();
  const confirmBooking = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ booking_id }),
    };
    const response = await fetch(
      "http://localhost:3000/confirm_booking",
      options
    );
    const data = await response.json();
    if (data) {
      navigate("/tracking");
    }
  };
  const cutsomStyle = {
    backgroundColor: bgColor,
    color,
    border: `${borderWidth}px solid ${borderColor}`,
  };
  return (
    <div
      className={styles.custom_button}
      style={cutsomStyle}
      onClick={confirmBooking}
    >
      {fontIcon && <FontAwesomeIcon icon={fontIcon} />}
      {contentText}
    </div>
  );
}
