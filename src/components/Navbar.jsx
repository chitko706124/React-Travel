import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDisclosure } from "@mantine/hooks";
import { Drawer, Group, Button } from "@mantine/core";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
// import { Menu, rem } from "@mantine/core";
import { Menu, Text } from "@mantine/core";
// import { IoIosArrowUp } from "react-icons/io";

import WOW from "wow.js";
import "../css/navdrop.css";
import "animate.css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css";
import {
  BsFillTelephoneFill,
  BsTwitter,
  BsFillPersonFill,
} from "react-icons/bs";
import { FaEnvelope, FaFlickr, FaFacebookF } from "react-icons/fa";

import {
  AiOutlineGoogle,
  AiOutlineRight,
  AiOutlineLock,
  AiOutlineSearch,
  AiOutlineMenu,
} from "react-icons/ai";
// import { Link, div } from "react-router-dom";
import Pages from "./Pages";
import Dropdown from "./Dropdown";
import Tourdropdown from "./Tourdropdown";
import { Link, NavLink } from "react-router-dom";
// import { Carousel } from "@mantine/carousel";

const Navbar = ({ modal, setModal }) => {
  const [page, setpage] = useState(false);
  const [clickhover, setclickhover] = useState(false);
  const [tourhover, settourhover] = useState(false);

  const wowjs = new WOW({
    boxClass: "wow", // default
    animateClass: "animate__animated", // default
    offset: 0, // default
    mobile: true, // default
    live: true, // default
  });

  wowjs.init();
  const [active, setactive] = useState(false);
  const [opened, { open, close }] = useDisclosure(false);
  const [up, setUp] = useState(false);

  // const h75 =
  //   0.5 * (document.body.getBoundingClientRect().height - window.innerHeight);
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      setUp(true);
    } else {
      setUp(false);
    }
  });

  return (
    <div className=" relative">
      <div className=" h-[145px] lg:hidden">hello</div>

      {/* work */}
      <div
        className={
          up
            ? " fixed top-[-66px] lg:top-[-68px] w-full z-[1000]"
            : " absolute top-0 w-full z-[1000]"
        }
      >
        <div
          className={`lg:bg-black/50 xs:bg-black w-full h-[66px] pt-[20px]  `}
        >
          <div className=" max-w-[500px] md:max-w-[1180px] mx-auto ">
            <div className=" px-[18px] mx-[15px] md:flex md:justify-between ">
              <div className=" hidden md:flex lg:gap-6 gap-2">
                <div className=" flex gap-2 items-center">
                  <BsFillTelephoneFill className=" text-white" />
                  <p className=" text-white">1.820.3345.33</p>
                </div>

                <div className="flex gap-2 items-center">
                  <FaEnvelope className=" text-white" />
                  <p className=" text-white"> Contact@TravelTourWP.com</p>
                </div>
              </div>

              <div className=" flex md:gap-6  items-center justify-around ">
                <div className=" flex gap-2 ">
                  <FaFacebookF className=" md:text-lg text-sm  text-[#468ae7]" />
                  <FaFlickr className="md:text-lg text-sm  text-[#468ae7]" />
                  <AiOutlineGoogle className="md:text-lg text-sm  text-[#468ae7]" />
                  <BsTwitter className="md:text-lg text-sm  text-[#468ae7]" />
                </div>
                <div className=" flex gap-3">
                  <Link to={"/login"}>
                    <div className=" flex gap-2 items-center">
                      <AiOutlineLock className=" text-[#468ae7] md:text-2xl" />
                      <p className=" text-white font-bold text-sm">Login</p>
                    </div>
                  </Link>
                  <Link to={"/register"}>
                    <div className=" flex gap-2 items-center">
                      <BsFillPersonFill className=" text-[#468ae7] md:text-2xl" />
                      <p className=" text-white font-bold text-sm">Signup</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className={`  ${
            up ? "bg-black/80" : "lg:bg-black/50 xs:bg-black"
          }   w-full   h-[80px] items-center   `}
        >
          <div className="max-w-[500px] md:max-w-[1180px] pt-[20px] lg:pt-0 mx-auto ">
            <div className=" px-[18px] flex   justify-between items-center  mx-[15px]">
              <div className=" ">
                <img
                  src="https://a6e8z9v6.stackpathcdn.com/traveltour/wp-content/themes/traveltour/images/logo.png"
                  alt=""
                  className=" max-w-lg  block "
                />
              </div>

              <div className=" flex items-center   ">
                <div className="flex items-center ">
                  <NavLink
                    onPointerEnter={(e) => {
                      e.preventDefault();
                      settourhover(false);
                      setclickhover(false);
                    }}
                    to={`/`}
                    className=" active items-center p-[15px] h-[80px] hover:border-b-2 border-blue-500 text-white hidden xl:flex lg:flex  md:hidden  cursor-pointer"
                  >
                    {" "}
                    Home
                  </NavLink>
                  <NavLink className=" relative ">
                    <Menu
                      className=" items-center  h-[80px] hover:bg-transparent hover:border-b-2 rounded-none hover:border-blue-500 border-l-0 border-t-0 border-r-0 text-white hidden xl:flex lg:flex  md:hidden  cursor-pointer"
                      position="bottom-start"
                      shadow="md"
                      trigger="hover"
                      width={200}
                    >
                      <Menu.Target>
                        <Button>Pages</Button>
                      </Menu.Target>

                      <Menu.Dropdown className=" border-none bg-gray-900">
                        <Link
                          to={"/service"}
                          className="text-white hover:bg-gray-900 hover:text-gray-600 font-semibold"
                        >
                          <Menu.Item className="text-white hover:bg-gray-900  font-semibold">
                            Our Service
                          </Menu.Item>
                        </Link>
                        <Link
                          to={"/about"}
                          className="text-white hover:bg-gray-900  font-semibold"
                        >
                          <Menu.Item className="text-white hover:bg-gray-900  font-semibold">
                            About
                          </Menu.Item>
                        </Link>
                        <Link
                          to={"/contact"}
                          className="text-white hover:bg-gray-900  font-semibold"
                        >
                          <Menu.Item className="text-white hover:bg-gray-900  font-semibold">
                            Contact
                          </Menu.Item>
                        </Link>
                      </Menu.Dropdown>
                    </Menu>
                  </NavLink>
                  <NavLink
                    onPointerEnter={(e) => {
                      e.preventDefault();
                      settourhover(false);
                      setclickhover(false);
                    }}
                    to={`/tour-list`}
                    className=" active items-center p-[15px] h-[80px] hover:border-b-2 border-blue-500 text-white hidden xl:flex lg:flex  md:hidden  cursor-pointer"
                  >
                    Tour List
                  </NavLink>
                  <NavLink
                    to={"/destinations"}
                    onPointerEnter={(e) => {
                      e.preventDefault();
                      settourhover(false);
                      setclickhover(false);
                    }}
                    className=" active items-center h-[80px] px-[15px] hover:border-b-2 border-blue-500 text-white hidden xl:flex lg:flex  md:hidden  cursor-pointer"
                  >
                    Destinations
                  </NavLink>

                  <NavLink
                    onPointerEnter={(e) => {
                      e.preventDefault();
                      settourhover(false);
                      setclickhover(false);
                    }}
                    className=" active items-center p-[15px] h-[80px] hover:border-b-2 border-blue-500 text-white hidden xl:flex lg:flex  md:hidden  cursor-pointer"
                  >
                    {" "}
                    Tour System
                  </NavLink>
                  <NavLink
                    onPointerEnter={(e) => {
                      e.preventDefault();
                      settourhover(false);
                      setclickhover(false);
                    }}
                    to={`/blog`}
                    className=" active items-center p-[15px] h-[80px] hover:border-b-2 border-blue-500 text-white hidden xl:flex lg:flex  md:hidden  cursor-pointer"
                  >
                    {" "}
                    Blog
                  </NavLink>
                  <div className="flex ml-auto items-center">
                    <AiOutlineSearch
                      onClick={() => setModal(true)}
                      className=" text-white text-xl font-bold block"
                    />

                    <div>
                      <Drawer.Root
                        opened={opened}
                        onClose={close}
                        position="right"
                        size="50%"
                        className=" absolute z-[6000]"
                      >
                        <Drawer.Overlay />
                        <Drawer.Content className=" bg-[#1f1f1f]">
                          {page ? (
                            <Pages page={page} setpage={setpage} />
                          ) : (
                            <div className="">
                              <Drawer.Header className=" bg-[#1f1f1f]">
                                <Drawer.CloseButton className=" m-2 transition hover:bg-[#1f1f1f]  hover:text-gray-200  text-gray-400 " />
                              </Drawer.Header>
                              <Drawer.Body className=" mb-10">
                                <div className=" flex flex-col gap-3 text-gray-400  ">
                                  <NavLink
                                    to={"/"}
                                    className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-2 font-bold  border-b-2 border-t-0 border-s-0 border-e-0 border-gray-400 cursor-pointer `}
                                  >
                                    <p>Home</p>
                                    <AiOutlineRight className=" text-gray-400" />
                                  </NavLink>
                                  <NavLink
                                    onClick={() => setpage(!page)}
                                    className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-2 font-bold border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
                                  >
                                    {" "}
                                    <p>Pages </p>
                                    <AiOutlineRight className=" text-gray-400" />
                                  </NavLink>
                                  <NavLink
                                    to={"/tour-list"}
                                    className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-2 font-bold border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
                                  >
                                    {" "}
                                    <p>Tour List</p>
                                    <AiOutlineRight className=" text-gray-400" />
                                  </NavLink>
                                  <NavLink
                                    className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-2 font-bold border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
                                    to={"/destinations"}
                                  >
                                    <p>Destinations</p>
                                    <AiOutlineRight className=" text-gray-400" />
                                  </NavLink>

                                  <NavLink
                                    className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-2 font-bold border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
                                  >
                                    {" "}
                                    <p>Tour System</p>
                                    <AiOutlineRight className=" text-gray-400" />
                                  </NavLink>
                                  <NavLink
                                    to={"/blog"}
                                    className={`flex active:text-gray-200 action justify-between items-center transition hover:text-gray-200 p-2 font-bold border-b-2 border-t-0 border-s-0 border-e-0  border-gray-400 cursor-pointer `}
                                  >
                                    {" "}
                                    <p>Blog</p>
                                    <AiOutlineRight className=" text-gray-400" />
                                  </NavLink>
                                </div>
                              </Drawer.Body>
                            </div>
                          )}
                        </Drawer.Content>
                      </Drawer.Root>
                    </div>

                    <Group position="center">
                      <Button
                        onClick={open}
                        className=" text-white text-xl font-bold block md:block xl:hidden lg:hidden"
                      >
                        <AiOutlineMenu />
                      </Button>
                    </Group>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* workEnd */}
    </div>
  );
};

export default Navbar;
