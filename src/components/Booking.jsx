import React from "react";

import thumb from "../assets/icon/thumb.png";
import award from "../assets/icon/award.png";
import lock from "../assets/icon/lock.png";

const Booking = () => {
  const booking = [
    {
      url: thumb,
      text: "40,000+ CUSTOMERS",
      text_1: "Morbas portas default sar",
    },
    {
      url: award,
      text: "AWARD WINNING",
      text_1: "Morbas portas default sar",
    },
    {
      url: lock,
      text: "SECURE PAYMENT",
      text_1: "Morbas portas default sar",
    },
  ];
  return (
    <div className="w-full md:flex mt-[120px]">
      <div className="md:w-[30%] justify-end md:flex bg-[#4263C1] md:pt-[50px] lg:pt-0">
        <div className="md:w-[90%] lg:w-[66%] h-full py-[40px] md:py-[56px]">
          <p className="text-[19px] font-[400] text-white text-center">
            Why Book With Us?
          </p>
        </div>
      </div>
      <div className="md:w-[70%] md:flex justify-start items-end bg-blue-500 lg-pt-0 md:pt-[50px]">
        {booking.map((item, index) => (
          <div key={index} className="md:w-[30%] flex justify-center">
            <div className="px-[20px] pb-[20px] flex items-start">
              <img
                className="mr-[20px]"
                src={item.url}
                width="37"
                height="39"
                title={`icon-${index}`}
              />
              <div>
                <div className="pt-[5px] mb-[5px]">
                  <p className="text-[14px] font-[600] text-white leading-[1.55]">
                    {item.text}
                  </p>
                </div>
                <div className="mb-[20px]">
                  <p className="leading-[1.7] text-[#b9cdf3]">{item.text_1}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
