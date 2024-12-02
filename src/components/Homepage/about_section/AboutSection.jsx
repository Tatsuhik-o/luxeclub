import React from "react";
import styles from "./AboutSection.module.css";
import CustomButton from "../../ui/CustomButton";
import GoldBar from "../../ui/GoldBar";
export default function AboutSection({ expanded }) {
  const mobileLayerStyle = expanded
    ? { width: "100%", flexDirection: "column-reverse", fontSize: "1.8rem" }
    : {};
  const section_style = expanded ? { padding: "2rem" } : {};
  return (
    <div className={styles.about_section} style={section_style}>
      <div className={styles.first_layer}>
        <CustomButton
          contentText="about us"
          bgColor="#C3A870"
          color="#fff"
          link="about"
          borderWidth={0}
        />
      </div>
      <div className={styles.second_layer} style={mobileLayerStyle}>
        <p className={styles.about_text} style={mobileLayerStyle}>
          Luxe club is committed to revolutionizing the way you experience
          travel. We specialize in creating high-end,
          <strong> halal-compliant</strong> journeys that cater to your unique
          preferences and values.
        </p>
        <img
          src="/img/about_section/red_cross.webp"
          alt=""
          className={styles.red_cross}
          style={mobileLayerStyle}
        />
      </div>
      <GoldBar floatLocation="right" />
      <div
        className={styles.third_layer}
        style={expanded ? { flexDirection: "column" } : {}}
      >
        <div
          className={styles.tower_tag}
          style={
            expanded
              ? {
                  width: "100%",
                  height: "fit-content",
                  alignSelf: "center",
                }
              : {
                  width: "50%",
                }
          }
        ></div>
        <div
          className={styles.headline}
          style={
            expanded
              ? {
                  width: "90%",
                  transform: "translateY(-50%)",
                  alignSelf: "center",
                }
              : {
                  width: "50%",
                  alignSelf: "center",
                  transform: "translateX(-25%)",
                  fontSize: "1.3rem",
                }
          }
        >
          <h2>
            Experience halal <br /> travel like never before
          </h2>
          <p>
            We Are Pioneers In The Halal Travel Industry, Dedicated To Providing
            Exceptional, Culturally Rich Travel Experiences That Adhere To Halal
            Standards.
          </p>
          <CustomButton
            contentText="plan trip"
            bgColor="#C3A870"
            color="#fff"
            link="planning"
            borderWidth={0}
          />
        </div>
      </div>
      <GoldBar floatLocation="left" />
      <div className={styles.fourth_layer}>
        <div className={styles.layer_head}></div>
        <div className={styles.layer_line}>
          <h2>
            Experience the beauty of <br /> malysia
          </h2>
          <p>
            We Are Pioneers In The Halal Travel Industry, Dedicated To Providing
            Exceptional, Culturally Rich Travel Experiences That Adhere To Halal
            Standards.
          </p>
          <CustomButton
            contentText="track trip"
            bgColor="#C3A870"
            color="#fff"
            link="tracking"
            borderWidth={0}
          />
        </div>
      </div>
    </div>
  );
}
