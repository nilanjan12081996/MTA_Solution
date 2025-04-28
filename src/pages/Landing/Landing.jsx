import { Avatar, Accordion } from "flowbite-react";
import React, { useRef, useEffect, useState, Suspense } from "react";
import { Link } from "react-router-dom";
import {
  FaUserTie,
  HiUsers,
  IoIosArrowForward,
  IoMdCheckmark,
  IoMdClose,
  RiMoneyDollarCircleFill,
} from "../../assets/icons";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  agenciesIcon,
  audience01,
  audience02,
  audience03,
  audience04,
  audience05,
  customizablePersonalityIcon,
  growthIcon,
  infiniteMemoryIcon,
  meetYourAi01,
  meetYourAi02,
  meetYourAi03,
  rating_icon,
  selfieGalleryIcon,
  speedIcon,
  strategicIcon,
  testingIcon,
  testyFace,
  welcomeImg,
  whoThisImg,
} from "../../assets/images/images";

const Landing = () => {
  var meet_your_ai_setting = {
    centerMode: true,
    centerPadding: "0",
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          slidesToShow: 1,
        },
      },
    ],
  };

  var testimonials_setting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  // let userLang = localStorage.getItem("userLanguage");

  // console.log(userLang, "userLanguage body");

  const [userLanguage, setUserLanguage] = useState(
    localStorage.getItem("userLanguage") || "english"
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setUserLanguage(localStorage.getItem("userLanguage") || "english");
    };

    // Listen for the custom storage event
    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);
  return (
    <div className="lg:pt-16">
      <div className="">
        {/* Welcome section start here */}
        <div className="welcome_section pt-5 pb-36">
          <div className="max-w-6xl mx-auto">
            <div className="flex gap-10">
              <div className="w-5/12">
                <img src={welcomeImg} alt="welcomeImg" />
              </div>
              <div className="w-7/12 welcome_cont_area pt-0">
                <div className="">
                  <h2 className="text-[35px] leading-[45px] text-[#002967] font-bold pb-0 w-10/12 font-SatoshiBlack">
                    Why This Is a{" "}
                    <span>
                      Game <br></br> Changer
                    </span>{" "}
                    for Your Business
                  </h2>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-12">
                  <div>
                    <div className="bg-[#E4EFFF] rounded-[10px] w-[56px] h-[56px] flex justify-center items-center mb-3">
                      <RiMoneyDollarCircleFill className="text-[#0066FF] text-3xl" />
                    </div>
                    <h3 className="text-base font-bold text-[#312E2E] pb-2 font-SatoshiBold">
                      Test Before You Invest
                    </h3>
                    <p className="text-sm text-[#5C5C5C] font-medium font-SatoshiMedium">
                      Test your ads and products on realistic AI personas
                      first—get instant, conversion-boosting feedback.
                    </p>
                  </div>
                  <div>
                    <div className="bg-[#E4EFFF] rounded-[10px] w-[56px] h-[56px] flex justify-center items-center mb-3">
                      <HiUsers className="text-[#0066FF] text-3xl" />
                    </div>
                    <h3 className="text-base font-bold text-[#312E2E] pb-2 font-SatoshiBold">
                      Customer Understanding
                    </h3>
                    <p className="text-sm text-[#5C5C5C] font-medium font-SatoshiMedium">
                      Our GPT-powered avatars use your data and research to
                      reveal hidden objections, emotional triggers, and buying
                      behavior.
                    </p>
                  </div>
                  <div>
                    <div className="bg-[#E4EFFF] rounded-[10px] w-[56px] h-[56px] flex justify-center items-center mb-3">
                      <img src={speedIcon} alt="speedIcon" />
                    </div>
                    <h3 className="text-base font-bold text-[#312E2E] pb-2 font-SatoshiBold">
                      Speed + Accuracy
                    </h3>
                    <p className="text-sm text-[#5C5C5C] font-medium font-SatoshiMedium">
                      What used to take weeks of focus groups and analysis, you
                      can now simulate in minutes — and at scale.
                    </p>
                  </div>
                  <div>
                    <div className="bg-[#E4EFFF] rounded-[10px] w-[56px] h-[56px] flex justify-center items-center mb-3">
                      <img src={strategicIcon} alt="strategicIcon" />
                    </div>
                    <h3 className="text-base font-bold text-[#312E2E] pb-2 font-SatoshiBold">
                      Strategic Clarity
                    </h3>
                    <p className="text-sm text-[#5C5C5C] font-medium font-SatoshiMedium">
                      Refine messaging, target the right audience, and build
                      offers that actually resonate — with data-backed
                      confidence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Welcome section ends here */}
        {/* Audience section start hete */}
        <div className="audience_section py-20">
          <div className="max-w-6xl mx-auto">
            <div className="w-6/12 mx-auto text-center">
              <div className="audience_section_title">
                <h2 className="text-[35px] leading-[42px] text-white font-bold pb-0 font-SatoshiBlack">
                  Meet Your <span>Smartest Test</span> <br></br> Audience Yet
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-28 mb-6">
              <div>
                <img src={audience01} alt="audience01" />
              </div>
              <div>
                <img src={audience02} alt="audience02" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <img src={audience03} alt="audience03" />
              </div>
              <div>
                <img src={audience04} alt="audience04" />
              </div>
              <div>
                <img src={audience05} alt="audience05" />
              </div>
            </div>
          </div>
        </div>
        {/* Audience section ends hete */}
        {/* Who This section start here */}
        <div className="who_this_section py-20">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between gap-10">
              <div className="w-6/12 welcome_cont_area pt-0">
                <div className="welcome_cont_area_title">
                  <h2 className="text-[35px] leading-[45px] text-[#002967] font-bold pb-0 w-10/12 font-SatoshiBlack">
                    Who This <span>Is For</span>
                  </h2>
                </div>
                <div className="mt-12">
                  <p className="text-base leading-[22px] text-[#434343] font-medium pb-8 font-SatoshiMedium">
                    We create lifelike AI customer avatars trained on your
                    actual customer insights. These avatars simulate how your
                    audience thinks, feels, and reacts — so you can test
                    marketing campaigns, product ideas, pricing, and messaging
                    before they go live
                  </p>
                  <div>
                    <div className="flex items-center gap-5 mb-5">
                      <div className="bg-[#E4EFFF] rounded-[10px] w-[56px] h-[56px] flex justify-center items-center ">
                        <img src={growthIcon} alt="growthIcon" />
                      </div>
                      <div>
                        <p className="text-base leading-[20px] text-[#434343] font-SatoshiMedium">
                          Marketing & Growth Teams who want better conversion
                          rates
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 mb-5">
                      <div className="bg-[#E4EFFF] rounded-[10px] w-[56px] h-[56px] flex justify-center items-center ">
                        <FaUserTie className="text-[#0066FF] text-3xl" />
                      </div>
                      <div>
                        <p className="text-base leading-[20px] text-[#434343] font-SatoshiMedium">
                          Founders who want to de-risk new launches
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 mb-5">
                      <div className="bg-[#E4EFFF] rounded-[10px] w-[56px] h-[56px] flex justify-center items-center ">
                        <img src={agenciesIcon} alt="agenciesIcon" />
                      </div>
                      <div>
                        <p className="text-base leading-[20px] text-[#434343] font-SatoshiMedium">
                          Agencies who want smarter strategy validation tools
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5 mb-5">
                      <div className="bg-[#E4EFFF] rounded-[10px] w-[56px] h-[56px] flex justify-center items-center ">
                        <img src={testingIcon} alt="agenciesIcon" />
                      </div>
                      <div>
                        <p className="text-base leading-[20px] text-[#434343] font-SatoshiMedium">
                          Product teams testing new features or positioning
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-6/12">
                <img src={whoThisImg} alt="whoThisImg" />
              </div>
            </div>
          </div>
        </div>
        {/* Who This section ends here */}
        {/* Plans section start hete */}
        <div className="bg-white py-20">
          <div className="max-w-6xl mx-auto">
            <div className="w-6/12 mx-auto text-center">
              <div className="audience_section_title">
                <h2 className="text-[35px] leading-[42px] text-[#002967] font-bold pb-0 font-SatoshiBlack">
                  Personalized <span>Pricing Plans</span> <br></br> Suited to
                  You
                </h2>
              </div>
            </div>
            <div className="mt-12 mb-0">
              <div className="flex justify-center items-center gap-1">
                <p className="text-[18px] leading-[30px] text-black font-SatoshiBold">
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
              <div className="bg-white border border-[#971DFA] px-8 pb-10 rounded-2xl">
                <div className="bg-[#971DFA] text-base text-center font-medium text-white py-1 mb-8 w-6/12 mx-auto rounded-b-lg">
                  Best Choice
                </div>
                <h2 className="text-black text-[25px] leading-[25px] font-semibold text-center pb-6 font-SatoshiBold">
                  Pro Plan
                </h2>
                <h3 className="text-[#1B2A52] text-[45px] leading-[50px] font-bold text-center pb-5 font-SatoshiBlack">
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
                    <li className="flex items-center gap-4 mb-4">
                      <div className="bg-[#F9F1FF] w-[32px] h-[32px] rounded-full flex items-center justify-center">
                        <IoMdCheckmark className="text-[#971DFA]" />
                      </div>
                      <p className="text-[15px] leading-[18px] font-normal text-[#191D23] font-SatoshiMedium">
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
        {/* Testimonial section start here */}
        <div className="testimonial_section">
          <div className="max-w-6xl mx-auto">
            <div className="testimonial_section_title pb-20">
              <div className="w-6/12 mx-auto text-center">
                <h2 className="text-[35px] leading-[42px] text-white font-bold pb-0 font-SatoshiBlack">
                  What’s <span>People Say</span>
                </h2>
              </div>
            </div>
            <div className="testi_slider_section">
              <div className="w-7/12 mx-auto text-center">
                <Slider {...testimonials_setting}>
                  <div className="pt-10">
                    <div className="flex justify-center items-center mb-8">
                      <div className="testy_face_area w-[97px] h-[97px]">
                        <img
                          src={testyFace}
                          alt="testyFace"
                          className="rounded-full overflow-hidden"
                        />
                      </div>
                    </div>
                    <p className="text-base text-[#929292] mb-6">
                      ROBERT MATHEW / INNOVATION GROUP
                    </p>
                    <h3 className="text-[30px] leading-[36px] font-semibold text-white mb-6">
                      Sed ut perspiciatis unde omnis istesit voluptatem
                      accusantium
                    </h3>
                    <div className="flex justify-center items-center mb-6">
                      <img src={rating_icon} alt="rating_icon" />
                    </div>
                    <p className="text-base text-[#D1D0D0] font-medium">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                  <div className="pt-10">
                    <div className="flex justify-center items-center mb-8">
                      <div className="testy_face_area w-[97px] h-[97px]">
                        <img
                          src={testyFace}
                          alt="testyFace"
                          className="rounded-full overflow-hidden"
                        />
                      </div>
                    </div>
                    <p className="text-base text-[#929292] mb-6">
                      ROBERT MATHEW / INNOVATION GROUP
                    </p>
                    <h3 className="text-[30px] leading-[36px] font-semibold text-white mb-6">
                      Sed ut perspiciatis unde omnis istesit voluptatem
                      accusantium
                    </h3>
                    <div className="flex justify-center items-center mb-6">
                      <img src={rating_icon} alt="rating_icon" />
                    </div>
                    <p className="text-base text-[#D1D0D0] font-medium">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                  <div className="pt-10">
                    <div className="flex justify-center items-center mb-8">
                      <div className="testy_face_area w-[97px] h-[97px]">
                        <img
                          src={testyFace}
                          alt="testyFace"
                          className="rounded-full overflow-hidden"
                        />
                      </div>
                    </div>
                    <p className="text-base text-[#929292] mb-6">
                      ROBERT MATHEW / INNOVATION GROUP
                    </p>
                    <h3 className="text-[30px] leading-[36px] font-semibold text-white mb-6">
                      Sed ut perspiciatis unde omnis istesit voluptatem
                      accusantium
                    </h3>
                    <div className="flex justify-center items-center mb-6">
                      <img src={rating_icon} alt="rating_icon" />
                    </div>
                    <p className="text-base text-[#D1D0D0] font-medium">
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial section ends here */}
      </div>
    </div>
  );
};

export default Landing;
