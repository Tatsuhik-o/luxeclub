import React, { useState } from "react";
import styles from "./CityCard.module.css";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
export default function CityCard({ pictureCard, country, description, link }) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const exploreMoreStyle = hover
    ? { bottom: "calc(20% - 75px)" }
    : { bottom: "-10%" };
  const scaleImage = hover
    ? { transform: "scale(1.2)" }
    : { transform: "scale(1)" };
  return (
    <div
      className={styles.city_card}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => navigate(link)}
    >
      <div className={styles.dark_layer}></div>
      <img src={pictureCard} alt="" style={scaleImage} />
      <div className={styles.more_info}>
        <h2 className={styles.country_name}>Visit {country}</h2>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.explore_more} style={exploreMoreStyle}>
        Explore More <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
}
