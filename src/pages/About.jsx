import React, { useRef, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import WOW from "wow.js";

import bgImage from "../assets/section-bg-4.jpg";
import paris from "../assets/about-us/paris.jpg";
import person1 from "../assets/team-members/person1.jpg";
import person2 from "../assets/team-members/person2.jpg";
import person3 from "../assets/team-members/person3.jpg";
import person4 from "../assets/team-members/person4.jpg";
import person5 from "../assets/team-members/person5.jpg";
import person6 from "../assets/team-members/person6.jpg";

import Plane from "../assets/icon/plane.png";
import Money from "../assets/icon/money.png";
import Operator from "../assets/icon/operator.png";

import { Parallax } from "react-parallax";

//wow js
const wowjs = new WOW({
  boxClass: "wow", // default
  animateClass: "animate__animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});

wowjs.init();

const teamMember = [
  {
    src: person1,
    title: "JEANETTE KINGSTON",
    field: "Chief Executive Officer",
  },
  {
    src: person2,
    title: "ALAN COOPER",
    field: "Vice President",
  },
  {
    src: person3,
    title: "JOHN SMITHY",
    field: "Chief Financial Officer",
  },
  {
    src: person4,
    title: "PETER SANDLER",
    field: "Senior Engineer",
  },
  {
    src: person5,
    title: "RICARDO GOMEZ",
    field: "HR Manager",
  },
  {
    src: person6,
    title: "JAMES SMITH",
    field: "Chief Technology Officer",
  },
];

const About = () => {
  const refSocial = useRef();
  const refProduct = useRef();

  let [social, setSocial] = useState(0);
  let [product, setProduct] = useState(0);

  window.onscroll = function () {
    handleOnScroll();
  };

  function handleOnScroll() {
    const onscrollPoint = document.documentElement.scrollTop;
    console.log(onscrollPoint);
    if (onscrollPoint >= 250) {
      social += 5;
      product += 3;
      setSocial(social);
      setProduct(product);
      refSocial.current.style.width += social;
      refProduct.current.style.width += product;
    }
  }

  return (
    <>
      <div
        className=" h-[342.19px] md:h-[350.39px] lg:h-[448.38px] bg-cover  bg-no-repeat bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div
          id="one"
          className="flex h-full  items-center max-w-[450px] md:w-full px-[15px] md:max-w-[1180px] mx-auto"
        >
          <div className="  flex  flex-col lg:mt-[10%] leading-extra-loose  animate__backInLeft animate__animated">
            <h1 className=" mx-[15px]  text-white     text-[40px] md:text-[70px] font-[800] tracking-wide ">
              About Us
            </h1>
            <p className=" mx-[15px] mt-[13px] text-white  text-[21px]  tracking-wide ">
              Justo Vulputate Vehicula
            </p>
          </div>
        </div>
      </div>

      <div className=" ">
        <div className=" h-auto md:h-[450px] grid grid-cols-1 md:grid-cols-2 items-center py-10 md:w-full max-w-[500px]    md:max-w-[1180px] mx-auto px-[30px] ">
          <div className=" md:w-[300px] lg:w-[400px]">
            <p className=" font-extrabold text-4xl text-gray-800">
              Amet Etiam Quam
            </p>
            <p className=" pt-5 text-slate-500">
              Vestibulum id ligula porta felis euismod semper. Praesent commodo
              cursus magna, vel scelerisque nisl consectetur et. Cum sociis
              natoque penatibus et magnis dis parturient montes, nascetur
              ridiculus mus. Maecenas sed diam eget risus varius blandit sit
              amet non magna. Maecenas sed diam eget risus varius blandit sit
              amet non magna.
            </p>
          </div>
          <div className=" mt-5 md:mt-0">
            <div>
              <div className=" flex items-center justify-between">
                <p className=" uppercase text-gray-800 pt-3 text-lg font-medium">
                  Branding
                </p>
                <p className=" uppercase text-gray-800 pt-3 text-lg font-medium">
                  90%
                </p>
              </div>
              <div className="relative pt-3">
                <div
                  className="overflow-hidden h-[6px] mb-4 text-xs flex rounded"
                  style={{ background: "#f3f3f3" }}
                >
                  <div
                    style={{ width: "90%", background: "rgb(22, 22, 22)" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                  ></div>
                </div>
              </div>
            </div>

            <div>
              <div className=" flex items-center justify-between">
                <p className=" uppercase text-gray-800 pt-3 text-lg font-medium">
                  Graphic Desgin
                </p>
                <p className=" uppercase text-gray-800 pt-3 text-lg font-medium">
                  100%
                </p>
              </div>
              <div className="relative pt-3">
                <div
                  className="overflow-hidden h-[6px] mb-4 text-xs flex rounded"
                  style={{ background: "#f3f3f3" }}
                >
                  <div
                    style={{ width: "100%", background: "rgb(22, 22, 22)" }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                  ></div>
                </div>
              </div>
            </div>

            <div>
              <div className=" flex items-center justify-between">
                <p className=" uppercase text-gray-800 pt-3 text-lg font-medium">
                  Social Marketing
                </p>
                <p
                  className=" uppercase text-gray-800 pt-3 text-lg font-medium"
                  style={{ transition: "all 0.5s ease-out" }}
                >
                  {social <= 85 ? social : "85"}%
                </p>
              </div>

              <div className="relative pt-3">
                <div
                  className="overflow-hidden h-[6px] mb-4 text-xs flex rounded"
                  style={{ background: "#f3f3f3" }}
                >
                  <div
                    ref={refSocial}
                    style={{
                      width: `${social}px`,
                      background: "rgb(22, 22, 22)",
                      transition: "all 0.5s ease-out",
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                  ></div>
                </div>
              </div>
            </div>

            <div>
              <div className=" flex items-center justify-between">
                <p className=" uppercase text-gray-800 pt-3 text-lg font-medium">
                  Product Desgin
                </p>
                <p className=" uppercase text-gray-800 pt-3 text-lg font-medium">
                  {product <= 90 ? product : "90"}%
                </p>
              </div>
              <div className="relative pt-3">
                <div
                  className="overflow-hidden h-[6px] mb-4 text-xs flex rounded"
                  style={{ background: "#f3f3f3" }}
                >
                  <div
                    ref={refProduct}
                    style={{
                      width: `${product}px`,
                      background: "rgb(22, 22, 22)",
                      transition: "all 0.5s ease-out",
                    }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 items-center relative">
          <Parallax bgImage={paris} strength={200}>
            <div className="w-full h-[360px] md:h-[925px] lg:h-[690.238px]"></div>
          </Parallax>

          <div className="  ">
            <div className="max-w-[600px]  px-[30px] wow animate__fadeInRight">
              <p className=" text-3xl lg:text-4xl font-bold text-gray-800">
                Pharetra Etiam Inceptos
              </p>
              <p className=" text-xl text-slate-500 py-8">
                Etiam porta sem malesuada magna mollis euismod. Vivamus sagittis
                lacus vel augue laoreet rutrum faucibus dolor auctor. Maecenas
                faucibus mollis interdum. Donec id elit non mi porta gravida at
                eget metus. Aenean lacinia.
              </p>
              <div className=" grid grid-cols-1 md:grid-cols-2">
                <div>
                  <div className="md:mb-6 lg:mb-0 flex items-center gap-5">
                    <AiFillCheckCircle className=" hover:animate-bounce" />
                    <p className=" text-slate-500">Vestibulum id ligula</p>
                  </div>
                  <div className=" flex items-center gap-5 py-5">
                    <AiFillCheckCircle className=" hover:animate-bounce" />
                    <p className=" text-slate-500">Egestas Fermentum</p>
                  </div>
                  <div className=" flex items-center gap-5">
                    <AiFillCheckCircle className=" hover:animate-bounce" />
                    <p className=" text-slate-500">Ultricies Bibendum</p>
                  </div>
                  <div className=" flex items-center gap-5 mt-5">
                    <AiFillCheckCircle className=" hover:animate-bounce" />
                    <p className=" text-slate-500">Fermentum Tellus</p>
                  </div>
                </div>
                <div>
                  <div className="mt-5 md:mt-0 flex items-center gap-5">
                    <AiFillCheckCircle className=" hover:animate-bounce" />
                    <p className=" text-slate-500">
                      Mattis Fringilla Ultricies
                    </p>
                  </div>
                  <div className=" flex items-center gap-5 py-5">
                    <AiFillCheckCircle className=" hover:animate-bounce" />
                    <p className=" text-slate-500">Adipiscing Vulputate</p>
                  </div>
                  <div className=" flex items-center gap-5">
                    <AiFillCheckCircle className=" hover:animate-bounce" />
                    <p className=" text-slate-500">Fringilla Quam Elit</p>
                  </div>
                  <div className=" flex items-center gap-5 mt-5">
                    <AiFillCheckCircle className=" hover:animate-bounce" />
                    <p className=" text-slate-500">Commodo Vestibulum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-2 ">
          <div className=" py-10">
            <div className="max-w-[600px]  px-[30px] ml-auto wow animate__fadeInLeft">
              <p className=" text-3xl font-bold">About Services</p>
              <div>
                <p className=" text-slate-500 text-xl pt-7">
                  Etiam porta sem malesuada magna mollis euismod. Vivamus
                  sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                </p>
                <br />
                <p className=" text-slate-500 text-xl">
                  Maecenas faucibus mollis interdum. Donec id elit non mi porta
                  gravida at eget metus. Aenean lacinia. Donec ullamcorper nulla
                  non metus auctor fringilla. Donec ullamcorper nulla non metus
                  auctor fringilla. Aenean eu leo quam. Pellentesque ornare sem
                  lacinia quam
                </p>
              </div>
              <button className=" bg-slate-950 text-white px-5 py-3 rounded mt-8">
                Get A Quote
              </button>
            </div>
          </div>
          <div className=" bg-about-bg-black text-white">
            <div className=" grid grid-cols-1  py-10">
              {/* md:w-full  */}
              <div className=" flex max-w-[600px]  px-[30px] items-center gap-8 wow animate__fadeInRight">
                <img className="w-[50px]" src={Plane} alt="" />
                <div>
                  <p className=" text-2xl font-semibold">
                    Ornare Quam Justo Tellusv
                  </p>
                  <p>
                    Maecenas faucibus mollis interdum. Donec id elit non mi
                    porta gravida at eget metus. Aenean lacinia.{" "}
                  </p>
                </div>
              </div>
              <div className=" flex max-w-[600px]  px-[30px] items-center gap-8 my-10 wow animate__fadeInRight">
                <img className="w-[50px]" src={Money} alt="" />
                <div>
                  <p className=" text-2xl font-semibold">
                    Ornare Quam Justo Tellusv
                  </p>
                  <p>
                    Maecenas faucibus mollis interdum. Donec id elit non mi
                    porta gravida at eget metus. Aenean lacinia.{" "}
                  </p>
                </div>
              </div>
              <div className=" flex max-w-[600px]  px-[30px] items-center gap-8 wow animate__fadeInRight">
                <img className="w-[50px]" src={Operator} alt="" />
                <div>
                  <p className=" text-2xl font-semibold">
                    Ornare Quam Justo Tellusv
                  </p>
                  <p>
                    Maecenas faucibus mollis interdum. Donec id elit non mi
                    porta gravida at eget metus. Aenean lacinia.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: "#e1e1e1" }}>
          <div className=" md:w-full max-w-[500px]    md:max-w-[1180px] mx-auto px-[30px]">
            <p className=" text-center text-slate-800 text-5xl font-bold py-10">
              Meet The Team
            </p>

            <div className="  py-10 grid grid-cols-1 md:grid-cols-3 gap-[30px]">
              {teamMember?.map((member, index) => {
                return (
                  <div
                    key={index}
                    className="  relative"
                    style={{ backgroundColor: "#fff" }}
                  >
                    <div className="  overflow-hidden">
                      <img
                        className=" w-full h-full"
                        src={member?.src}
                        alt=""
                      />
                    </div>
                    <div className=" pt-[35px] px-[32px] pb-[25px] text-center">
                      <p className=" text-gray-800 text-[16px] font-[600] mb-[8px]">
                        {member?.title}
                      </p>
                      <p className=" text-slate-400 text-[13px]  mb-[8px]">
                        {member?.field}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
