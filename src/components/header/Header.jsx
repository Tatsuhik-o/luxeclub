import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Header.module.css";
import { NavLink, Link } from "react-router-dom";
import CustomButton from "../ui/CustomButton";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function Header({ expanded, setExpanded }) {
  const [mobileView, setMobileView] = useState(false);
  const mobileRef = useRef(null);
  const location = useLocation().pathname;
  const mobileViewStyle = mobileView
    ? {
        transform: "translateX(-100%)",
      }
    : {};
  const logoStyle = expanded
    ? {
        height: "75%",
      }
    : {
        height: "100%",
      };

  useEffect(() => {
    function handleOutsideMobileView(event) {
      if (mobileRef.current && !mobileRef.current.contains(event.target)) {
        setMobileView(false);
      }
    }
    function CaptureWidth() {
      setMobileView(false);
      if (window.innerWidth < 1100) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideMobileView);
    window.addEventListener("resize", CaptureWidth);
    () => {
      window.removeEventListener("resize", CaptureWidth);
      document.removeEventListener("mousedown", handleOutsideMobileView);
    };
  }, []);

  useLayoutEffect(() => {
    if (window.innerWidth < 1100) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.logo} style={logoStyle}>
        <Link to={"/"}>
          <img src="/img/logo/logo.webp" alt="" />
        </Link>
      </div>
      {!expanded && (
        <div className={styles.nav_bar}>
          <NavLink to={"/tracking"}>track trip</NavLink>
          <NavLink to={"/planning"}>plan trip</NavLink>
          <NavLink to={"/about"}>about us</NavLink>
          <CustomButton
            contentText="contact us"
            bgColor={location === "/contact" ? "#DFA42E" : "#0E3241"}
            color="#fff"
            borderWidth={0}
            link="contact"
          />
        </div>
      )}
      {expanded && (
        <FontAwesomeIcon
          icon={faBars}
          className={styles.expand_icon}
          onClick={() => setMobileView(true)}
        />
      )}
      <div
        className={styles.mobile_view}
        style={mobileViewStyle}
        ref={mobileRef}
      >
        <NavLink to={"/tracking"}>track trip</NavLink>
        <NavLink to={"/planning"}>plan trip</NavLink>
        <NavLink to={"/about"}>about us</NavLink>
        <CustomButton
          contentText="contact"
          bgColor={location === "/contact" ? "#DFA42E" : "#0E3241"}
          color="#fff"
          borderWidth={0}
          link="contact"
        />
      </div>
    </div>
  );
}
