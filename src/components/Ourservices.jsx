import React from "react";
import Plane from "../assets/icon/plane.png";
import Money from "../assets/icon/money.png";
import Operator from "../assets/icon/operator.png";
import Calender from "../assets/icon/calender.png";

const Ourservices = () => {
  return (
    <div className=" w-full bg-[#467fe8]">
      <div className=" max-w-[500px] md:max-w-[1180px] container mx-auto">
        <div className=" py-[45px] w-full ">
          <div className=" flex flex-col md:h-[105.484px] h-fit  md:flex-row justify-center items-center gap-[50px] md:gap-[]">
            {/* Destination */}
            <div className="flex ">
              <img
                className=" w-[49px] h-[49px] mr-[25px]"
                src={Plane}
                alt=""
                width={49}
                height={49}
              />
              <div className=" flex flex-col ">
                <p className=" text-white text-[14px] font-[600]">
                  500 + DESTINATIONS
                </p>
                <p className="  text-[#b9cdf3]">Morbi leo risus, porta ac</p>
              </div>
            </div>

            {/* Price */}
            <div className="flex ">
              <img
                className=" w-[49px] h-[49px] mr-[25px]"
                src={Money}
                alt=""
                width={49}
                height={49}
              />
              <div className=" flex flex-col ">
                <p className=" text-white text-[14px] font-[600]">
                  500 + DESTINATIONS
                </p>
                <p className="  text-[#b9cdf3]">Morbi leo risus, porta ac</p>
              </div>
            </div>

            {/* Customer */}

            <div className="flex ">
              <img
                className=" w-[49px] h-[49px] mr-[25px]"
                src={Operator}
                alt=""
                width={49}
                height={49}
              />
              <div className=" flex flex-col ">
                <p className=" text-white text-[14px] font-[600]">
                  500 + DESTINATIONS
                </p>
                <p className="  text-[#b9cdf3]">Morbi leo risus, porta ac</p>
              </div>
            </div>

            {/* Booking */}

            <div className="flex ">
              <img
                className=" w-[49px] h-[49px] mr-[25px]"
                src={Calender}
                alt=""
                width={49}
                height={49}
              />
              <div className=" flex flex-col ">
                <p className=" text-white text-[14px] font-[600]">
                  500 + DESTINATIONS
                </p>
                <p className="  text-[#b9cdf3]">Morbi leo risus, porta ac</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourservices;
