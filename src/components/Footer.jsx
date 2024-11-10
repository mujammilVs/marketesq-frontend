import React from "react";

const Footer = () => {
  return (
    <div className=" bg-[#f0f0f0] p-4">
      <div className="flex flex-col gap-2 p-4">
        <h1 className=" text-2xl font-bold">Brisphere</h1>
        <p className="">
          Spituk, ladakh,
          <br /> India,
          <br /> 194101 <br />
          +91-7764997033 <br /> amit.jha6700@gmail.com
        </p>
        <button className=" bg-[#276e9d] text-white font-medium  py-3 px-4 w-[150px] rounded">
          Location
        </button>
      </div>
    </div>
  );
};

export default Footer;
