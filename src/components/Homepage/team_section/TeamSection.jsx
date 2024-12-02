import React from "react";
import styles from "./TeamSection.module.css";
import GoldBar from "../../ui/GoldBar";
import TeamCard from "../../team_card/TeamCard";
import { team_members } from "../../../utils/team_members";
export default function TeamSection({ title }) {
  return (
    <>
      <div className={styles.space_bar}>
        <GoldBar floatLocation="right" />
      </div>
      <div className={styles.team_section}>
        <h2 className={styles.team_title}>{title}</h2>
        <div className={styles.team_cards}>
          {team_members.map((member, index) => {
            return (
              <TeamCard
                key={index}
                teamMember={member.pic}
                teamPosition={member.position}
                teamName={member.name}
                teamQuote={member.quote}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
