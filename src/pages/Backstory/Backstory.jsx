import React, { useRef, useEffect, useState, Suspense } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import {
  Button,
  Label,
  Modal,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  FiEdit3,
  IoIosArrowBack,
} from "../../assets/icons";

import {
  catectorFace,
  characterChat01,
  characterChat02,
  characterChat03,
  characterChat04,
  chatUserFaceNew,
  voiceSelectIcon,
} from "../../assets/images/images";

const Backstory = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-4/12 border-r border-[#a29fa4] h-screen bg-[#222023] py-8 px-3 relative">
          <h3 className="text-white text-xl font-semibold pb-4">Chats</h3>
          <div className="w-full mx-auto p-0 rounded-lg mb-0 overflow-hidden mt-0 search_area_chat">
            <form className="flex items-center w-full mx-auto rounded-lg overflow-hidden">
              <button
                type="button"
                className="w-[12%] lg:w-[10%] p-2 ms-0 text-xl lg:text-xl font-medium text-white rounded-lg overflow-hidden"
              >
                <AiOutlineSearch />
              </button>
              <div className="relative w-[88%] lg:w-[90%] ml-[2px]">
                <input
                  type="text"
                  id="simple-search"
                  className="bg-transparent border-none border-white text-gray-900 text-xs rounded-lg focus:ring-white focus:border-white block w-full ps-3"
                  placeholder="Enter Code or Search"
                />
              </div>
            </form>
          </div>
          <div className="mt-4 chat_type">
            <ul>
              <li className="text-white text-sm font-normal bg-[#343434] px-5 py-2 rounded-full inline-block mr-2 active_type">
                All
              </li>
              <li className="text-white text-sm font-normal bg-[#343434] px-5 py-2 rounded-full inline-block mr-2">
                Groups
              </li>
              <li className="text-white text-sm font-normal bg-[#343434] px-5 py-2 rounded-full inline-block mr-2">
                Favorites
              </li>
            </ul>
          </div>
          <div className="my-10">
            <div
              id="style-3"
              className="character_select_area no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear overscroll-none pr-2"
            >
              <div className="mb-8">
                <h3 className="text-white text-base font-medium pb-3">
                  My Characters
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat01} alt="characterChat01" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat02} alt="characterChat02" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat03} alt="characterChat03" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat04} alt="characterChat04" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat01} alt="characterChat01" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat02} alt="characterChat02" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat03} alt="characterChat03" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat04} alt="characterChat04" />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-white text-base font-medium pb-3">
                  Anime Characters
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat01} alt="characterChat01" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat02} alt="characterChat02" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat03} alt="characterChat03" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat04} alt="characterChat04" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat01} alt="characterChat01" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat02} alt="characterChat02" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat03} alt="characterChat03" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat04} alt="characterChat04" />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-white text-base font-medium pb-3">
                  My Characters
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat01} alt="characterChat01" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat02} alt="characterChat02" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat03} alt="characterChat03" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat04} alt="characterChat04" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat01} alt="characterChat01" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat02} alt="characterChat02" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat03} alt="characterChat03" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat04} alt="characterChat04" />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-white text-base font-medium pb-3">
                  Anime Characters
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat01} alt="characterChat01" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat02} alt="characterChat02" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat03} alt="characterChat03" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat04} alt="characterChat04" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat01} alt="characterChat01" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat02} alt="characterChat02" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat03} alt="characterChat03" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat04} alt="characterChat04" />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-white text-base font-medium pb-3">
                  My Characters
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat01} alt="characterChat01" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat02} alt="characterChat02" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat03} alt="characterChat03" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat04} alt="characterChat04" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat01} alt="characterChat01" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat02} alt="characterChat02" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat03} alt="characterChat03" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat04} alt="characterChat04" />
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <h3 className="text-white text-base font-medium pb-3">
                  Anime Characters
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat01} alt="characterChat01" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat02} alt="characterChat02" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat03} alt="characterChat03" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat04} alt="characterChat04" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat01} alt="characterChat01" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat02} alt="characterChat02" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat03} alt="characterChat03" />
                  </div>
                  <div className="text-white cursor-pointer bg-transparent font-medium overflow-hidden rounded-md hover:bg-[#333333] hover:text-white get_started_banner">
                    <img src={characterChat04} alt="characterChat04" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-8/12">
          {/*  */}
          <div className="p-8">
            <div className="mb-4">
              <button className="text-[#c40164] text-2xl hover:text-white">
                <IoIosArrowBack />
              </button>
            </div>
            <div className="create_character_area w-8/12 mx-auto">
              <div className="relative mb-6 w-[82px] h-[82px]">
                <img
                  src={characterChat01}
                  alt="characterChat01"
                  className="rounded-full overflow-hidden border-2 border-[#be0166]"
                />
              </div>
              <div className="mb-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="base"
                    value="Backstory"
                    className="text-white"
                  />
                </div>
                <p className="text-[10px] text-white pb-1">
                  Strong influence on your Character. The backstory
                  describes david past context and their relationship with you.
                  Write in 3rd person, use proper nouns, and be clear &
                  concise. Subscribers get an increased character caps with 2500
                  for backstory.
                </p>
                <Textarea
                  id="comment"
                  placeholder="David is shy and tsundere. David can seem aloof or mysterious to people who don’t take the time for David to open up to them. David had a troubled childhood that led them to be more reserved, but beneath that hard exterior is a heart of gold that loves caring for small animals like bunnies and guinea pigs. Recently, Soumalya Chandra met David, and David is somewhat guarded around Soumalya Chandra. David is over 18 years old and single."
                  required
                  rows={6}
                />
                <p className="text-xs text-[#CACACA] text-right pt-2">
                  453/2500
                </p>
              </div>
              <div className="mb-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="base"
                    value="Response Directive"
                    className="text-white"
                  />
                </div>
                <p className="text-[10px] text-white pb-1">
                  Very strong influence on your character. You can strongly
                  direct and specify length, tone, personality, descriptiveness,
                  formatting, etc. Write it in 3rd person, and be extremely
                  concise and direct.
                </p>
                <TextInput
                  id="base"
                  type="text"
                  sizing="md"
                  placeholder="be shy and reserved"
                  className=""
                />
                <div className="flex justify-between items-center">
                  <p className="text-[10px] text-[#FD4D4D] pt-1">
                    Warning: directives are very strong & easy to misuse. Try
                    simple ones to start, and ask the community for help if
                    you're unsure.
                  </p>
                  <p className="text-xs text-[#CACACA] text-right pt-2">
                    19/150
                  </p>
                </div>
              </div>
              <div className="mb-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="base"
                    value="Key Memories"
                    className="text-white"
                  />
                </div>
                <p className="text-[10px] text-white pb-1">
                  Moderate influence on your Character. Key memories are
                  things David should always remember, about them or you. Write
                  in 3rd person, use proper nouns, and be clear &
                  concise. Subscribers get an increased character caps with 1000
                  for key memories.
                </p>
                <TextInput
                  id="base"
                  type="text"
                  sizing="md"
                  placeholder="“AI name loves cupcakes, user name is allergic to cats, we met in Oct 3rd..”"
                  className=""
                />
                <p className="text-xs text-[#CACACA] text-right pt-2">0/500</p>
              </div>
              <div className="mb-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="base"
                    value="Example Message"
                    className="text-white"
                  />
                </div>
                <p className="text-[10px] text-white pb-1">
                  Moderate influence on your character. The example message is a
                  reference for the tone, mannerisms, message lengths, etc.
                  Write it from the perspective of your character.
                </p>
                <TextInput
                  id="base"
                  type="text"
                  sizing="md"
                  placeholder="“Good morning *curtsies* how would you like your tea today? The birds are especially lovely today...”"
                  className=""
                />
                <p className="text-xs text-[#CACACA] text-right pt-2">0/750</p>
              </div>

              <div className="flex justify-center mt-10">
                <button className="text-white bg-transparent font-medium text-xs rounded-md px-2.5 py-1 lg:px-10 lg:py-3 hover:bg-[#333333] hover:text-white Select_Character_btn">
                  <div className="flex items-center text-white">
                    Save Changes
                  </div>
                </button>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
};

export default Backstory;
