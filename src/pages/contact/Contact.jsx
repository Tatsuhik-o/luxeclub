import React, { useState, useEffect } from "react";
import styles from "./Contact.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../components/ui/CustomButton";
export default function Contact({ expanded, setExpanded }) {
  return (
    <div className={styles.contact}>
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className={styles.contact_hero}></div>
      <div className={styles.contact_main_section}>
        <div className={styles.main_contact}>
          <h4 className={styles.form_title}>
            Enter detail to connect with out team
          </h4>
          <div className={styles.names}>
            <div className={styles.first_name}>
              <label htmlFor="">First Name</label>
              <input type="text" placeholder="Taha" />
            </div>
            <div className={styles.last_name}>
              <label htmlFor="">Last Name</label>
              <input type="text" placeholder="Halim" />
            </div>
          </div>
          <div className={styles.special_info}>
            <div className={styles.phone_number}>
              <label htmlFor="">Phone no.</label>
              <input type="number" placeholder="+1" />
            </div>
            <div className={styles.email}>
              <label htmlFor="">Email Address</label>
              <input type="email" placeholder="test@test.com" />
            </div>
          </div>
          <div className={styles.message}>
            <label htmlFor="">Message</label>
            <textarea
              name=""
              id=""
              placeholder="Write your message ..."
            ></textarea>
          </div>
          <div className={styles.send_btn}>
            <CustomButton
              contentText="Send Message"
              bgColor="#0E3242"
              color="#fff"
              fontIcon={faPaperPlane}
            />
          </div>
        </div>
      </div>
      <Footer expanded={expanded} />
    </div>
  );
}
