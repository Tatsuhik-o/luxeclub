import React, { useEffect, useReducer, useState } from "react";
import styles from "./Planning.module.css";
import Header from "../../components/header/Header";
import CustomButton from "../../components/ui/CustomButton";
import CityCard from "../../components/city_card/CityCard";
import TeamCard from "../../components/team_card/TeamCard";
import ExploreSection from "../../components/Homepage/explore_section/ExploreSection";
import BookingCard from "../../components/booking_card/BookingCard";
import Footer from "../../components/footer/Footer";
const intialSteps = {
  step: 0,
  departure: "United States",
  destination: "United States",
  duration: "",
  minPrice: "",
  maxPrice: "",
  type: "",
  accomodation: "basic",
  side_note: "",
};
const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "France",
  "Australia",
  "Japan",
  "China",
  "Brazil",
  "Saudi Arabia",
  "Egypt",
  "Greece",
];

function regulateTrip(state, action) {
  switch (action.type) {
    case "departure":
      return { ...state, departure: action.payload };
    case "duration":
      return { ...state, duration: action.payload };
    case "destination":
      return { ...state, destination: action.payload };
    case "minPrice":
      return { ...state, minPrice: action.payload };
    case "maxPrice":
      return { ...state, maxPrice: action.payload };
    case "type":
      return { ...state, type: action.payload };
    case "accomodation":
      return { ...state, accomodation: action.payload };
    case "side_note":
      return { ...state, side_note: action.payload };
    case "search_results":
      return { ...state, step: 2 };
    case "clear":
      return {
        ...intialSteps,
        step: state.step,
        duration: state.duration,
        departure: state.departure,
        destination: state.destination,
      };
    case "step":
      if (state.departure && state.duration && state.destination)
        return { ...state, step: state.step + 1 };
      else {
        return { ...state };
      }
  }
}

export default function Planning({ expanded, setExpanded }) {
  const [tripInfo, dispatch] = useReducer(regulateTrip, intialSteps);
  const [tripResults, setTripResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataToLoad, setDataToLoad] = useState([]);
  const [iterations, setIerations] = useState(8);

  async function trimResults() {
    dispatch({ type: "search_results" });
    setLoading(true);
    fetch(
      `http://localhost:3000/check_rooms?min_price=${tripInfo.minPrice}&max_price=${tripInfo.maxPrice}&destination=${tripInfo.destination}&duration=${tripInfo.duration}&type=${tripInfo.accomodation}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setTripResults(data);
      });
  }

  useEffect(() => {
    const fakeTimer = setTimeout(() => {
      setDataToLoad(tripResults.slice(0, iterations));
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(fakeTimer);
    };
  }, [tripResults, iterations]);

  function LoadMore() {
    setIerations((iterations) => iterations + 4);
  }

  return (
    <div className={styles.planning}>
      <Header expanded={expanded} setExpanded={setExpanded} />
      <div className={styles.hero}></div>
      {tripInfo?.step === 0 && (
        <div className={styles.planning_first_form}>
          <div className={`${styles.departure} ${styles.cmn}`}>
            <label htmlFor="departure">departure :</label>
            <select
              name="departure"
              id="departure"
              value={tripInfo.departure}
              onChange={(e) =>
                dispatch({ type: "departure", payload: e.target.value })
              }
              className={styles.outer_layer}
            >
              {countries.map((country) => {
                return <option key={country}>{country}</option>;
              })}
            </select>
          </div>
          <div className={`${styles.date} ${styles.cmn}`}>
            <label htmlFor="duration">duration :</label>
            <input
              type="number"
              placeholder="1"
              id="duration"
              value={tripInfo.duration}
              onChange={(e) => {
                dispatch({ type: "duration", payload: e.target.value });
              }}
            />
          </div>
          <div className={`${styles.destination} ${styles.cmn} ${styles.date}`}>
            <label htmlFor="destination">destination :</label>
            <select
              name="destination"
              id="destination"
              value={tripInfo.destination}
              onChange={(e) =>
                dispatch({ type: "destination", payload: e.target.value })
              }
              className={styles.outer_layer}
            >
              {countries.map((country) => {
                return <option key={country}>{country}</option>;
              })}
            </select>
          </div>
          <div className={`${styles.submit} ${styles.cmn}`}>
            <button
              id="submitInitialStep"
              onClick={() => {
                dispatch({ type: "step" });
              }}
            >
              Search
            </button>
          </div>
        </div>
      )}
      {tripInfo.step >= 1 && (
        <div className={styles.planning_second_form}>
          <div className={styles.previous_details}>
            <p>{tripInfo.departure}</p>
            <p>{tripInfo.duration} Days</p>
            <p>{tripInfo.destination}</p>
          </div>
          <div className={styles.more_informations}>
            <div className={styles.left_side}>
              <div className={styles.price}>
                <label htmlFor="">Price Range :</label>
                <div className={styles.price_range}>
                  <input
                    type="number"
                    placeholder="Min."
                    id="priceMin"
                    value={tripInfo.minPrice}
                    onChange={(e) =>
                      dispatch({ type: "minPrice", payload: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    placeholder="Max."
                    id="priceMax"
                    value={tripInfo.maxPrice}
                    onChange={(e) =>
                      dispatch({ type: "maxPrice", payload: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className={styles.holiday_type}>
                <label htmlFor="holiday">Holiday Type :</label>
                <select
                  name="holiday"
                  id="holiday"
                  value={tripInfo.type}
                  onChange={(e) =>
                    dispatch({ type: "type", payload: e.target.value })
                  }
                >
                  <option value="Adventure">Adventure</option>
                  <option value="Beach">Beach</option>
                  <option value="Cultural">Cultural</option>
                  <option value="Family">Family</option>
                  <option value="Romantic">Romantic</option>
                  <option value="Luxury">Luxury</option>
                </select>
              </div>
              <div className={styles.accomodation_type}>
                <label htmlFor="">Accommodation Type :</label>
                <div className={styles.radio_group}>
                  <div className={styles.radio}>
                    <input
                      type="radio"
                      value={"basic"}
                      id="basic"
                      name="accomodation"
                      checked={tripInfo.accomodation === "basic"}
                      onChange={(e) =>
                        dispatch({
                          type: "accomodation",
                          payload: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="basic">basic</label>
                  </div>
                  <div className={styles.radio}>
                    <input
                      type="radio"
                      value={"premium"}
                      id="premium"
                      name="accomodation"
                      checked={tripInfo.accomodation === "premium"}
                      onChange={(e) =>
                        dispatch({
                          type: "accomodation",
                          payload: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="premium">premium</label>
                  </div>
                  <div className={styles.radio}>
                    <input
                      type="radio"
                      value={"diamond"}
                      id="diamond"
                      name="accomodation"
                      checked={tripInfo.accomodation === "diamond"}
                      onChange={(e) =>
                        dispatch({
                          type: "accomodation",
                          payload: e.target.value,
                        })
                      }
                    />
                    <label htmlFor="diamond">diamond</label>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.right_side}>
              <div className={styles.additional_info}>
                <label htmlFor="addit_info">Additional Requirements</label>
                <textarea
                  name="addit_info"
                  id="addit_info"
                  placeholder="Write a note."
                  value={tripInfo.side_note}
                  onChange={(e) =>
                    dispatch({ type: "side_note", payload: e.target.value })
                  }
                ></textarea>
                <p>
                  Note: Personalized care from booking to your return, our
                  concierge team ensures every detail is perfect. an
                  unforgettable experience
                </p>
              </div>
              <div className={styles.next_step}>
                <button
                  className={styles.clear_all}
                  onClick={() => dispatch({ type: "clear" })}
                >
                  clear all
                </button>
                <button className={styles.redo_search} onClick={trimResults}>
                  show {tripResults.length ? tripResults.length : "All"} places
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className={styles.fake_loader}>
          <div className={styles.loader}></div>
        </div>
      )}
      {!loading && tripInfo.step === 2 && (
        <>
          <div className={styles.trip_search}>
            {dataToLoad.map((data) => {
              return <BookingCard data={data} key={data.id} />;
            })}
          </div>
          {dataToLoad.length >= 8 && iterations <= dataToLoad.length && (
            <div className={styles.load_more}>
              <button onClick={LoadMore}>load more</button>
            </div>
          )}
        </>
      )}
      <div className={styles.about_us_part}>
        <div className={styles.paragraph}>
          <div className={styles.wrapper}>
            <h2>Experience Halal Travel Like Never Before </h2>
            <p>
              We Are Pioneers In The Halal Travel Industry, Dedicated To
              Providing Exceptional, Culturally Rich Travel Experiences That
              Adhere To Halal Standards.
            </p>
            <CustomButton
              contentText="about us"
              bgColor="#C3A870"
              color="#fff"
              link="about"
            />
          </div>
        </div>
        <div className={styles.mosq_img}></div>
      </div>
      <div className={styles.explore_section}>
        <ExploreSection title={"Explore The Beauty of Malaysia"} />
      </div>
      <Footer expanded={expanded} />
    </div>
  );
}
