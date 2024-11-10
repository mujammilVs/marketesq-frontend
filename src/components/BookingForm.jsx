
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { confirmBooking } from "../redux/bookingSlice";
import complete from "../assets/svgs/complete.svg";

const BookingForm = () => {
  const booking = useSelector((state) => state.booking);
  const dispatch = useDispatch();

  const handleConfirm = () => {
    dispatch(confirmBooking());
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 h-screen">
      <div className="  bg-[#f0f0f0] shadow-lg p-8 w-full max-w-4xl mt-10">
        <div className="flex  p-4 gap-2 justify-between items-center m-4">
          <div className="flex  flex-col gap-2 w-1/2">
            <h1 className="font-medium text-2xl md:text-3xl">{booking.name}</h1>
            <p className="text-lg">{booking.phone}</p>
            <p className="text-lg">{booking.email}</p>
            <p className="text-lg">
              {booking.adults} and <span>{booking.children}</span>
            </p>
          </div>
          <hr className="h-20 bg-red-600 border border-slate-300" />
          <div className="flex gap-2 w-1/2">
            <img src={complete} alt="" className="w-1/4" />
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl font-bold">Order Complete</h1>
              <div className="flex flex-col">
                <h2>have questions?</h2>
                <span className="text-blue-400">contact us</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute  left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg px-6 py-4 w-1/2 flex items-center justify-between -mb-10">
          <form className=" ">
            <h1>CHECK-IN</h1>
            <input type="date" value={booking.checkIn} readOnly />
          </form>
          <div className=" ">
            <h1>CHECK-OUT</h1>
            <input type="date" value={booking.checkOut} readOnly />
          </div>
          <hr className="" />

          <div className=" ">
            <h1 className="p-2">ROOMS </h1>
            <div className="flex gap-2 justify-center items-center">
              <p>{booking.rooms}</p>
            </div>
          </div>

          <button
            type="submit"
            className="bg-[#276e9d] text-white font-medium  py-2 px-2 w-[150px] rounded  " onClick={handleConfirm}
          >
            ₹ {booking.price}
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
