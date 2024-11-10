import React, { useState } from "react";
import ladakh from "../assets/ladakh1.jpeg";
import { FaSquareInstagram, FaFacebook } from "react-icons/fa6";
import Discover from "./Discover";
import Services from "./Services";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  const [showDate, setShowDate] = useState(false);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  const userDateHandler = () => {
    setShowDate(true);
  };
  const handleNavigate = ()=>{
    navigate("/checkIn")
  }

  return (
    <>
      <div className=" p-4  flex ">
        <div className=" m-3 p-4 flex relative ">
          <div className="bg-[#f0f0f0] p-4 flex flex-col  gap-4 w-1/2">
            <h1 className="text-6xl  w-1/2">Work from Ladakh</h1>
            <p className="text-3xl">
              India's first true digital tourism ecosystem
            </p>
            <div className="flex gap-4 text-4xl ">
              <FaFacebook />
              <FaSquareInstagram />
            </div>
          </div>
          <div className="w-1/2">
            <img src={ladakh} alt="" />
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-lg px-6 py-4 w-11/12 flex items-center justify-between -mb-10">
            <form className=" " onSubmit={submitHandler}>
              <h1>CHECK-IN</h1>
              <input type="date"  />
            </form>
            <div className=" ">
              <h1>CHECK-OUT</h1>
              <input type="date" name="" id="" />
            </div>
            <hr className="" />

            <div className=" ">
              <h1 className="p-2">ROOMS </h1>
              <div className="flex gap-2 justify-center items-center">
                <button className="border rounded-full px-2 ">-</button>
                <p>1</p>
                <button className="border rounded-full  px-2">+</button>
              </div>
            </div>
            <button
              type="submit"
              className="bg-[#276e9d] text-white font-medium  py-2 px-4 w-[150px] rounded  " onClick={handleNavigate}
            >

              BOOK
            </button>
          </div>
        </div>
      </div>
      <Discover />
      <Services />
    </>
  );
};

export default Home;
