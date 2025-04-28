import React, { useRef, useEffect, useState, Suspense } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";

import {
  Button,
  FileInput,
  Label,
  Modal,
  Select,
  Textarea,
  TextInput,
} from "flowbite-react";
import {
  AiOutlinePlus,
  AiOutlineSearch,
  BiCloudUpload,
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
  ericPhilImg,
  lillyPotsImg,
  mariaJaneImg,
  phillisRayImg,
  support01,
  support02,
  support03,
  support04,
  voiceSelectIcon,
} from "../../assets/images/images";

const MyCharacters = () => {
  const nevigate = useNavigate();
  const [openCreateCharactersModalOne, setOpenCreateCharactersModalOne] =
    useState(false);
  const [openCreateCharactersModalTwo, setOpenCreateCharactersModalTwo] =
    useState(false);
  const [openCreateCharactersModalThree, setOpenCreateCharactersModalThree] =
    useState(false);
  const [openCreateCharactersModalFour, setOpenCreateCharactersModalFour] =
    useState(false);
  const handleCharactersChats = () => {
    nevigate("/chats");
  };

  const handlerBackStepOne = () => {
    setOpenCreateCharactersModalTwo(false);
    setOpenCreateCharactersModalOne(true);
  };
  const handlerStepTwo = () => {
    setOpenCreateCharactersModalTwo(true);
    setOpenCreateCharactersModalOne(false);
  };
  const handlerBackStepTwo = () => {
    setOpenCreateCharactersModalThree(false);
    setOpenCreateCharactersModalTwo(true);
  };
  const handlerStepThree = () => {
    setOpenCreateCharactersModalThree(true);
    setOpenCreateCharactersModalTwo(false);
  };
  const handlerBackStepThree = () => {
    setOpenCreateCharactersModalFour(false);
    setOpenCreateCharactersModalThree(true);
  };
  const handlerStepFour = () => {
    setOpenCreateCharactersModalFour(true);
    setOpenCreateCharactersModalThree(false);
  };

  return (
    <div>
      {/* Container area start here */}
      <div className="container_area">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <h2 className="text-[35px] leading-[42px] text-white font-SatoshiBlack pb-3">
              AI Characters
            </h2>
            <p className="text-[20px] leading-[42px] text-white font-SatoshiMedium pb-6">
              If you ever wanna talk to any of your favorite characters, this is
              the place!
            </p>
            <div className="characters_search_area w-8/12 mx-auto flex items-center">
              <div className="w-8/12">
                <TextInput
                  id="base"
                  type="text"
                  sizing="md"
                  placeholder="Search for Chracters"
                />
              </div>
              <div className="create_characters_btn w-4/12">
                <button
                  onClick={() => setOpenCreateCharactersModalOne(true)}
                  className="text-white rounded-full py-3 px-10"
                >
                  Create Character
                </button>
              </div>
            </div>
          </div>
          <div className="characters_list_section">
            <div className="grid grid-cols-4 gap-4 mt-10">
              <div>
                <button onClick={handleCharactersChats}>
                  <div className="border border-[#583a87] rounded-xl overflow-hidden relative">
                    <img src={support02} alt="support02" className="w-full" />
                    <div className="bg-[#472386] text-center w-full h-[74px] absolute left-0 bottom-0">
                      <div className="flex justify-center items-center h-full">
                        <p className="text-[18px] text-white font-medium px-4 font-SatoshiBold">
                          John Davis
                        </p>
                      </div>
                    </div>
                  </div>
                </button>
              </div>

              <div className="border border-[#583a87] rounded-xl overflow-hidden relative">
                <img src={support01} alt="support01" className="w-full" />
                <div className="bg-[#472386] text-center w-full h-[74px] absolute left-0 bottom-0">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-[18px] text-white font-medium px-4 font-SatoshiBold">
                      Madison Mary
                    </p>
                  </div>
                </div>
              </div>

              <div className="border border-[#583a87] rounded-xl overflow-hidden relative">
                <img src={support03} alt="support03" className="w-full" />
                <div className="bg-[#472386] text-center w-full h-[74px] absolute left-0 bottom-0">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-[18px] text-white font-medium px-4 font-SatoshiBold">
                      Jeremy Johnson
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-[#583a87] rounded-xl overflow-hidden relative">
                <img src={support04} alt="support04" className="w-full" />
                <div className="bg-[#472386] text-center w-full h-[74px] absolute left-0 bottom-0">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-[18px] text-white font-medium px-4 font-SatoshiBold">
                      Grace Wells
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-[#583a87] rounded-xl overflow-hidden relative">
                <img src={ericPhilImg} alt="ericPhilImg" className="w-full" />
                <div className="bg-[#472386] text-center w-full h-[74px] absolute left-0 bottom-0">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-[18px] text-white font-medium px-4 font-SatoshiBold">
                      Eric Phil
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-[#583a87] rounded-xl overflow-hidden relative">
                <img src={mariaJaneImg} alt="mariaJaneImg" className="w-full" />
                <div className="bg-[#472386] text-center w-full h-[74px] absolute left-0 bottom-0">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-[18px] text-white font-medium px-4 font-SatoshiBold">
                      Maria Jane
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-[#583a87] rounded-xl overflow-hidden relative">
                <img
                  src={phillisRayImg}
                  alt="phillisRayImg"
                  className="w-full"
                />
                <div className="bg-[#472386] text-center w-full h-[74px] absolute left-0 bottom-0">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-[18px] text-white font-medium px-4 font-SatoshiBold">
                      Phillis Ray
                    </p>
                  </div>
                </div>
              </div>
              <div className="border border-[#583a87] rounded-xl overflow-hidden relative">
                <img src={lillyPotsImg} alt="lillyPotsImg" className="w-full" />
                <div className="bg-[#472386] text-center w-full h-[74px] absolute left-0 bottom-0">
                  <div className="flex justify-center items-center h-full">
                    <p className="text-[18px] text-white font-medium px-4 font-SatoshiBold">
                      Lilly Pots
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Container area start here */}
      {/* Add Create Characters Modal One popup start here */}
      <Modal
        show={openCreateCharactersModalOne}
        onClose={() => setOpenCreateCharactersModalOne(false)}
        size="4xl"
      >
        <Modal.Header className="bg-[#7041ff] text-white rounded-md border-0 absolute right-2 top-2">
          &nbsp;
        </Modal.Header>
        <Modal.Body className="bg-[#151026] rounded-lg p-10 Create_Character_popup_wrap">
          <div className="">
            <h2 className="text-xl text-white font-bold pb-8">
              Step 1. Business Overview
            </h2>
            <div>
              <div className="flex gap-6 mb-5">
                <div className="w-6/12">
                  <div className="mb-2 block">
                    <Label className="text-xl leading-[22px] font-SatoshiMedium text-white pb-1 block">
                      1.Company Name
                    </Label>
                    <p className="text-white text-sm">
                      What is this Company name
                    </p>
                  </div>
                  <TextInput id="base" type="text" sizing="md" />
                </div>
                <div className="w-6/12">
                  <div className="mb-2 block">
                    <div className="mb-2 block">
                      <Label className="text-xl leading-[22px] font-SatoshiMedium text-white pb-1 block">
                        2.Website
                      </Label>
                      <p className="text-white text-sm">
                        What is this Company Website URL.
                      </p>
                    </div>
                  </div>
                  <TextInput id="base" type="text" sizing="md" />
                </div>
              </div>
              <div className="mb-5">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label className="text-xl leading-[22px] font-SatoshiMedium text-white pb-1 block">
                      3.Product/Service
                    </Label>
                    <p className="text-white text-sm">
                      Briefly describe your product/service
                    </p>
                  </div>
                  <Textarea placeholder="" required rows={3} />
                </div>
              </div>
              <div className="mb-5">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label className="text-xl leading-[22px] font-SatoshiMedium text-white pb-1 block">
                      4.Ideal Customer
                    </Label>
                    <p className="text-white text-sm">
                      Who is your ideal customer (in your own words)?
                    </p>
                  </div>
                  <Textarea placeholder="" required rows={3} />
                </div>
              </div>
              <div className="mb-5">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label className="text-xl leading-[22px] font-SatoshiMedium text-white pb-1 block">
                      5.B2B or B2C
                    </Label>
                    <p className="text-white text-sm">Is this B2B or B2C?</p>
                  </div>
                  <Select required>
                    <option>Select</option>
                    <option>Select 1</option>
                    <option>Select 2</option>
                    <option>Select 3</option>
                  </Select>
                </div>
              </div>
              <div className="create_characters_btn w-full">
                <button
                  onClick={() => handlerStepTwo(true)}
                  className="text-white text-[18px] font-medium rounded-md py-2.5 w-full mt-2"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Add Create Characters Modal One popup ends here */}
      {/* Add Create Characters Modal Two popup start here */}
      <Modal
        show={openCreateCharactersModalTwo}
        onClose={() => setOpenCreateCharactersModalTwo(false)}
        size="4xl"
      >
        <Modal.Header className="bg-[#7041ff] text-white rounded-md border-0 absolute right-2 top-2">
          &nbsp;
        </Modal.Header>
        <Modal.Body className="bg-[#151026] rounded-lg p-10 Create_Character_popup_wrap">
          <div className="">
            <h2 className="text-xl text-white font-bold pb-8">
              Step 2. Audience Insights
            </h2>
            <div>
              <div className="flex gap-6 mb-5">
                <div className="w-6/12">
                  <div className="mb-2 block">
                    <Label className="text-xl leading-[22px] font-SatoshiMedium text-white pb-1 block">
                      1.Age Range
                    </Label>
                    <p className="text-white text-sm">
                      What age range are most of your customers
                    </p>
                  </div>
                  <Select required>
                    <option>Select</option>
                    <option>Select 1</option>
                    <option>Select 2</option>
                    <option>Select 3</option>
                  </Select>
                </div>
                <div className="w-6/12">
                  <div className="mb-2 block">
                    <div className="mb-2 block">
                      <Label className="text-xl leading-[22px] font-SatoshiMedium text-white pb-1 block">
                        2.Country/Region
                      </Label>
                      <p className="text-white text-sm">
                        Where do they live (region/country)
                      </p>
                    </div>
                  </div>
                  <TextInput id="base" type="text" sizing="md" />
                </div>
              </div>

              <div className="mb-5">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label className="text-xl leading-[22px] font-SatoshiMedium text-white pb-1 block">
                      3.Job Roles
                    </Label>
                    <p className="text-white text-sm">
                      Typical job roles or industries (for B2B)
                    </p>
                  </div>
                  <Textarea placeholder="" required rows={3} />
                </div>
              </div>
              <div className="flex gap-6 mb-5">
                <div className="w-6/12">
                  <div className="mb-2 block">
                    <Label className="text-xl leading-[22px] font-SatoshiMedium text-white pb-1 block">
                      41.Key Problems
                    </Label>
                    <p className="text-white text-sm">
                      Key problems your customers are trying to solve
                    </p>
                  </div>
                  <Textarea placeholder="" required rows={3} />
                </div>
                <div className="w-6/12">
                  <div className="mb-2 block">
                    <div className="mb-2 block">
                      <Label className="text-xl leading-[22px] font-SatoshiMedium text-white pb-1 block">
                        5.Buying Products
                      </Label>
                      <p className="text-white text-sm">
                        What motivates them to buy
                      </p>
                    </div>
                  </div>
                  <Textarea placeholder="" required rows={3} />
                </div>
              </div>
              <div className="mb-5">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label className="text-xl leading-[22px] font-SatoshiMedium text-white pb-1 block">
                      6.Concerns or Objections
                    </Label>
                    <p className="text-white text-sm">
                      What concerns or objections do they usually have
                    </p>
                  </div>
                  <Textarea placeholder="" required rows={3} />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="w-full">
                  <button
                    onClick={() => handlerBackStepOne(true)}
                    className="text-white bg-transparent text-[18px] py-2.5 rounded-md hover:bg-[#333333] hover:text-white back_button w-full"
                  >
                    Back
                  </button>
                </div>
                <div className="create_characters_btn w-full">
                  <button
                    onClick={() => handlerStepThree(true)}
                    className="text-white text-[18px] font-medium rounded-md py-2.5 w-full mt-0"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Add Create Characters Modal Two popup ends here */}
      {/* Add Create Characters Modal Three popup start here */}
      <Modal
        show={openCreateCharactersModalThree}
        onClose={() => setOpenCreateCharactersModalThree(false)}
        size="4xl"
      >
        <Modal.Header className="bg-[#7041ff] text-white rounded-md border-0 absolute right-2 top-2">
          &nbsp;
        </Modal.Header>
        <Modal.Body className="bg-[#151026] rounded-lg p-10 Create_Character_popup_wrap">
          <div className="">
            <h2 className="text-xl text-white font-bold pb-8">
              Step 3. Customer Data Uploads
            </h2>
            <div>
              <div className="mb-5">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label className="text-xl leading-[22px] font-SatoshiMedium text-white pb-1 block">
                      1.Upload to Google Drive
                    </Label>
                    <p className="text-white text-sm">
                      If you have existing data or insights, share them here
                    </p>
                  </div>
                  <div className="flex w-full items-center justify-center">
                    <Label
                      htmlFor="dropzone-file"
                      className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-[#766d93] bg-[#2d283c] hover:bg-[#332e42] dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pb-6 pt-5">
                        <BiCloudUpload className="text-[#A4A4A4] text-[90px] pb-4" />
                        <p className="text-sm text-white dark:text-gray-400 mb-8">
                          Upload to Google Drive, Dropbox, or attach here
                        </p>
                        <p className="mb-2 text-xl upload_btn font-SatoshiBold px-24 py-2 text-white rounded-lg">
                          Upload
                        </p>
                      </div>
                      <FileInput id="dropzone-file" className="hidden" />
                    </Label>
                  </div>
                </div>
              </div>
              <div className="mb-5">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label className="text-xl leading-[22px] font-SatoshiMedium text-white pb-1 block">
                      2.Your Goals with Avatars
                    </Label>
                    <p className="text-white text-sm">
                      What do you want to test or improve with these avatars? 
                    </p>
                  </div>
                  <TextInput id="base" type="text" sizing="md" />
                </div>
              </div>
              <div className="mb-5">
                <div className="w-full">
                  <div className="mb-2 block">
                    <Label className="text-xl leading-[22px] font-SatoshiMedium text-white pb-1 block">
                      3.Specific Campaigns
                    </Label>
                    <p className="text-white text-sm">
                      Are there specific campaigns or launches coming up?
                    </p>
                  </div>
                  <Textarea placeholder="" required rows={3} />
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <div className="w-full">
                  <button
                    onClick={() => handlerBackStepTwo(true)}
                    className="text-white bg-transparent text-[18px] py-2.5 rounded-md hover:bg-[#333333] hover:text-white back_button w-full"
                  >
                    Back
                  </button>
                </div>
                <div className="create_characters_btn w-full">
                  <button
                    onClick={() => handlerStepFour(true)}
                    className="text-white text-[18px] font-medium rounded-md py-2.5 w-full mt-0"
                  >
                    Create Character
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Add Create Characters Modal Three popup ends here */}
      {/* Add Create Characters Modal Four popup start here */}
      <Modal
        show={openCreateCharactersModalFour}
        onClose={() => setOpenCreateCharactersModalFour(false)}
        size="4xl"
      >
        <Modal.Header className="bg-[#7041ff] text-white rounded-md border-0 absolute right-2 top-2">
          &nbsp;
        </Modal.Header>
        <Modal.Body className="bg-[#151026] rounded-lg p-10 Create_Character_popup_wrap">
          <div className="">
            <h2 className="text-xl text-white font-bold pb-8">
              Step 4. Choose character to test
            </h2>
            <div>
              <div className="image_radio_button_control grid grid-cols-3 gap-4 mb-6">
                <label className="radio-button-label relative">
                  <input type="radio" name="radio-control" value="lsb" />
                  <img src={support02} alt="support02" className="w-full" />
                  <div className="bg-[#472386] text-center w-[99%] h-[74px] absolute left-[1px] bottom-[1px] rounded-b-lg">
                    <div className="flex justify-center items-center h-full">
                      <p className="text-[18px] text-white font-medium px-4 font-SatoshiBold">
                        John Davis
                      </p>
                    </div>
                  </div>
                </label>

                <label className="radio-button-label relative">
                  <input type="radio" name="radio-control" value="nosb" />
                  <img src={support01} alt="support01" className="w-full" />
                  <div className="bg-[#472386] text-center w-[99%] h-[74px] absolute left-[1px] bottom-[1px] rounded-b-lg">
                    <div className="flex justify-center items-center h-full">
                      <p className="text-[18px] text-white font-medium px-4 font-SatoshiBold">
                        Madison Mary
                      </p>
                    </div>
                  </div>
                </label>

                <label className="radio-button-label relative">
                  <input type="radio" name="radio-control" value="rsb" />
                  <img src={support03} alt="support03" className="w-full" />
                  <div className="bg-[#472386] text-center w-[99%] h-[74px] absolute left-[1px] bottom-[1px] rounded-b-lg">
                    <div className="flex justify-center items-center h-full">
                      <p className="text-[18px] text-white font-medium px-4 font-SatoshiBold">
                        Jeremy Johnson
                      </p>
                    </div>
                  </div>
                </label>
              </div>

              <div className="flex gap-4 pt-4">
                <div className="w-full">
                  <button
                    onClick={() => handlerBackStepThree(true)}
                    className="text-white bg-transparent text-[18px] py-2.5 rounded-md hover:bg-[#333333] hover:text-white back_button w-full"
                  >
                    Back
                  </button>
                </div>
                <div className="create_characters_btn w-full">
                  <button
                    onClick={() => setOpenCreateCharactersModalOne(true)}
                    className="text-white text-[18px] font-medium rounded-md py-2.5 w-full mt-0"
                  >
                    Chat with Character
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* Add Create Characters Modal Four popup ends here */}
    </div>
  );
};

export default MyCharacters;
