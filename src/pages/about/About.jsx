import React, { useState } from "react";
import styles from "./About.module.css";
import Header from "../../components/header/Header";
import ExploreSection from "../../components/Homepage/explore_section/ExploreSection";
import TeamSection from "../../components/Homepage/team_section/TeamSection";
import Footer from "../../components/footer/Footer";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../../components/ui/CustomButton";
export default function About({ expanded, setExpanded }) {
  return (
    <div className={styles.about}>
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className={styles.about_hero}>
        <div className={styles.action_button}>
          <CustomButton
            bgColor="#0E3242"
            color="#fff"
            contentText="plan your trip"
            fontIcon={faMagnifyingGlass}
            borderWidth={2}
            link="planning"
          />
          <CustomButton
            contentText="track trip"
            borderWidth={2}
            color="#fff"
            borderColor="#fff"
            bgColor="transparent"
            link="tracking"
          />
        </div>
      </div>
      <div className={styles.padded_section}>
        <div className={styles.our_mission}>
          <h2 className={styles.title}>Vision & Mission</h2>
          <p className={styles.vision_story}>
            At Luxe club, our mission is to revolutionize the travel experience
            by offering luxurious, culturally authentic, and halal-compliant
            journeys. We are dedicated to providing personalized, high-quality
            services that cater to the unique needs and values of our clients,
            ensuring every trip is memorable, enriching, and stress-free.
            <br /> <br /> <br /> Our vision is to be the leading provider of
            halal travel experiences, setting the industry standard for luxury,
            cultural authenticity, and exceptional service. We aspire to inspire
            and empower travelers to explore the world with confidence, knowing
            that their values and preferences are at the heart of every journey
            we craft.
          </p>
          <div className={styles.arrows}>
            <div className={styles.left}>
              <div className={styles.bar}></div>
              <div className={styles.cube}></div>
            </div>
            <div className={styles.right}>
              <div className={styles.cube}></div>
              <div className={styles.bar}></div>
            </div>
          </div>
        </div>
        <div className={styles.experience_section}>
          <div className={styles.market_side}>
            <h2>
              Experience Halal Travel
              <br />
              Like Never Before
            </h2>
            <p>
              We Are Pioneers In The Halal Travel Industry, Dedicated To
              Providing Exceptional, Culturally Rich Travel Experiences That
              Adhere To Halal Standards.
            </p>
            <CustomButton
              contentText="plan your trip"
              bgColor="#C3A870"
              color="#fff"
            />
          </div>
          <div className={styles.market_image}>
            <img src="/img/about_page/mosq_head.webp" alt="" />
          </div>
        </div>
        <div className={styles.explore_section}>
          <ExploreSection title={"Explore The Beauty of Malaysia"} />
        </div>
        <div className={styles.team_section}>
          <TeamSection title={"Experiences That Speaks for Themeselves"} />
        </div>
        <div className={styles.footer}>
          <Footer expanded={expanded} />
        </div>
      </div>
    </div>
  );
}
