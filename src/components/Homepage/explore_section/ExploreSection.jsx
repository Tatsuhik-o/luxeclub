import React from "react";
import styles from "./ExploreSection.module.css";
import GoldBar from "../../ui/GoldBar";
import CityCard from "../../city_card/CityCard";
export default function ExploreSection({ title }) {
  return (
    <>
      <div className={styles.space_bar}>
        <GoldBar floatLocation="left" />
      </div>
      <div className={styles.title_card}>
        <h2>{title} :</h2>
      </div>
      <div className={styles.explore_section}>
        <CityCard
          pictureCard={"./img/explore_section/City_1.webp"}
          country={"United States"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa veritatis eius incidunt iusto doloremque dolor rerum ad."
          }
          link={"/planning"}
        />
        <CityCard
          pictureCard={"./img/explore_section/City_2.webp"}
          country={"Indonesia"}
          description={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem ipsa veritatis eius incidunt iusto doloremque dolor rerum ad."
          }
          link={"/planning"}
        />
      </div>
    </>
  );
}
