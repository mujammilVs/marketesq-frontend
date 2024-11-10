import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setBookingData } from "../redux/bookingSlice";
import { FaArrowRight } from "react-icons/fa6";

const CheckInForm = () => {
  const booking = useSelector((state) => state.booking);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [countValue, setCountValue] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    adults: "1 Adult",
    children: "0 child",
    checkIn: "",
    checkOut: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setError("");
    // Clear error message when input changes
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation check for empty fields
    const { name, email, phone, checkIn, checkOut } = formData;
    if (!name || !email || !phone || !checkIn || !checkOut) {
      setError("Please fill in all required fields.");
      return; // if validation fails
    }

    // Dispatch and navigate if validation passes
    dispatch(setBookingData({ ...formData, rooms: countValue }));
    navigate("/booking-form");
  };

  const increaseCount = () => {
    setCountValue((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCountValue((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="flex flex-col items-center p-6 justify-center h-screen">
      <div className="bg-[#f0f0f0] h-[300px] relative p-10 m-4 w-[90%]">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            placeholder="Amit Jha"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-md"
          />
          <input
            type="email"
            name="email"
            placeholder="amit.jha6700@gmail.com"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-md"
          />
          <input
            type="text"
            name="phone"
            placeholder="+91 - 7764997022"
            value={formData.phone}
            onChange={handleChange}
            className="p-4 rounded-md"
          />
          <div className="flex gap-2">
            <select
              name="adults"
              value={formData.adults}
              onChange={handleChange}
              className="p-4 rounded-md"
            >
              <option>1 Adult</option>
              <option>2 Adults</option>
              <option>3 Adults</option>
            </select>
            <select
              name="children"
              value={formData.children}
              onChange={handleChange}
              className="p-4 rounded-md"
            >
              <option>0 Children</option>
              <option>1 Child</option>
              <option>2 Children</option>
            </select>
          </div>

          <div className="flex justify-between items-center gap-4 bg-[#fff] p-6 absolute mt-12 rounded-lg top-40 w-[70%] left-30 right-40 shadow-lg">
            <div className="flex flex-col gap-2">
              <h1>Check-IN</h1>
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>Check-OUT</h1>
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className=""
              />
            </div>
            <div className="flex flex-col gap-2">
              <h1>ROOMS</h1>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={decreaseCount}
                  className="border rounded-full w-6"
                >
                  -
                </button>
                <p>{countValue}</p>
                <button
                  type="button"
                  onClick={increaseCount}
                  className="border rounded-full w-6"
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex items-center font-medium gap-3 bg-[#276e9d] justify-between text-white md:px-4 py-2 rounded"
              >
                ₹ {booking.price}
                <span>
                  <FaArrowRight />
                </span>
              </button>
              <p className="text-[10px] font-medium">
                Click to pay token amount
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckInForm;
