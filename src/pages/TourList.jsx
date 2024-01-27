import React, { useState } from "react";
import { HiOutlineClock } from "react-icons/hi";
import { AiTwotoneCalendar } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { FiMail } from "react-icons/fi";
import { FaPhone } from "react-icons/fa";
import { Pagination } from "@mantine/core";
import StarRating from "../components/StarRating";

import bg from "../assets/search-bg.jpg";

import africa from "../assets/search-tours/africa.jpg";
import alcatraz from "../assets/search-tours/alcatraz.jpg";
import america_mountain from "../assets/search-tours/america-mountain.jpg";
import america from "../assets/search-tours/america.jpg";
import argentina from "../assets/search-tours/argentina.jpg";
import austria from "../assets/search-tours/austria.jpg";
import brazil from "../assets/search-tours/brazil.jpeg";
import chile from "../assets/search-tours/chile.jpeg";
import china from "../assets/search-tours/china.jpeg";
import dubai from "../assets/search-tours/dubai.jpg";
import england from "../assets/search-tours/england.jpg";
import finland from "../assets/search-tours/finland.jpg";
import india from "../assets/search-tours/india.jpg";
import italy from "../assets/search-tours/italy.jpg";
import japan from "../assets/search-tours/japan.jpg";
import norway from "../assets/search-tours/norway.jpeg";
import pais from "../assets/search-tours/pais.jpg";
import south_africa from "../assets/search-tours/south-africa.jpeg";
import special from "../assets/search-tours/special.jpg";
import switzerland from "../assets/search-tours/switzerland.jpg";
import thailand from "../assets/search-tours/thailand.jpeg";
import tiger from "../assets/search-tours/tiger.jpg";

import SouthAmerica from "../assets/popular-destinations/southAmerica.jpg";
import Europe from "../assets/popular-destinations/europe.jpg";
import Asia from "../assets/popular-destinations/asia.jpg";
import Africa from "../assets/popular-destinations/africa.jpg";

import photo1 from "../assets/travel-articles/photo1.jpg";
import photo2 from "../assets/travel-articles/photo2.jpg";
import photo3 from "../assets/travel-articles/photo3.jpg";

const itemPerPage = 6;

const TourList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const places = [
    {
      id: 1,
      link: "africa",
      src: africa,
      name: "Africa – Amazing African Safari",
      price: "100",
      duration: "5 Hours",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 0,
      review: 0,
    },
    {
      id: 2,
      link: "south Africa",
      src: south_africa,
      name: "South Africa – Cape Town",
      price: "2,200",
      duration: "7 Days 6 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4,
      review: 1,
    },
    {
      id: 3,
      link: "johannesburg",
      src: tiger,
      name: "5-Day Johannesburg – Victoria Falls",
      price: "2,700",
      duration: "5 Days 4 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 3.5,
      review: 1,
    },
    {
      id: 4,
      link: "america",
      src: america,
      name: "America – 2 Days in Lake Tahoe",
      price: "300",
      duration: "2 Days",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4,
      review: 1,
    },
    {
      id: 5,
      link: "alcatraz",
      src: alcatraz,
      name: "Alcatraz Tour plus Muir Woods",
      price: "120",
      duration: "10 Hours",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4,
      review: 2,
    },
    {
      id: 6,
      link: "americaGrandCanyon",
      src: america_mountain,
      name: "America – Grand canyon, Golden Gate",
      price: "2,800",
      duration: "9 Days 8 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 5,
      review: 1,
    },
    {
      id: 7,
      link: "specialNewYork",
      src: special,
      name: "Special Day Trip in New York",
      price: "80",
      duration: "10 Hourss",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 0,
      review: 0,
    },
    {
      id: 8,
      link: "dubai",
      src: dubai,
      name: "Dubai – All Stunning Places",
      price: "1,200",
      duration: "8 Hours",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4,
      review: 6,
    },
    {
      id: 9,
      link: "japan",
      src: japan,
      name: "Japan – 5 Days in Tokyo, Fujikawa",
      price: "1,600",
      duration: "5 Days",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4,
      review: 3,
    },
    {
      id: 10,
      link: "india",
      src: india,
      name: "India – Mumbai, New Delhi",
      price: "1,600",
      duration: "5 Days 4 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4.5,
      review: 1,
    },
    {
      id: 11,
      link: "thailand",
      src: thailand,
      name: "Thailand – 4 Days in Phuket",
      price: "1,700",
      duration: "7 Days 6 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 3.5,
      review: 1,
    },
    {
      id: 12,
      link: "china",
      src: china,
      name: "China – Suzhou and Zhouzhuang",
      price: "1,400",
      duration: "4 Days 3 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 5,
      review: 1,
    },
    {
      id: 13,
      link: "switzerland",
      src: switzerland,
      name: "Switzerland – 7 Days in Zurich, Zermatt",
      price: "3,500",
      duration: "7 Days",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 5,
      review: 4,
    },
    {
      id: 14,
      link: "enquiry",
      src: italy,
      name: "Enquiry Form Only – Italy – 6 Days",
      price: "2,000",
      duration: "5 Days",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4.5,
      review: 1,
    },
    {
      id: 15,
      link: "finland",
      src: finland,
      name: "Finland – Helsinki, Santa Claus Town",
      price: "3,500",
      duration: "8 Days 7 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4,
      review: 1,
    },
    {
      id: 16,
      link: "paris",
      src: pais,
      name: "Paris – Eiffel Tower, Notre Dame Cathedral..",
      price: "800",
      duration: "10 Hours",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4.5,
      review: 1,
    },
    {
      id: 17,
      link: "austria",
      src: austria,
      name: "Austria – 6 Days in Vienna, Hallstatt",
      price: "2,100",
      duration: "2 Days 1 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4.5,
      review: 1,
    },
    {
      id: 18,
      link: "england",
      src: england,
      name: "England – London, York, Scotland",
      price: "5000",
      duration: "7 Days 6 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4,
      review: 2,
    },
    {
      id: 19,
      link: "norway",
      src: norway,
      name: "Norway – Heaven on Earth Aurora",
      price: "270",
      duration: "16 Hours",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 4.5,
      review: 1,
    },
    {
      id: 20,
      link: "argentina",
      src: argentina,
      name: "Argentina – Great Diving Trip",
      price: "1,200",
      duration: "2 Days 1 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 3,
      review: 1,
    },
    {
      id: 21,
      link: "brazil",
      src: brazil,
      name: "Brazil – Rio de Janeiro",
      price: "1,900",
      duration: "3 Days 2 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 5,
      review: 1,
    },
    {
      id: 22,
      link: "chile",
      src: chile,
      name: "Chile – Santiago, Wine Country",
      price: "1,900",
      duration: "6 Days 5 Nights",
      availability: `Jan 16’ - Dec 16’`,
      detail:
        "Donec id elit non mi porta gravida at eget metus. Nulla vitae elit libero, […]",
      rating: 5,
      review: 1,
    },
  ];

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemPerPage;
  const endIndex = startIndex + itemPerPage;

  // Get the subset of data for the current page
  const paginatedData = places.slice(startIndex, endIndex);

  // Handle pagination button clicks
  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div
        className=" hidden lg:block bg-no-repeat bg-cover bg-center pt-[225px] pb-[20px]"
        style={{
          backgroundImage: `url(${bg})`,
        }}
      >
        <div className=" w-full">
          <div className=" md:max-w-[1180px] max-w-[500px] mx-auto px-[15px] md:py-[30px]">
            <div className="md:max-w-[1180px] max-w-[500px] px-[20px] pt-[50px] pb-[10px] md:w-full md:flex  mx-auto items-end  justify-between md:px-[18px] ">
              <div className=" md:w-[15%] mb-[20px] md:mb-0">
                <p className=" text-white mb-[10px] text-[13px] font-[800]">
                  Keywords
                </p>
                <input
                  type="text"
                  className=" py-[12px] w-full px-[17px] border-2 bg-[#585D6B]"
                />
              </div>
              <div className=" md:w-[15%] mb-[20px] md:mb-0  ">
                <p className=" text-white mb-[10px] text-[13px] font-[800]">
                  Activity
                </p>

                <select
                  defaultValue=""
                  name=" select_activity"
                  className=" py-[12px] w-full px-[17px] border-2 bg-[#585D6B] "
                >
                  <option className=" overflow-hidden w-[10%]" value="Any">
                    Any
                  </option>
                  <option
                    className=" overflow-hidden w-[10%]"
                    value="City Tours"
                  >
                    City Tours
                  </option>
                  <option
                    className=" overflow-hidden w-[10%]"
                    value="Cultural and Thematic Tours"
                  >
                    Cultural and Thematic Tours
                  </option>
                  <option
                    className=" overflow-hidden w-[10%]"
                    value="Family Friendly Tours"
                  >
                    Family Friendly Tours
                  </option>
                  <option
                    className=" overflow-hidden w-[10%]"
                    value="Holiday & Seasonal Tours"
                  >
                    Holiday & Seasonal Tours
                  </option>
                  <option
                    className=" overflow-hidden w-[10%]"
                    value="Indulgence & Luxury Tours"
                  >
                    Indulgence & Luxury Tours
                  </option>
                  <option
                    className=" overflow-hidden w-[10%]"
                    value="Outdoor Activities"
                  >
                    Outdoor Activities
                  </option>
                  <option
                    className=" overflow-hidden w-[10%]"
                    value="Relaxation Tours"
                  >
                    Relaxation Tours
                  </option>
                  <option
                    className=" overflow-hidden w-[10%]"
                    value="Wild & Adventure Tours"
                  >
                    Wild & Adventure Tours
                  </option>
                </select>
              </div>

              <div className=" md:w-[15%] mb-[20px] md:mb-0 ">
                <p className=" text-white mb-[10px] text-[13px] font-[800]">
                  Destinations
                </p>

                <select
                  className=" py-[12px] w-full px-[17px] border-2 bg-[#585D6B] "
                  defaultValue={""}
                  name=" select_Destinations"
                  id=""
                >
                  <option value="Any">Any</option>
                  <option value="Africa">Africa</option>
                  <option value="America">America</option>
                  <option value="Asia">Asia</option>
                  <option value="Eastern Europe">Eastern Europe</option>
                  <option value="Europe">Europe</option>
                  <option value="South America">South America</option>
                </select>
              </div>
              <div className=" md:w-[15%] mb-[20px] md:mb-0">
                <p className=" text-white mb-[10px] text-[13px] font-[800]">
                  Durations
                </p>

                <select
                  defaultValue={""}
                  name=" select_durations"
                  id=""
                  className=" py-[12px] w-full px-[17px] border-2 bg-[#585D6B] "
                >
                  <option value="Any">Any</option>
                  <option value="1-day-Tour">1 day Tour</option>
                  <option value="2-4-days-Tour">2-4 days Tour</option>
                  <option value="5-7-days-Tour">5-7 days Tour</option>
                  <option value="7+-days-Tour">7 + days Tour</option>
                </select>
              </div>
              <div className=" md:w-[15%] mb-[20px] md:mb-0">
                <p className=" text-white mb-[10px] text-[13px] font-[800]">
                  Date
                </p>

                <input
                  type="date"
                  className=" py-[12px] w-full px-[17px] border-2 bg-[#585D6B] "
                />
              </div>
              <div className=" md:w-[15%] mb-[20px] md:mb-0">
                <button className="  w-full py-[13px] px-[20px] mt-[32px] md:mt-0 text-white font-bold bg-[#388aee] ">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" md:grid md:grid-cols-12 md:grid-flow-row md:gap-10 pt-[70px] pb-[30px] mx-10 md:mx-0 flex flex-col justify-center items-center align-middle md:items-start">
        <div className=" md:col-start-2 md:col-span-7 ">
          {paginatedData?.map((place) => {
            return (
              <div
                key={place.id}
                className="md:grid md:grid-cols-7 min-h-[230px] max-w-[430px] md:max-w-full shadow-lg items-center align-middle mb-[30px]"
              >
                <div className=" col-start-1 col-span-7 md:col-start-1 md:col-span-2 h-full  max-w-full">
                  <img src={place.src} className=" md:h-auto cursor-pointer " />
                </div>
                <div className=" col-start-1 col-span-7 md:col-start-3 md:col-span-5 px-6 ">
                  <div className="flex flex-col md:grid md:grid-cols-7">
                    <div className="md:col-start-1 md:col-span-5 md:border-e-2">
                      <h2 className=" text-2xl font-bold">{place.name}</h2>

                      <p className=" flex justify-start align-middle items-center gap-2 mt-3  text-custom">
                        <HiOutlineClock className=" text-blue-300" />
                        {place.duration}
                      </p>

                      <p className=" flex justify-start align-middle items-center gap-2 mt-2  text-custom">
                        <AiTwotoneCalendar className=" text-blue-300" />
                        {place.availability}
                      </p>
                      <p className=" text mt-3 text-custom">{place.detail}</p>
                    </div>
                    <div className=" col-start-6 col-span-2 flex flex-col ps-6 py-1">
                      <p className=" text-custom text-center">From</p>
                      <h2 className=" text-3xl text-center font-bold mt-1">
                        $ {place.price}
                      </h2>
                      <div className=" flex items-center justify-center mt-3">
                        <StarRating rating={place.rating} />
                      </div>
                      <p className=" text-custom text-xs text-center mt-1">
                        ({place.review} review)
                      </p>

                      <button className=" mt-4 text-white w-full text-sm bg-blue-400 px-[12px] py-[13px] text-center mx-auto">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          <Pagination
            total={Math.ceil(places.length / itemPerPage)}
            size="xl"
            radius="xl"
            value={currentPage}
            onChange={goToPage}
            className=" mb-10 md:mb-0"
          />
        </div>
        <div className=" md:col-start-9 md:col-span-3">
          <div className=" min-h-[270px] mb-12">
            <div className=" pt-9 ps-2 mb-3 font-bold text-md">
              <h4>Latest Tours</h4>
            </div>

            <div className=" flex justify-start gap-3 items-center align-middle py-3 ps-2 border-b">
              <img src={Africa} alt="" className=" h-16 w-16" />
              <div className="">
                <p className=" mb-1 text-sm">Africa – Amazing African Safari</p>
                <p>
                  <span className=" text-custom text-sm me-2">From</span>{" "}
                  <span className=" font-bold">$100</span>
                </p>
              </div>
            </div>

            <div className=" flex justify-start gap-3 items-center align-middle py-3 ps-2 border-b">
              <img src={Europe} alt="" className=" h-16 w-16" />
              <div className="">
                <p className=" mb-1 text-sm">Europe – All Stunning Places</p>
                <p>
                  <span className=" text-custom text-sm me-2">From</span>{" "}
                  <span className=" font-bold">$1,200</span>
                </p>
              </div>
            </div>

            <div className=" flex justify-start gap-3 items-center align-middle py-3 ps-2 border-b">
              <img src={SouthAmerica} alt="" className=" h-16 w-16" />
              <div className="">
                <p className=" mb-1 text-sm">
                  South America – 7 Days in Zurich, Zermatt
                </p>
                <div className=" flex justify-between items-center align-middle">
                  <div className=" bg-[#e85e34] px-3 py-1 text-white text-xs">
                    20% Off
                  </div>
                  <p>
                    <span className=" text-custom text-sm me-2">From</span>
                    <del className=" text-gray-400 font-thin">$4,300</del>{" "}
                    <span className=" font-bold"> $3,500</span>
                  </p>
                </div>
              </div>
            </div>

            <div className=" flex justify-start gap-3 items-center align-middle py-3 ps-2">
              <img src={Asia} alt="" className=" h-16 w-16" />
              <div className="">
                <p className=" mb-1 text-sm">
                  Enquiry Form Only – Around Japan – 6 Days
                </p>
                <div className=" flex justify-between items-center align-middle">
                  <div className=" bg-[#e85e34] px-3 py-1 text-white text-xs">
                    25% Off
                  </div>
                  <p>
                    <span className=" text-custom text-sm me-2">From</span>
                    <del className=" text-gray-400 font-thin">$3,700</del>{" "}
                    <span className=" font-bold"> $2,000</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className=" min-h-[270px] px-9 pt-10 pb-2 bg-cover"
            style={{
              backgroundImage: `url(${bg})`,
            }}
          >
            <h2 className=" mb-3 text-xl font-bold text-white">
              Get a Question?
            </h2>
            <p className=" text-[#C9E2FF] text-sm font-thin mb-5">
              Do not hesitage to give us a call. We are an expert team and we
              are happy to talk to you.
            </p>
            <div className=" mb-3 text-[#FFCF2A] flex justify-normal align-middle items-center gap-3 text-xl font-bold">
              <FaPhone />
              <p>1.8445.3356.33</p>
            </div>

            <div className=" mb-3 text-[#FFCF2A] flex justify-normal align-middle items-center gap-3">
              <FiMail />
              <p className=" text-white">Help@goodlayers.com</p>
            </div>
          </div>

          <div className=" min-h-[270px] mb-3">
            <div className=" pt-9 mb-7 font-bold text-md">
              <h4>TOUR CATEGORY</h4>
            </div>
            <ul>
              <li className=" my-3 pb-3 border-b text-[#484848]">
                Outdoor Activities
              </li>
              <li className=" my-3 pb-3 border-b">City Tours</li>
              <li className=" my-3 pb-3 border-b">Cultural & Thematic Tours</li>
              <li className=" my-3 pb-3 border-b">Indulgence & Luxury Tours</li>
              <li className=" my-3 pb-3 border-b">Family Friendly Tours</li>
              <li className=" my-3 pb-3 border-b">Holiday & Seasonal Tours</li>
            </ul>
          </div>

          <div className=" min-h-[270px] mb-12">
            <div className=" pt-9 mb-3 font-bold text-md">
              <h4>RECENT ARTICLES</h4>
            </div>

            <div className=" flex justify-start gap-3 items-center align-middle py-3">
              <img src={photo1} alt="" className=" h-16 w-16" />
              <div className="">
                <p className=" mb-1 font-semibold">
                  How to travel with paper map
                </p>
                <div className=" flex flex-wrap justify-start gap-1 items-center align-middle">
                  <HiOutlineClock className=" text-custom text-xs" />
                  <p className=" text-custom text-xs me-2">JUNE 6, 2016</p>{" "}
                  <GrDocumentText className=" text-custom text-xs" />
                  <p className=" text-custom text-xs">JOHN SMITH</p>
                </div>
              </div>
            </div>

            <div className=" flex justify-start gap-3 items-center align-middle py-3">
              <img src={photo2} alt="" className=" h-16 w-16" />
              <div className="">
                <p className=" mb-1 font-semibold">
                  Change your place and get the fresh air
                </p>
                <div className=" flex flex-wrap justify-start gap-1 items-center align-middle">
                  <HiOutlineClock className=" text-custom text-xs" />
                  <p className=" text-custom text-xs me-2">JUNE 6, 2016</p>{" "}
                  <GrDocumentText className=" text-custom text-xs" />
                  <p className=" text-custom text-xs">JOHN SMITH</p>
                </div>
              </div>
            </div>

            <div className=" flex justify-start gap-3 items-center align-middle py-3">
              <img src={photo3} alt="" className=" h-16 w-16" />
              <div className="">
                <p className=" mb-1 font-semibold">
                  Even the all-powerful Pointing
                </p>
                <div className=" flex flex-wrap justify-start gap-1 items-center align-middle">
                  <HiOutlineClock className=" text-custom text-xs" />
                  <p className=" text-custom text-xs me-2">JUNE 6, 2016</p>{" "}
                  <GrDocumentText className=" text-custom text-xs" />
                  <p className=" text-custom text-xs">JOHN SMITH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TourList;
