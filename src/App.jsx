// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BookingForm from "./components/BookingForm";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import CheckInForm from "./components/CheckInForm.jsx";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking-form" element={<BookingForm />} />
        <Route path="/checkIn" element={<CheckInForm />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
