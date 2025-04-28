import React from "react";
import {
  IoIosArrowForward,
  IoMdCheckmark,
  IoMdClose,
} from "../../../assets/icons";

const Plans = () => {
  return (
    <div>
      {/* Plans section start hete */}
      <div className="">
        <div className="max-w-6xl mx-auto">
          <div className="mt-12 mb-0">
            <div className="flex justify-center items-center gap-1">
              <p className="text-[18px] leading-[30px] text-white font-SatoshiBold">
                Pay Monthly
              </p>
              <div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>{" "}
              </div>
              <p className="text-[18px] leading-[30px] text-[#7E7E7E] font-SatoshiBold">
                Pay Yearly
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-8 mt-12 mb-6">
            <div className="bg-[#F2FDFF] px-8 py-10 rounded-2xl">
              <h2 className="text-black text-[25px] leading-[25px] font-semibold text-center pb-6 font-SatoshiBold">
                Basic Plan
              </h2>
              <h3 className="text-[#1B2A52] text-[45px] leading-[50px] font-bold text-center pb-5 font-SatoshiBlack">
                <span className="text-2xl line-through font-semibold text-[#A3A3A3]">
                  $30
                </span>{" "}
                $19.
                <span className="text-2xl">8</span>
              </h3>
              <p className="text-[17px] leading-[25px] text-[#A3A3A3] text-center pb-4 font-SatoshiMedium">
                /Monthly (annually billed)
              </p>
              <div className="save_bg text-center text-sm font-medium text-[#971DFA] leading-[16px] mb-6 font-SatoshiMedium">
                SAVE UP TO $15.8
              </div>
              <button className="bg-white hover:bg-[#F9F2FF] text-center text-base font-medium w-full py-3 rounded-xl shadow-md mb-8 flex items-center justify-center gap-2 font-SatoshiBold">
                Choose Plan
                <IoIosArrowForward />
              </button>
              <div>
                <ul>
                  <li className="flex items-center gap-4 mb-4">
                    <div className="bg-[#F9F1FF] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                      <IoMdCheckmark className="text-[#971DFA]" />
                    </div>
                    <p className="text-[15px] leading-[18px] font-normal text-[#191D23] font-SatoshiMedium">
                      20,000+ of PNG & SVG graphics
                    </p>
                  </li>
                  <li className="flex items-center gap-4 mb-4">
                    <div className="bg-[#F9F1FF] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                      <IoMdCheckmark className="text-[#971DFA]" />
                    </div>
                    <p className="text-[15px] leading-[18px] font-normal text-[#191D23] font-SatoshiMedium">
                      Access to 100 million stock images
                    </p>
                  </li>
                  <li className="flex items-center gap-4 mb-4">
                    <div className="bg-white w-[32px] h-[32px] rounded-full flex items-center justify-center">
                      <IoMdClose />
                    </div>
                    <p className="text-[15px] leading-[18px] font-normal text-[#A0ABBB] font-SatoshiMedium">
                      Upload custom icons and fonts
                    </p>
                  </li>
                  <li className="flex items-center gap-4 mb-4">
                    <div className="bg-white w-[32px] h-[32px] rounded-full flex items-center justify-center">
                      <IoMdClose />
                    </div>
                    <p className="text-[15px] leading-[18px] font-normal text-[#A0ABBB] font-SatoshiMedium">
                      Unlimited Sharing
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[#200e3d] border border-[#971DFA] px-8 pb-10 rounded-2xl">
              <div className="bg-[#971DFA] text-base text-center font-medium text-white py-1 mb-8 w-6/12 mx-auto rounded-b-lg">
                Best Choice
              </div>
              <h2 className="text-white text-[25px] leading-[25px] font-semibold text-center pb-6 font-SatoshiBold">
                Pro Plan
              </h2>
              <h3 className="text-white text-[45px] leading-[50px] font-bold text-center pb-5 font-SatoshiBlack">
                <span className="text-2xl line-through font-semibold text-[#A3A3A3]">
                  $30
                </span>{" "}
                $25.
                <span className="text-2xl">8</span>
              </h3>
              <p className="text-[17px] leading-[25px] text-[#A3A3A3] text-center pb-4 font-SatoshiMedium">
                /Monthly (annually billed)
              </p>
              <div className="save_bg text-center text-sm font-medium text-[#971DFA] leading-[16px] mb-6 font-SatoshiMedium">
                SAVE UP TO $15.8
              </div>
              <button className="bg-[#971DFA] hover:bg-[#F9F2FF] text-white hover:text-black text-center text-base font-medium w-full py-3 rounded-xl shadow-md mb-8 flex items-center justify-center gap-2 font-SatoshiBold">
                Choose Plan
                <IoIosArrowForward />
              </button>
              <div>
                <ul>
                  <li className="flex items-center gap-4 mb-4">
                    <div className="bg-[#F9F1FF] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                      <IoMdCheckmark className="text-[#971DFA]" />
                    </div>
                    <p className="text-[15px] leading-[18px] font-normal text-white font-SatoshiMedium">
                      20,000+ of PNG & SVG graphics
                    </p>
                  </li>
                  <li className="flex items-center gap-4 mb-4">
                    <div className="bg-[#F9F1FF] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                      <IoMdCheckmark className="text-[#971DFA]" />
                    </div>
                    <p className="text-[15px] leading-[18px] font-normal text-white font-SatoshiMedium">
                      Access to 100 million stock images
                    </p>
                  </li>
                  <li className="flex items-center gap-4 mb-4">
                    <div className="bg-[#F9F1FF] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                      <IoMdCheckmark className="text-[#971DFA]" />
                    </div>
                    <p className="text-[15px] leading-[18px] font-normal text-white font-SatoshiMedium">
                      Upload custom icons and fonts
                    </p>
                  </li>
                  <li className="flex items-center gap-4 mb-4">
                    <div className="bg-[#F9F1FF] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                      <IoMdCheckmark className="text-[#971DFA]" />
                    </div>
                    <p className="text-[15px] leading-[18px] font-normal text-white font-SatoshiMedium">
                      Unlimited Sharing
                    </p>
                  </li>
                  <li className="flex items-center gap-4 mb-4">
                    <div className="bg-[#F9F1FF] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                      <IoMdCheckmark className="text-[#971DFA]" />
                    </div>
                    <p className="text-[15px] leading-[18px] font-normal text-white font-SatoshiMedium">
                      Unlimited Projects
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-[#F2FDFF] px-8 py-10 rounded-2xl">
              <h2 className="text-black text-[25px] leading-[25px] font-semibold text-center pb-6 font-SatoshiBold">
                Business Plan
              </h2>
              <h3 className="text-[#1B2A52] text-[45px] leading-[50px] font-bold text-center pb-5 font-SatoshiBlack">
                <span className="text-2xl line-through font-semibold text-[#A3A3A3]">
                  $30
                </span>{" "}
                $35.
                <span className="text-2xl">8</span>
              </h3>
              <p className="text-[17px] leading-[25px] text-[#A3A3A3] text-center pb-4 font-SatoshiMedium">
                /Monthly (annually billed)
              </p>
              <div className="save_bg text-center text-sm font-medium text-[#971DFA] leading-[16px] mb-6 font-SatoshiMedium">
                SAVE UP TO $15.8
              </div>
              <button className="bg-white hover:bg-[#F9F2FF] text-center text-base font-medium w-full py-3 rounded-xl shadow-md mb-8 flex items-center justify-center gap-2 font-SatoshiBold">
                Choose Plan
                <IoIosArrowForward />
              </button>
              <div>
                <ul>
                  <li className="flex items-center gap-4 mb-4">
                    <div className="bg-[#F9F1FF] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                      <IoMdCheckmark className="text-[#971DFA]" />
                    </div>
                    <p className="text-[15px] leading-[18px] font-normal text-[#191D23] font-SatoshiMedium">
                      20,000+ of PNG & SVG graphics
                    </p>
                  </li>
                  <li className="flex items-center gap-4 mb-4">
                    <div className="bg-[#F9F1FF] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                      <IoMdCheckmark className="text-[#971DFA]" />
                    </div>
                    <p className="text-[15px] leading-[18px] font-normal text-[#191D23] font-SatoshiMedium">
                      Access to 100 million stock images
                    </p>
                  </li>
                  <li className="flex items-center gap-4 mb-4">
                    <div className="bg-[#F9F1FF] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                      <IoMdCheckmark className="text-[#971DFA]" />
                    </div>
                    <p className="text-[15px] leading-[18px] font-normal text-[#191D23] font-SatoshiMedium">
                      Upload custom icons and fonts
                    </p>
                  </li>
                  <li className="flex items-center gap-4 mb-4">
                    <div className="bg-[#F9F1FF] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                      <IoMdCheckmark className="text-[#971DFA]" />
                    </div>
                    <p className="text-[15px] leading-[18px] font-normal text-[#191D23] font-SatoshiMedium">
                      Unlimited Sharing
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Plans section ends hete */}
    </div>
  );
};

export default Plans;
