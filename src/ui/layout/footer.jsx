import { Link } from "react-router-dom";

import { BsTelephone } from "../../assets/icons";
import { useEffect, useState } from "react";
import { footerLogo } from "../../assets/images/images";

const Footer = () => {
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
  console.log("userLanguagefooter", userLanguage);

  return (
    <div className="bg-black py-[40px] px-4 lg:px-0 lg:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="md:flex justify-between">
          <div className="w-full lg:w-3/12 text-center lg:text-left mb-8 lg:mb-0">
            <div className="lg:flex justify-start inline-block">
              <img src={footerLogo} alt="footerLogo" className="mb-5" />
            </div>
            <p className="text-white text-sm font-medium pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
          </div>

          <div className="w-full lg:w-3/12 lg:pl-10 text-center lg:text-left mb-8 lg:mb-0">
            <h3 className="text-white font-bold text-xl pb-6">Need help?</h3>
            <ul>
              <li>
                <Link className="text-sm text-white font-medium pb-2 block hover:text-[#3e57da]">
                  Lorem Ipsum
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white font-medium pb-2 block hover:text-[#3e57da]">
                  Lorem Ipsum
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white font-medium pb-2 block hover:text-[#3e57da]">
                  Lorem Ipsum
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white font-medium pb-2 block hover:text-[#3e57da]">
                  Lorem Ipsum
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-3/12 lg:pl-4 text-center lg:text-left mb-8 lg:mb-0">
            <h3 className="text-white font-bold text-[18px] pb-6">About US</h3>
            <ul>
              <li>
                <Link className="text-sm text-white font-medium pb-2 block hover:text-[#3e57da]">
                  Lorem Ipsum
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white font-medium pb-2 block hover:text-[#3e57da]">
                  Lorem Ipsum
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white font-medium pb-2 block hover:text-[#3e57da]">
                  Lorem Ipsum
                </Link>
              </li>
              <li>
                <Link className="text-sm text-white font-medium pb-2 block hover:text-[#3e57da]">
                  Lorem Ipsum
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full lg:w-3/12 text-center lg:text-left mb-8 lg:mb-0">
            <h3 className="text-white font-bold text-[18px] pb-6">
              Contact Us
            </h3>
            <div className="flex justify-center lg:justify-start items-center mb-4">
              <p className="text-sm text-white font-medium">+91 6278765634</p>
            </div>
            <div className="flex justify-center lg:justify-start items-center">
              <p>
                <Link className="text-sm text-white font-medium hover:text-[#3e57da]">
                  Loremipsum@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
