import React, { useState } from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";
import "../css/des.css";

import SouthAmerica from "../assets/popular-destinations/southAmerica.jpg";
import Europe from "../assets/popular-destinations/europe.jpg";
import Asia from "../assets/popular-destinations/asia.jpg";
import America from "../assets/popular-destinations/america.jpg";
import Africa from "../assets/popular-destinations/africa.jpg";

const Destinations = () => {
  const destinations = [
    {
      id: 1,
      link: "southAmerica",
      src: SouthAmerica,
      name: "South America",
      tours: 3,
    },
    {
      id: 2,
      link: "europe",
      src: Europe,
      name: "Europe",
      tours: 7,
    },

    {
      id: 4,
      link: "asia",
      src: Asia,
      name: "Asia",
      tours: 5,
    },
    {
      id: 5,
      link: "america",
      src: America,
      name: "America",
      tours: 4,
    },
    {
      id: 6,
      link: "africa",
      src: Africa,
      name: "Africa",
      tours: 3,
    },
  ];

  return (
    <>
      <div className=" md:max-w-[1180px] max-w-[500px] mx-auto ">
        <div className=" w-full px-[15px] ">
          <div className=" pt-[95px] pb-[5px]">
            <div className=" px-[20px] pb-[20px]">
              <div className=" md:flex items-end">
                <div className=" flex">
                  <TfiLocationPin className=" mr-[15px] mb-[5px] text-[#467fe7] text-[29px]" />
                  <h1 className=" text-[29px] font-[400] text-[#383838] ">
                    Popular Destinations
                  </h1>
                </div>
                <p className=" md:ml-[25px] md:mt-0 mt-[10px] text-[15px] text-[#84a7e8]">
                  / View All Destinations
                </p>
              </div>
            </div>
            <div className=" px-[20px] pb-[20px] md:w-[75%]">
              <p className=" text-[15px] text-[#8c8c8c] mb-[20px] leading-[1.7]">
                Etiam porta sem malesuada magna mollis euismod. Maecenas sed
                diam eget risus varius blandit sit amet non magna. Vivamus
                sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center flex-wrap flex-col align-middle items-center lg:grid mt-10 lg:grid-cols-5">
        {destinations?.map((place) => {
          return (
            <div
              key={place.id}
              className={`mb-[40px] w-[430px] lg:w-auto transition-all`}
            >
              <div
                className={` bg-cover overflow-hidden h-[516px] lg:h-[350px] col-start-${place.id} col-span-1`}
                style={{
                  backgroundImage: `url(${place.src})`,
                }}
              >
                {/* <img className="" src={place?.src} alt="" /> */}
                <div className="h-[516px] lg:h-[350px] pt-[470px] hover:pt-[430px] lg:pt-[304px] hover:lg:pt-[264px] card relative hover:border-b-4 hover:border-b-blue-500">
                  <div className="mx-[20px]">
                    <div className=" flex justify-between mb-[15px]">
                      <p className=" flex justify-start items-center text-truncate gap-1 text-lg text-white font-bold">
                        <TfiLocationPin />
                        {place.name}
                      </p>
                      <p className=" text-blue-500 text-truncate">
                        {place.tours} tours
                      </p>
                    </div>
                    <div className="">
                      <Link to={`/tour-destination/${place.link}`}>
                        <a className="text-blue-500 font-bold text-xs cursor-pointer">
                          VIEW ALL TOURS
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* <div className=" w-full flex">
        <div className=" w-[20%] bg-black overflow-hidden relative">
          <div className=" relative">
            <img
              src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/uploads/2016/06/shutterstock_124333858-800x960.jpg"
              alt=""
              width={800}
              height={960}
            />
          </div>
          <div className="  ">
            <div className=" flex">
              <ImLocation2 />
              <h1>South America</h1>
              <p>3 tours</p>
            </div>
            <p>View all tours</p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Destinations;
