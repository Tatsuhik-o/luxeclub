import React, { useState, useEffect } from "react";
import styles from "./NotFound.module.css";
import Header from "../../components/header/Header";
import CustomButton from "../../components/ui/CustomButton";
import Footer from "../../components/footer/Footer";
export default function NotFound({ expanded, setExpanded }) {
  return (
    <div className={styles.not_found}>
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className={styles.main_not_found}>
        <div className={styles.not_found_image}>
          <img src="/img/not_found_page/not_found.webp" alt="" />
        </div>
        <p>Looking for a destination? We're here to help you plan!</p>
        <CustomButton
          contentText="Back Home"
          bgColor="#0E3242"
          color="#fff"
          link=""
        />
      </div>
      <Footer expanded={expanded} />
    </div>
  );
}
