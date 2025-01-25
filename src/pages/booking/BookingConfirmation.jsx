import React, { useCallback } from "react";
import { useState } from "react";
import styles from "./BookingConfirmation.module.css";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ConfirmButton from "../../components/ui/ConfirmButton";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function BookingConfirmation({ expanded, setExpanded }) {
  const { booking_id } = useParams();
  const [bookingInformation, setBookingInformation] = useState({});

  (async () => {
    const response = await fetch(
      `http://localhost:3000/get_booking/${booking_id}`
    );
    const data = await response.json();
    setBookingInformation(data[0]);
  })();

  return (
    <div className={styles.booking_confirmation}>
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className={styles.booking_confirm_main}>
        <div className={styles.hero}>
          <div className={styles.center_div}>
            <h2>Confirm Your Booking</h2>
          </div>
        </div>
        <div className={styles.booking_informations}>
          <div className={styles.ticket_glimpse}>
            <div className={styles.ticket_marker_one}></div>
            <div className={styles.detail_snippet}>
              <h2>Booking Details.</h2>
              <h4>Booking ID - {booking_id}</h4>
              <p>
                Personalized Care for From booking to your return, our concierge
                team ensures every detail is perfect.
                <br /> An Unforgettable Experience
              </p>
              <img
                src={bookingInformation.url}
                alt="booking placeholder"
                loading="lazy"
              />
            </div>
            <div className={styles.ticket_marker_two}></div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.ticket_snippet}>
            <div className={styles.table}>
              <div className={styles.upper_ticket}>
                <h2>{bookingInformation.destination}</h2>
                <h2>{capitalize(bookingInformation.type || "")}</h2>
              </div>
              <div className={styles.lower_ticket}>
                <div className={styles.row}>
                  <h2>Departure</h2>
                  <h3>{bookingInformation.departure}</h3>
                </div>
                <div className={styles.row}>
                  <h2>Trip Time</h2>
                  <h3>{bookingInformation.date}</h3>
                </div>
                <div className={styles.row}>
                  <h2>Duration</h2>
                  <h3>{bookingInformation.duration} Days</h3>
                </div>
                <div className={styles.row}>
                  <h2>Budget</h2>
                  <h3>{bookingInformation.budget}</h3>
                </div>
                <div className={styles.row}>
                  <h2>Destination</h2>
                  <h3>{bookingInformation.destination}</h3>
                </div>
                <div className={styles.row}>
                  <h2>Accomodation Type</h2>
                  <h3>{capitalize(bookingInformation.type || "")}</h3>
                </div>
                <div className={styles.row}>
                  <h2>Airline Preference</h2>
                  <h3>{bookingInformation.airline ? "Yes" : "No"}</h3>
                </div>
              </div>
            </div>
            <ConfirmButton
              contentText="Confirm Booking"
              bgColor="#0E3242"
              color="#fff"
              booking_id={booking_id}
            />
          </div>
        </div>
      </div>
      <Footer expanded={expanded} />
    </div>
  );
}
