import React, { useEffect, useRef, useState } from "react";
import styles from "./Tracking.module.css";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import CustomButton from "../../components/ui/CustomButton";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../components/footer/Footer";

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default function Tracking({ expanded, setExpanded }) {
  const [bookingTicket, setBookingTicket] = useState(useParams().id || "");
  const [bookingInformation, setBookingInformation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const confirmed = useParams() || "";
  function ticketSubmitted() {
    if (!bookingTicket) {
      return;
    }
    document.body.scrollTop = 500;
    setIsLoading(true);
    fetch(`http://localhost:3000/api/get_ticket?booking_id=${bookingTicket}`)
      .then((res) => res.json())
      .then((data) => {
        const bit_timeout = setTimeout(() => {
          setIsLoading(false);
          setBookingInformation(data[0]);
          setBookingTicket("");
        }, 500);
        return () => {
          clearTimeout(bit_timeout);
        };
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    document.body.scrollTop = 0;
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.tracking}>
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className={styles.tracking_main}>
        <div className={styles.hero}>
          <div className={styles.center_div}>
            <h2>Stay updated on your travel plans</h2>
            <div className={styles.ticket_details}>
              <label htmlFor="bookingID">
                {confirmed.id
                  ? `booking confirmed`
                  : "Enter your trip id to view all the details."}
              </label>
              <div className={styles.submit_area}>
                <input
                  type="text"
                  placeholder="P85T8CPIK7"
                  value={bookingTicket}
                  id="bookingID"
                  ref={inputRef}
                  onChange={(e) => setBookingTicket(e.target.value)}
                />
                <button onClick={ticketSubmitted}>view details</button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.booking_details}>
          {!isLoading && !bookingInformation && (
            <div className={styles.fill_in}>
              please fill in your booking details and hit view details :
            </div>
          )}
          {isLoading && <div className={styles.loader}></div>}
          {!isLoading && bookingInformation && (
            <div className={styles.booking_informations}>
              <div className={styles.ticket_glimpse}>
                <div className={styles.ticket_marker_one}></div>
                <div className={styles.detail_snippet}>
                  <h2>Booking Details.</h2>
                  <h4>Booking ID - {bookingInformation.id}</h4>
                  <p>
                    Personalized Care for From booking to your return, our
                    concierge team ensures every detail is perfect.
                    <br /> An Unforgettable Experience
                  </p>
                  <img
                    src={
                      bookingInformation.url ||
                      "/img/tracking_page/booking_ticket_temp.png"
                    }
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
                      <h2>Transit</h2>
                      <h3>{bookingInformation.departure}</h3>
                    </div>
                    <div className={styles.row}>
                      <h2>Time</h2>
                      <h3 className={styles.trip_time}>
                        {bookingInformation.date}
                      </h3>
                    </div>
                    <div className={styles.row}>
                      <h2>Duration</h2>
                      <h3>{bookingInformation.duration} Days</h3>
                    </div>
                    <div className={styles.row}>
                      <h2>Price</h2>
                      <h3>{bookingInformation.budget}$</h3>
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
                <CustomButton
                  contentText="Download"
                  fontIcon={faDownload}
                  bgColor="#976935"
                  color="#fff"
                  link="not_found"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer expanded={expanded} />
    </div>
  );
}
