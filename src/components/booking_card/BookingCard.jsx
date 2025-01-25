import React, { useState } from "react";
import styles from "./BookingCard.module.css";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
export default function BookingCard({ data }) {
  const [showBook, setShowBook] = useState(false);
  const navigate = useNavigate();
  return (
    <div
      className={styles.booking_card}
      onMouseEnter={() => setShowBook(true)}
      onMouseLeave={() => setShowBook(false)}
      onClick={() => navigate(`/booking/${data.id}`)}
    >
      <img src={data.url} alt={data.id} loading="lazy" />
      <div className={styles.location}>
        <FontAwesomeIcon icon={faLocationPin} color="#DFA42E" />
        <p>{data.destination}</p>
      </div>
      <div className={styles.trip_id}>{data.id}</div>
      <div className={styles.duration}>{data.duration} Days</div>
      <div className={styles.budget_and_book}>
        <p>
          Price: <span>{Math.round(data.price / data.duration)}$ / night</span>
        </p>
        {
          <button
            style={showBook ? { opacity: "1" } : { opacity: "0" }}
            className={styles.btn}
          >
            Book Trip
          </button>
        }
      </div>
    </div>
  );
}
