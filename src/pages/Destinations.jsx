import React from "react";
import { TfiLocationPin } from "react-icons/tfi";
import { Link } from "react-router-dom";

import bg from "../assets/section-bg-4.jpg";

import SouthAmerica from "../assets/popular-destinations/southAmerica.jpg";
import Europe from "../assets/popular-destinations/europe.jpg";
import Asia from "../assets/popular-destinations/asia.jpg";
import America from "../assets/popular-destinations/america.jpg";
import Africa from "../assets/popular-destinations/africa.jpg";
import easternEurope from "../assets/popular-destinations/eastern-europe.jpg";

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
      id: 3,
      link: "easternEurope",
      src: easternEurope,
      name: "Eastern Europe",
      tours: 2,
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
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="pt-40 flex flex-col justify-center gap-4 items-center bg-cover bg-center h-[350px] sm:h-[310px] md:h-[600px] w-auto relative font-sans text-white text-center"
      >
        <p className=" text-4xl md:text-7xl font-bold">Destinations</p>
        <p className=" text-xl sm:text-2xl">Explore Tours By Destinations</p>
      </div>

      <div>
        <div className="container flex justify-center flex-wrap  mt-10 mx-auto">
          {destinations?.map((place) => {
            return (
              <div
                key={place.id}
                className=" mb-[40px] px-[20px] w-[430px] md:w-[383px] transition-all"
              >
                <div
                  className=" bg-cover overflow-hidden h-[516px] md:h-[416px]"
                  style={{
                    backgroundImage: `url(${place.src})`,
                  }}
                >
                  <div className="h-[516px] md:h-[416px] pt-[470px] md:pt-[370px] hover:pt-[430px] hover:md:pt-[330px] card relative hover:border-b-4 hover:border-blue-500">
                    <div className="mx-[20px]">
                      <div className=" flex justify-between mb-[15px]">
                        <p className=" flex justify-start items-center gap-1 text-lg text-white font-bold">
                          <TfiLocationPin />
                          {place.name}
                        </p>
                        <p className=" text-blue-500">{place.tours} tours</p>
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
      </div>
    </>
  );
};

export default Destinations;
