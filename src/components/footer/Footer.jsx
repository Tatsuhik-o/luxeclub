import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
export default function Footer({ expanded }) {
  return (
    <div className={styles.footer}>
      {!expanded && (
        <div className={styles.footer_card}>
          <div className={styles.upper_footer}>
            <img src="./img/logo/logo_white.webp" alt="" />
            <div className={styles.navlinks}>
              <NavLink to={"/about"}>About Us</NavLink>
              <NavLink to={"/planning"}>Plan Trip</NavLink>
              <NavLink to={"/tracking"}>Track your trip</NavLink>
              <NavLink to={"/contact"}>Contact Us</NavLink>
            </div>
          </div>
          <div className={styles.lower_footer}></div>
        </div>
      )}
      <div className={styles.copyrights}>
        <div className={styles.author}>
          <p>
            Made by Tatsuhiko{" "}
            <a href="https://tatsuhiko.netlify.app/">(Portfolio)</a>
          </p>
          <p>
            Design by Mohitrana{" "}
            <a href="https://www.behance.net/mohitkharabe">(Behance)</a>
          </p>
        </div>
        <p className={styles.copyright_text}>
          <strong className={styles.symbol}>©️</strong>Copyrights 2023. All
          rights reserved to LuxeClub
        </p>
      </div>
    </div>
  );
}
