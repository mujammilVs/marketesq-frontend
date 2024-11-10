import React from "react";
import wifi from "../assets/svgs/wifi.svg";
import transport from "../assets/svgs/transportation.svg";
import meals from "../assets/svgs/meals.svg";
import tourism from "../assets/svgs/tourism.svg";
import jobs from "../assets/svgs/jobs.svg";
import home from "../assets/svgs/home.svg";
import cart from "../assets/svgs/cart.svg";
import delivery from "../assets/svgs/delivery.svg";
const Services = () => {
  const Data = [
    {
      id: 1,
      type: "High Speed Internet",
      about:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
      logo: wifi,
    },
    {
      id: 2,
      type: "Healty Meals",
      about:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
      logo: meals,
    },
    {
      id: 3,
      type: "Homely Stay",
      about:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
      logo: home,
    },
    {
      id: 1,
      type: "Transportation",
      about:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
      logo: transport,
    },
    {
      id: 2,
      type: "Food Delivery",
      about:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
      logo: delivery,
    },
    {
      id: 3,
      type: "Tourism",
      about:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
      logo: tourism,
    },
    {
      id: 1,
      type: "Job",
      about:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
      logo: jobs,
    },
    {
      id: 2,
      type: "Rental Services",
      about:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
      logo: transport,
    },
    {
      id: 9,
      type: "online Shopping",
      about:
        "Optical fiber connections provided in not only in your cabins but rather to all of the BriSphere scenic working spaces and dinning areas.",
      logo: cart,
    },
  ];

  return (
    <div className="min-h-screen m-4 p-4">
      <h1 className="text-center p-4 text-3xl  font-medium">Services</h1>
      <div className="p-3 grid grid-cols-3 gap-3  m-4">
        {Data.map((each, index) => {
          return (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-2 border border-gray-200 bg-[#fff] p-2 shadow-xl rounded-lg h-fit "
            >
              <img src={each.logo} alt="" className="w-1/4 " />
              <h1 className="md:text-2xl text-xl font-medium">{each.type}</h1>
              <p className="p-4">{each.about}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
