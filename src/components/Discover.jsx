// eslint-disable-next-line no-unused-vars
import React from "react";

import star from '../assets/svgs/star.svg'
import profile from "../assets/profile.webp";
import ladakh2 from "../assets/ladakh2.jpeg";
const Discover = () => {
  const stars = [
    {
      starLogo: star,
    },
    {
      starLogo: star,
    },
    {
      starLogo: star,
    },
    {
      starLogo: star,
    },
  ];
  return (
    <div className="p-4 mt-4  flex items-center justify-center">
      <div className="flex flex-col gap-3 justify-center items-center p-2">
        <h1 className="text-center p-4 text-3xl  font-medium">Discover</h1>
        <div className="grid grid-cols-3  p-4 justify-center gap-3">
          <div className="flex gap-2 bg-[#fff] p-2 shadow-2xl rounded-lg h-fit">
            <div>
              <div className="flex gap-2 p-4 items-center">
                <img
                  src={profile}
                  alt=""
                  className="rounded-full border w-[40px] h-[40px]"
                />
                <div className="flex flex-col">
                  <h2>Arjun Raghav</h2>
                  <div className="flex">
                    {stars.map((each,index) => {
                      return <img src={each.starLogo} key={index} className="w-3"/>
                    })}
                  </div>
                </div>
              </div>
              <p className="p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                neque sequi facilis quod quis sed veritatis doloremque quam
                tempore, numquam ipsum alias velit nihil eligendi asperiores
                totam similique itaque harum?{" "}
                <a href="" className="text-blue-400">
                  read more
                </a>
              </p>
            </div>
          </div>

          <div className="">
            <img src={ladakh2} alt="" className="h-1/2 w-full rounded-t-lg " />
            <div className="flex gap-2 bg-[#fff] p-2 shadow-2xl rounded-b-lg ">
              <div>
                <div className="flex gap-2 p-4 items-center">
                  <img
                    src={profile}
                    alt=""
                    className="rounded-full border w-[40px] h-[40px]"
                  />
                  <div className="flex flex-col">
                    <h2>Arjun Raghav</h2>
                    <div className="flex">
                    {stars.map((each, index) => {
                      return <img src={each.starLogo} key={index}  className="w-3"/>
                    })}
                  </div>
                  </div>
                </div>
                <p className="p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam neque sequi facilis quod quis sed veritatis doloremque
                  quam tempore, numquam ipsum alias velit nihil eligendi
                  asperiores totam similique itaque harum?{" "}
                  <a href="" className="text-blue-400">
                    read more
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className=" gap-3 flex flex-col">
            <div className="flex gap-2 bg-[#fff] p-2 shadow-2xl rounded-lg ">
              <div>
                <div className="flex gap-2 p-4 items-center">
                  <img
                    src={profile}
                    alt=""
                    className="rounded-full border w-[40px] h-[40px]"
                  />
                  <div className="flex flex-col">
                    <h2>Arjun Raghav</h2>
                    <div className="flex">
                    {stars.map((each,index) => {
                      return <img src={each.starLogo} key={index} className="w-3"/>
                    })}
                  </div>
                  </div>
                </div>
                <p className="p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam neque sequi facilis quod quis sed veritatis doloremque
                  quam tempore, numquam ipsum alias velit nihil eligendi
                  asperiores totam similique itaque harum?{" "}
                  <a href="" className="text-blue-400">
                    read more
                  </a>
                </p>
              </div>
            </div>
            <div className="flex gap-2 bg-[#fff] p-2 shadow-2xl rounded-lg ">
              <div>
                <div className="flex gap-2 p-4 items-center">
                  <img
                    src={profile}
                    alt=""
                    className="rounded-full border w-[40px] h-[40px]"
                  />
                  <div className="flex flex-col">
                    <h2>Arjun Raghav</h2>
                    <div className="flex">
                    {stars.map((each,index) => {
                      return <img src={each.starLogo} key={index} className="w-3"/>
                    })}
                  </div>
                  </div>
                </div>
                <p className="p-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam neque sequi facilis quod quis sed veritatis doloremque
                  quam tempore, numquam ipsum alias velit nihil eligendi
                  asperiores totam similique itaque harum?{" "}
                  <a href="" className="text-blue-400">
                    read more
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Discover;
