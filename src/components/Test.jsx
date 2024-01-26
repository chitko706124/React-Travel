import Train from "../assets/hero-image/train.jpg";
import Bridge from "../assets/hero-image/bridge.jpg";
import Montain from "../assets/hero-image/montain.jpg";

import React, { useState, useEffect } from "react";
import { useSwiper } from "swiper/react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css";

import "animate.css";
import "../css/nav.css";
import Swipernav from "../pages/Swipernav";
const bg_img = [
  {
    img: Train,
    text: () => {
      return (
        <p className=" text-white font-bold text-[40px] md:text-[70px] lg:text-[80px]">
          Special
        </p>
      );
    },
    text_2: () => {
      return (
        <p className=" text-[#bad9ff] font-bold lg:text-[40px] text-[25px] md:text-[40px] space-x-5">
          7 Days in Switzerland
        </p>
      );
    },
    text_3: "Bern,Lucern,Zurich,Zermatt,Metahorn,Jungfrau",
  },
  {
    img: Bridge,
    text: () => {
      return (
        <p className="text-[#bad9ff] font-bold lg:text-[40px] md:text-[35px] text-[25px]">
          Find your perfect
        </p>
      );
    },
    text_2: () => {
      return (
        <p className=" lg:text-[70px] text-[40px] md:text-[60px] text-white font-bold">
          {" "}
          VACATION
        </p>
      );
    },
    text_3: "ITALY,VENICE,ROME,MILAN",
  },
  {
    img: Montain,
    text: () => {
      return (
        <p className="text-white lg:text-[40px] text-[25px] md:text-[35px]">
          OPEN YOUR EYES TO
        </p>
      );
    },
    text_2: () => {
      return (
        <p className=" text-white font-bold text-[25px] md:text-[50px] lg:text-[60px]">
          {" "}
          The Hidden World
        </p>
      );
    },
  },
];

const Test = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [textAnimation, setTextAnimation] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % bg_img.length);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const swiper = useSwiper();
  console.log(useSwiper());
  const currentImage = bg_img[currentImageIndex];
  return (
    <div className=" bg-gray-500 swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        pagination={{ clickable: true }}
        loop
        // navigation
        effect="fade"
        autoplay={{
          reverseDirection: true,
          waitForTransition: true,
          effect: "fade",
          loop: "infinite",
          speed: 5000,

          delay: 5000,
          fadeEffect: true,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        onSlideChange={(swiper) => setCurrentImageIndex(swiper.realIndex)}
      >
        {bg_img.map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-cover bg-center xl:h-[680px] w-[500px] mx-auto md:w-full h-[266px] lg:h-[523px] md:h-[400px] max-h-none "
              style={{
                backgroundImage: `url(${image.img})`,
              }}
            >
              <div className=" w-full h-full">
                <div className=" max-w-[1180px] flex  h-full  items-center mx-auto">
                  <div className=" px-[18px] flex flex-col xl:mx-0   mx-[50px] overflow-hidden ">
                    <h1 className="animate__animated animate__fadeInUp">
                      {" "}
                      {image.text()}
                    </h1>
                    <p className="animate__animated animate__lightSpeedInRight">
                      {image.text_2()}
                    </p>

                    <div className=" flex flex-col gap-2 ">
                      {" "}
                      <span>
                        {" "}
                        {image.text_3 && (
                          <p className="text-2xl hidden lg:block md:hidden text-white">
                            {image.text_3}
                          </p>
                        )}
                      </span>
                      <button className=" w-fit rounded-[3px]  shadow-sm  text-white leading-[12px] font-[900]  bg-[#388aee] text-[13px] mt-5 px-[32px] py-[20px] ">
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                </div>
              </div>{" "}
              <Swipernav />
            </div>{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Test;
