import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Homepage from "./pages/homepage/Homepage";
import Tracking from "./pages/tracking/Tracking";
import Planning from "./pages/planning/Planning";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import BookingConfirmation from "./pages/booking/BookingConfirmation";
import Not_Found from "./pages/404/NotFound";

function App() {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    function CaptureMobileWidth() {
      if (window.innerWidth < 1100) {
        setExpanded(true);
      } else {
        setExpanded(false);
      }
    }
    window.addEventListener("resize", CaptureMobileWidth);
    () => {
      window.removeEventListener("resize", CaptureMobileWidth);
    };
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/"
          element={<Homepage expanded={expanded} setExpanded={setExpanded} />}
        />
        <Route
          path="/tracking"
          element={<Tracking expanded={expanded} setExpanded={setExpanded} />}
        />
        <Route
          path="/planning"
          element={<Planning expanded={expanded} setExpanded={setExpanded} />}
        />
        <Route
          path="/about"
          element={<About expanded={expanded} setExpanded={setExpanded} />}
        />
        <Route
          path="/contact"
          element={<Contact expanded={expanded} setExpanded={setExpanded} />}
        />
        <Route
          path="*"
          element={<Not_Found expanded={expanded} setExpanded={setExpanded} />}
        />
        <Route
          path="/booking/:booking_id"
          element={
            <BookingConfirmation
              expanded={expanded}
              setExpanded={setExpanded}
            />
          }
        />
        <Route
          path="/tracking/:id"
          element={<Tracking expanded={expanded} setExpanded={setExpanded} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
