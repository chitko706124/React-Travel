import React from "react";
import Bagan from "../assets/bagan.jpg";

const Discount = () => {
  return (
    <div
      className=" w-full h-[565px] md:h-[530px] lg:h-[456px] bg-cover bg-center"
      style={{
        backgroundImage: `url(${Bagan})`,
      }}
    >
      <div className=" pt-[120px] pb-[70px] flex md:max-w-[1180px] max-w-[500px] mx-auto px-[15px]">
        <div className="  md:w-[50%]"></div>
        <div className=" md:w-[50%]">
          <div className=" px-[20px] pb-[15px] lg:flex">
            <div className=" text-[48px] font-[700] text-white">DISCOUNT</div>
            <span className=" text-[48px] font-[700] text-[#ffb43e]">
              10-30% Off
            </span>
          </div>
          <div className=" px-[20px] pb-[15px]">
            <p className=" text-[14px] text-[#fff] mb-[20px] leading-[1.7] ">
              Curabitur blandit tempus porttitor. Curabitur blandit tempus
              porttitor. Maecenas faucibus mollis interdum. Duis mollis, est non
              commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
              nec elit.
            </p>
          </div>
          <div className=" px-[20px] pb-[30px]">
            <button className=" px-[33px] py-[15px] bg-white rounded-full">
              See Promotion Tours
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discount;
