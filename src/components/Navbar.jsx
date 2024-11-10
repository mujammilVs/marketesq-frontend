import React from "react";

import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();

  const handle = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-between bg-[#fff] p-4 m-2">
      <h2 className="font-bold text-xl cursor-pointer" onClick={handle}>
        Brisphere
      </h2>
      <ul className="flex gap-4">
        <Link to="/discover">
          <li>Discover</li>
        </Link>
        <Link to="/Services">
          <li>Services</li>
        </Link>
        <Link to="/Aboutus">
          <li>About Us</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
