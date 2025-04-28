import React from "react";
import {
  carAi01,
  character01,
  character02,
  character03,
  character04,
  getStartBanner01,
  getStartBanner02,
  getStartBanner03,
  getStartBanner04,
  getStartBanner05,
  happyFace,
} from "../../assets/images/images";
import {
  Checkbox,
  Label,
  Select,
  Textarea,
  TextInput,
  Button,
  Modal,
} from "flowbite-react";
import { AiOutlineSearch, BiLogOut, FaUser } from "../../assets/icons";

import { NavLink, Link, useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useState } from "react";

const GetStarted = () => {
  const nevigate = useNavigate();
  const [openBackstoryModal, setOpenBackstoryModal] = useState(false);
  const [openAvatarModal, setOpenAvatarModal] = useState(false);
  var character_setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleChats = () => {
    nevigate("/chats");
  };
  return (
    <div className="get_started_wrapper">
      {/* Step 1 ends here */}
      <div className="hidden">
        <div className="flex">
          <div className="w-5/12 rounded-r-xl overflow-hidden">
            <img src={getStartBanner01} alt="getStartBanner01"/>
          </div>
          <div className="w-7/12 p-20">
            <div className="progress_bar_area">
              <div className="progress_bar_view w-[10%]">&nbsp;</div>
            </div>
            <div className="flex items-center pb-6">
              <h2 className="text-[40px] font-bold text-white">Welcome!</h2>
              <img src={happyFace} alt="happyFace" />
            </div>
            <div className="w-6/12">
              <div className="w-full">
                <div className="mb-8">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="base"
                      value="What should your character call you?"
                      className="text-white"
                    />
                  </div>
                  <TextInput
                    id="base"
                    type="text"
                    sizing="md"
                    placeholder="Soumalya"
                    className=""
                  />
                </div>
                <div className="mb-8">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="base"
                      value="Your Birthday"
                      className="text-white"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <TextInput
                      id="base"
                      type="text"
                      sizing="md"
                      placeholder="Day"
                      className=""
                    />
                    <Select required>
                      <option>Month</option>
                      <option>Jan</option>
                      <option>Feb</option>
                    </Select>
                    <TextInput
                      id="base"
                      type="text"
                      sizing="md"
                      placeholder="Month"
                      className=""
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="base"
                      value="Gender"
                      className="text-white"
                    />
                  </div>
                  <Select required>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Nonbinary</option>
                  </Select>
                  <p className="text-xs text-white font-normal pt-[10px]">
                    We use your preferred name, birthday, and gender so your
                    character can address you in conversation properly{" "}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-20">
                <button className="text-[#878787] text-3xl hover:text-[#910181]">
                  <BiLogOut />
                </button>
                <button className="text-white h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-1 hover:bg-[#333333] hover:text-white get_started_banner">
                  <div className="flex items-center text-white">Next</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Step 1 ends here */}
      {/* Step 2 start here */}
      <div className="hidden">
        <div className="flex">
          <div className="w-5/12 rounded-r-xl overflow-hidden">
            <img src={getStartBanner02} alt="getStartBanner02" />
          </div>
          <div className="w-7/12 p-20">
            <div className="progress_bar_area">
              <div className="progress_bar_view w-[20%]">&nbsp;</div>
            </div>
            <div className="flex items-center pb-3">
              <h2 className="text-[40px] font-bold text-white">
                Creating your Character
              </h2>
            </div>
            <p className="text-base text-white font-normal pb-12">
              Create a character from scratch or enter a share code
            </p>
            <div className="w-6/12">
              <div className="w-full">
                <button className="text-white bg-transparent mb-6 font-medium w-full text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-3 hover:bg-[#333333] hover:text-white create_your_own_character">
                  <div className=" text-white text-center">
                    Create your own Character
                  </div>
                </button>
                <div className="text-white text-sm font-medium text-center w-8/12 mx-auto or_section">
                  OR
                </div>
                <div className="border border-[#49464b] w-full mx-auto p-0 rounded-lg mb-0 overflow-hidden mt-8 search_area">
                  <form className="flex items-center w-full mx-auto">
                    <div className="relative w-[88%] lg:w-[90%] ml-[2px]">
                      <input
                        type="text"
                        id="simple-search"
                        className="bg-white border-none border-white text-gray-900 text-sm lg:text-base rounded-lg focus:ring-white focus:border-white block w-full ps-5"
                        placeholder="Enter Code or Search"
                      />
                    </div>
                    <button
                      type="button"
                      className="w-[12%] lg:w-[10%] px-2 ms-0 text-xl lg:text-2xl font-medium text-[#6d6d6d] rounded-lg overflow-hidden focus:ring-4 focus:outline-none focus:ring-[#ff796b]"
                    >
                      <AiOutlineSearch />
                    </button>
                  </form>
                </div>
              </div>
              <div className="flex justify-between items-center mt-20">
                <button className="text-white h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-1 hover:bg-[#333333] hover:text-white get_started_banner">
                  <div className="flex items-center text-white">Back</div>
                </button>
                <button className="text-white h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-1 hover:bg-[#333333] hover:text-white get_started_banner">
                  <div className="flex items-center text-white">Next</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Step 2 ends here */}
      {/* Step 3 start here */}
      <div className="hidden">
        <div className="flex">
          <div className="w-5/12 rounded-r-xl overflow-hidden">
            <img src={getStartBanner02} alt="getStartBanner02" />
          </div>
          <div className="w-7/12 p-20">
            <div className="progress_bar_area">
              <div className="progress_bar_view w-[30%]">&nbsp;</div>
            </div>
            <div className="flex items-center pb-3">
              <h2 className="text-[40px] font-bold text-white">
                Your Character
              </h2>
            </div>
            <p className="text-base text-white font-normal pb-12">
              Some basic details about your character
            </p>
            <div className="w-6/12">
              <div className="w-full">
                <div className="mb-8">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="base"
                      value="Character Name"
                      className="text-white"
                    />
                  </div>
                  <TextInput
                    id="base"
                    type="text"
                    sizing="md"
                    placeholder="Michael"
                    className=""
                  />
                </div>
                <div className="mb-8">
                  <div className="mb-2 block">
                    <Label
                      htmlFor="base"
                      value="Character Gender"
                      className="text-white"
                    />
                  </div>
                  <Select required>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Nonbinary</option>
                  </Select>
                  <p className="text-xs text-white font-normal pt-[10px]">
                    Aiesthetic gender selection is binary as we need to populate
                    gendered predefined avatars and voices for each.
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-20">
                <button className="text-white h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-1 hover:bg-[#333333] hover:text-white get_started_banner">
                  <div className="flex items-center text-white">Back</div>
                </button>
                <button className="text-white h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-1 hover:bg-[#333333] hover:text-white get_started_banner">
                  <div className="flex items-center text-white">Next</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Step 3 ends here */}
      {/* Step 4 start here */}
      <div className="hidden">
        <div className="flex">
          <div className="w-5/12 rounded-r-xl overflow-hidden">
            <img src={getStartBanner03} alt="getStartBanner03" />
          </div>
          <div className="w-7/12 p-20">
            <div className="progress_bar_area">
              <div className="progress_bar_view w-[40%]">&nbsp;</div>
            </div>
            <div className="flex items-center pb-3">
              <h2 className="text-[40px] font-bold text-white">
                Your Character
              </h2>
            </div>
            <p className="text-base text-white font-normal pb-12">
              What should your character look like?
            </p>

            <div className="w-6/12">
              <div className="w-full">
                <div className="flex gap-4 mb-8">
                  <button className="bg-[#5A5658] text-sm text-white font-medium rounded-md w-6/12 py-2 character_active">
                    Predefiened
                  </button>
                  <button className="bg-[#5A5658] text-sm text-white font-medium rounded-md w-6/12 py-2">
                    Custom
                  </button>
                </div>
                <button
                  onClick={() => setOpenAvatarModal(true)}
                  className="text-white w-full mb-8 h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-2 hover:bg-[#333333] hover:text-white get_started_banner"
                >
                  <div className="flex items-center justify-center text-white">
                    <img src={carAi01} alt="carAi01" className="mr-1" />
                    Generate an Avatar
                  </div>
                </button>
              </div>
            </div>
            <div>
              <div className="py-5">
                <Slider {...character_setting}>
                  <div className="relative">
                    <img src={character01} alt="character01" className="px-2" />
                  </div>
                  <div className="relative">
                    <img src={character02} alt="character02" className="px-2" />
                  </div>
                  <div className="relative">
                    <img src={character03} alt="character03" className="px-2" />
                  </div>
                  <div className="relative">
                    <img src={character01} alt="character01" className="px-2" />
                  </div>
                  <div className="relative">
                    <img src={character02} alt="character02" className="px-2" />
                  </div>
                  <div className="relative">
                    <img src={character03} alt="character03" className="px-2" />
                  </div>
                </Slider>
              </div>
              <div className="w-6/12 hidden">
                <button className="text-white w-full h-[400px] mb-8 bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-2 hover:bg-[#333333] hover:text-white get_started_banner">
                  <div className="flex items-center justify-center text-white">
                    <div className="text-center">
                      <FaUser className="text-[150px] inline mb-4" />
                      <p>Upload Photo</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div className="w-6/12">
              <div className="flex justify-between items-center mt-10">
                <button className="text-white h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-1 hover:bg-[#333333] hover:text-white get_started_banner">
                  <div className="flex items-center text-white">Back</div>
                </button>
                <button className="text-white h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-1 hover:bg-[#333333] hover:text-white get_started_banner">
                  <div className="flex items-center text-white">Next</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Step 4 ends here */}
      {/* Step 5 start here */}
      <div className="hidden">
        <div className="flex">
          <div className="w-5/12 rounded-r-xl overflow-hidden">
            <img src={getStartBanner04} alt="getStartBanner04" />
          </div>
          <div className="w-7/12 p-20">
            <div className="progress_bar_area">
              <div className="progress_bar_view w-[40%]">&nbsp;</div>
            </div>
            <div className="flex items-center pb-3">
              <h2 className="text-[40px] font-bold text-white">
                Your Character
              </h2>
            </div>
            <p className="text-base text-white font-normal pb-12">
              What should your character look like? Predefined lets you start
              quickly and add detail later, or write/generate your Character’s
              unique backstory.
            </p>
            <div className="w-6/12">
              <div className="w-full">
                <div className="flex gap-4 mb-8">
                  <button className="bg-[#5A5658] text-sm text-white font-medium rounded-md w-6/12 py-2 character_active">
                    Predefiened
                  </button>
                  <button className="bg-[#5A5658] text-sm text-white font-medium rounded-md w-6/12 py-2">
                    Custom
                  </button>
                </div>
                <button
                  onClick={() => setOpenBackstoryModal(true)}
                  className="text-white w-full mb-8 h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-2 hover:bg-[#333333] hover:text-white get_started_banner"
                >
                  <div className="flex items-center justify-center text-white">
                    <img src={carAi01} alt="carAi01" className="mr-1" />
                    Generate a Backstory
                  </div>
                </button>
              </div>
            </div>
            <div className="select_section">
              <div className="select_section_box flex items-center mb-4">
                <input
                  id="default-radio-1"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-1"
                  className="ms-2 dark:text-gray-300"
                >
                  <p className="text-base font-semibold text-white mb-2">
                    The Self-aware AI
                  </p>
                  <p className="text-xs text-white font-normal">
                    A friendly, empathetic and self-aware AI companion always by
                    your side
                  </p>
                </label>
              </div>
              <div className="select_section_box flex items-center mb-4">
                <input
                  checked
                  id="default-radio-2"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-2"
                  className="ms-2 dark:text-gray-300"
                >
                  <p className="text-base font-semibold text-white mb-2">
                    The hard -shelled turtle
                  </p>
                  <p className="text-xs text-white font-normal">
                    Shy, reserved, mysterious. Who will you find beneath their
                    hard exterior?
                  </p>
                </label>
              </div>
              <div className="select_section_box flex items-center">
                <input
                  checked
                  id="default-radio-3"
                  type="radio"
                  value=""
                  name="default-radio"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                <label
                  for="default-radio-3"
                  className="ms-2 dark:text-gray-300"
                >
                  <p className="text-base font-semibold text-white mb-2">
                    The rebellious maverick
                  </p>
                  <p className="text-xs text-white font-normal">
                    Angsty, edgy, and even a little misanthropic. Enter at your
                    own risk.
                  </p>
                </label>
              </div>
            </div>
            <div className="w-6/12">
              <div className="flex justify-between items-center mt-10">
                <button className="text-white h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-1 hover:bg-[#333333] hover:text-white get_started_banner">
                  <div className="flex items-center text-white">Back</div>
                </button>
                <button className="text-white h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-1 hover:bg-[#333333] hover:text-white get_started_banner">
                  <div className="flex items-center text-white">Next</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Step 5 ends here */}
      {/* Step 6 start here */}
      <div className="hidden">
        <div className="flex">
          <div className="w-5/12 rounded-r-xl overflow-hidden">
            <img src={getStartBanner04} alt="getStartBanner04" />
          </div>
          <div className="w-7/12 p-20">
            <div className="progress_bar_area">
              <div className="progress_bar_view w-[50%]">&nbsp;</div>
            </div>
            <div className="flex items-center pb-3">
              <h2 className="text-[40px] font-bold text-white">
                Your Character
              </h2>
            </div>
            <p className="text-base text-white font-normal pb-12">
              What should your character look like? Predefined lets you start
              quickly and add detail later, or write/generate your Character’s
              unique backstory.
            </p>
            <div className="w-6/12">
              <div className="w-full">
                <div className="flex gap-4 mb-8">
                  <button className="bg-[#5A5658] text-sm text-white font-medium rounded-md w-6/12 py-2 character_active">
                    Predefiened
                  </button>
                  <button className="bg-[#5A5658] text-sm text-white font-medium rounded-md w-6/12 py-2">
                    Custom
                  </button>
                </div>
                <button className="text-white w-full mb-8 h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-2 hover:bg-[#333333] hover:text-white get_started_banner">
                  <div className="flex items-center justify-center text-white">
                    <img src={carAi01} alt="carAi01" className="mr-1" />
                    Generate a Backstory
                  </div>
                </button>
              </div>
            </div>
            <div className="select_section">
              <div className="w-6/12">
                <div className="w-full">
                  <div className="mb-8">
                    <div className="mb-2 block">
                      <Label
                        htmlFor="base"
                        value="Character Backstory"
                        className="text-white"
                      />
                      <p className="text-xs text-white font-normal pt-[10px]">
                        The backstory describes your Character’s past context,
                        their personality, and their relationship with you. Use
                        3rd person and be consise but descriptive.
                      </p>
                    </div>
                    <Textarea
                      id="comment"
                      placeholder="Message"
                      required
                      rows={8}
                    />
                    <p className="text-[10px] text-white font-normal pt-[5px]">
                      0/200 chars
                    </p>
                  </div>
                  <div className="mb-8">
                    <div className="mb-2 block">
                      <Label
                        htmlFor="base"
                        value="Character greeting"
                        className="text-white"
                      />
                      <p className="text-xs text-white font-normal pt-[10px]">
                        The greeting will affect the tone, style, and length of
                        how your character speaks. You can use ”action” or
                        (action) to describe actions.
                      </p>
                    </div>
                    <Textarea
                      id="comment"
                      placeholder="Message"
                      required
                      rows={8}
                    />
                    <p className="text-[10px] text-white font-normal pt-[5px]">
                      0/200 chars
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-10">
                  <button className="text-white h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-1 hover:bg-[#333333] hover:text-white get_started_banner">
                    <div className="flex items-center text-white">Back</div>
                  </button>
                  <button className="text-white h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-1 hover:bg-[#333333] hover:text-white get_started_banner">
                    <div className="flex items-center text-white">Next</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Step 6 ends here */}
      {/* Step 7 start here */}
      <div className="">
        <div className="flex">
          <div className="w-5/12 rounded-r-xl overflow-hidden">
            <img src={getStartBanner05} alt="getStartBanner05" />
          </div>
          <div className="w-7/12 p-20">
            <div className="progress_bar_area">
              <div className="progress_bar_view w-[100%]">&nbsp;</div>
            </div>
            <div className="flex items-center pb-3">
              <h2 className="text-[40px] font-bold text-white">Hello There!</h2>
            </div>
            <p className="text-base text-white font-normal pb-12">
              Soumalya, meet Michael
            </p>
            <div className="select_section">
              <div className="w-6/12">
                <div className="w-full">
                  <div className="mb-8">
                    <div className="mb-2 block">
                      <img src={character04} alt="character04" />
                      <div className="flex items-start justify-start gap-2 mt-2">
                        <Checkbox id="age" />
                        <Label className="text-[10px] text-white font-normal">
                          By checking you agree to all legal terms and privacy
                          policy. You also acknowledge that all generated
                          content on Aiesthetic should be considered fictitious
                          and that you are fully responsible for any and all
                          generated content.
                        </Label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-10">
                  <button className="text-white h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-1 hover:bg-[#333333] hover:text-white get_started_banner">
                    <div className="flex items-center text-white">Back</div>
                  </button>
                  <button
                    onClick={handleChats}
                    className="text-white h-[40px] bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-10 lg:py-1 hover:bg-[#333333] hover:text-white get_started_banner"
                  >
                    <div className="flex items-center text-white">Finish</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Step 7 ends here */}
      {/* Generate an Avatar pop start here */}
      <Modal show={openAvatarModal} onClose={() => setOpenAvatarModal(false)}>
        <Modal.Header className="bg-black border-0 absolute right-0 top-0">
          &nbsp;
        </Modal.Header>
        <Modal.Body className="bg-black rounded-lg p-10">
          <div className="text-center">
            <h2 className="text-[30px] text-white font-bold pb-4">
              Generate Avatar Photo
            </h2>
            <p className="text-xs text-white font-medium pb-4">
              Describe the avatar
            </p>
            <div className="select_section text-left mb-8">
              <label className="text-white font-semibold text-[18px] pb-2 block">
                Prompt
              </label>
              <div className="flex gap-4 mb-8">
                <button className="bg-[#5A5658] text-xs text-white font-medium rounded-md w-6/12 py-3 character_active">
                  Photoreal
                </button>
                <button className="bg-[#5A5658] text-xs text-white font-medium rounded-md w-6/12 py-3">
                  Anime
                </button>
              </div>
              <label className="text-white font-semibold text-[18px] pb-2 block">
                Prompt
              </label>
              <p className="text-[10px] text-white font-medium pb-4">
                Describe the avatar you want to generate. This prompt will be
                used to generate the avatar
              </p>
              <Textarea id="comment" placeholder="" required rows={4} />
              <p className="text-[10px] text-[#717171] font-normal pt-[5px]">
                0/200 chars
              </p>
            </div>
            <div>
              <button className="text-white bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-20 lg:py-3 hover:bg-[#333333] hover:text-white get_started_banner">
                <div className="flex items-center text-white">Generate</div>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Generate an Avatar pop ends here */}
      {/* Generate a Backstory pop start here */}
      <Modal
        show={openBackstoryModal}
        onClose={() => setOpenBackstoryModal(false)}
      >
        <Modal.Header className="bg-black border-0 absolute right-0 top-0">
          &nbsp;
        </Modal.Header>
        <Modal.Body className="bg-black rounded-lg p-10">
          <div className="text-center">
            <h2 className="text-[30px] text-white font-bold pb-4">
              Generate a Backstory
            </h2>
            <p className="text-xs text-white font-medium pb-4">
              write a short descriptor for what your character to be like, and
              watch the magic happen!
            </p>
            <p className="text-xs text-[#E77171] font-medium pb-6">
              Be advised that character count for backstories is intentionally
              capped to limit run-ons. For incomplete backstories, complete them
              yourself or remove the cutoff portion
            </p>
            <div className="select_section text-left mb-8">
              <Textarea id="comment" placeholder="" required rows={8} />
              <p className="text-[10px] text-[#717171] font-normal pt-[5px]">
                0/200 chars
              </p>
            </div>
            <div>
              <button className="text-white bg-transparent font-medium text-xs lg:text-sm rounded-md px-2.5 py-1 lg:px-20 lg:py-3 hover:bg-[#333333] hover:text-white get_started_banner">
                <div className="flex items-center text-white">Generate</div>
              </button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Generate a Backstory pop ends here */}
    </div>
  );
};

export default GetStarted;
