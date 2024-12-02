import React from "react";
import styles from "./TeamCard.module.css";

export default function TeamCard({
  teamMember,
  teamName,
  teamPosition,
  teamQuote,
}) {
  return (
    <div className={styles.team_card}>
      <img src={`./img/team_members/${teamMember}`} alt="" />
      <div className={styles.info_collection}>
        <div className={styles.quote}>{teamQuote}</div>
        <div className={styles.dashed_bar}></div>
        <h2 className={styles.team_member_name}>{teamName}</h2>
        <p className={styles.team_position}>{teamPosition}</p>
      </div>
    </div>
  );
}
