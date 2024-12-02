import React, { useEffect, useState } from "react";
import styles from "./Homepage.module.css";
import Header from "../../components/header/Header";
import Hero from "../../components/Homepage/hero/Hero";
import ScrollDown from "../../components/Homepage/scroll/ScrollDown";
import AboutSection from "../../components/Homepage/about_section/AboutSection";
import ServiceSection from "../../components/Homepage/service_section/ServiceSection";
import ExploreSection from "../../components/Homepage/explore_section/ExploreSection";
import TeamSection from "../../components/Homepage/team_section/TeamSection";
import Footer from "../../components/footer/Footer";
export default function Homepage({ expanded, setExpanded }) {
  return (
    <div className={styles.homepage}>
      <Header expanded={expanded} setExpanded={setExpanded} />
      <Hero expanded={expanded} />
      <ScrollDown />
      <AboutSection expanded={expanded} />
      <ServiceSection />
      <ExploreSection title={"Explore the beauty of the world"} />
      <TeamSection title={"Meet The Team"} />
      <Footer expanded={expanded} />
    </div>
  );
}
