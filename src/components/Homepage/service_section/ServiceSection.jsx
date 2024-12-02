import React from "react";
import styles from "./ServiceSection.module.css";
import GoldBar from "../../ui/GoldBar";
import ServicePoint from "../../service_point/ServicePoint";
import CustomButton from "../../ui/CustomButton";
export default function ServiceSection() {
  return (
    <>
      <div className={styles.space_bar}>
        <GoldBar floatLocation="right" />
      </div>
      <div className={styles.service_section}>
        <div className={styles.glimpse_service}>
          <img src="./img/service_section/glimpse.webp" alt="" />
        </div>
        <div className={styles.service_offer}>
          <h2>plan your trip</h2>
          <p>
            We are pioneers in the halal travel industry, dedicated to providing
            exceptional, culutrally rich travel experiences that adhere to halal
            standards.
          </p>
          <div className={styles.service_points}>
            <ServicePoint pointContent="Access to exclusive deals on flights and hotels" />
            <ServicePoint pointContent="24/7 customer support for a smooth travel experience" />
            <ServicePoint pointContent="Expert local guides offering in-depth tours and insider knowledge" />
          </div>
          <CustomButton
            contentText="plan your trip 🎫"
            color="#fff"
            bgColor="#C3A870"
            borderWidth={0}
            link="planning"
          />
        </div>
      </div>
    </>
  );
}
