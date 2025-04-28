import React, { useRef, useEffect, useState, Suspense } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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
import BusinessModal from "../Modal/BusinessModal";
import AudienceInsightsModal from "../Modal/AudienceInsightsModal";
import CustomerDataUploadModal from "../Modal/CustomerDataUploadModal";
import CharacterModal from "../Modal/CharacterModal";
import { createCharacterStepone,createCharacterSteptwo,createCharacterStepthree } from "../../reducers/CreateCharacterSlice";
const MyCharacters = () => {
  const nevigate = useNavigate();
  const dispatch = useDispatch();
  const [openCreateCharactersModalOne, setOpenCreateCharactersModalOne] = useState(false);
  const [openCreateCharactersModalTwo, setOpenCreateCharactersModalTwo] = useState(false);
  const [openCreateCharactersModalThree, setOpenCreateCharactersModalThree] = useState(false);
  const [openCreateCharactersModalFour, setOpenCreateCharactersModalFour] = useState(false);



   const businessSubmit = (data) => {
           const payload = {
            "company_name":data.company_name,
            "company_website_url":data.website,
            "ideal_customer":data.product_service,
            "is_b2b_b2c":data.b2b_b2c,
            "product_service":data.product_service
        }

           dispatch(createCharacterStepone(payload)).then((res) => {
                  console.log("Res", res?.payload?.status_code);
                  if (res?.payload?.status_code === 201) {
                       handlerStepTwo(true);
                  }else{
                       console.log("Error",res)
                  }
                });
    };

  const audienceInsightSubmit = (data) =>{
           console.log("audiencedata",data);
           const payload = {
            "age_start":"20",
            "age_end":"30",
            "country":data.region_country,
            "job_role":data.job_role,
            "key_problem": data. key_problem,
            "buying_product":data. buy_product,
            "concerns":"ddee",
            "character_id":13
        }
           dispatch(createCharacterSteptwo(payload)).then((res) => {
            console.log("Res", res?.payload?.status_code);
            if (res?.payload?.status_code === 200) {
               handlerStepThree(true);;
            }else{
                 console.log("Error",res)
            }
          });
  }

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
         <BusinessModal 
         openCreateCharactersModalOne={openCreateCharactersModalOne} 
         setOpenCreateCharactersModalOne={setOpenCreateCharactersModalOne}
         businessSubmit ={businessSubmit}  
         />
      {/* Add Create Characters Modal One popup ends here */}
      {/* Add Create Characters Modal Two popup start here */}
       <AudienceInsightsModal
          openCreateCharactersModalTwo={openCreateCharactersModalTwo}
          setOpenCreateCharactersModalTwo={setOpenCreateCharactersModalTwo}
          handlerStepTwo={handlerStepTwo}
          handlerBackStepOne={handlerBackStepOne}
          audienceInsightSubmit={audienceInsightSubmit}
        
       />
      {/* Add Create Characters Modal Two popup ends here */}
      {/* Add Create Characters Modal Three popup start here */}
       
        <CustomerDataUploadModal
          openCreateCharactersModalThree = {openCreateCharactersModalThree}
          setOpenCreateCharactersModalThree={setOpenCreateCharactersModalThree}
          handlerBackStepTwo={handlerBackStepTwo}
          handlerStepFour={handlerStepFour}
        />

      {/* Add Create Characters Modal Three popup ends here */}
      {/* Add Create Characters Modal Four popup start here */}
         <CharacterModal
           handlerBackStepThree = {handlerBackStepThree}
           openCreateCharactersModalFour={openCreateCharactersModalFour}
           setOpenCreateCharactersModalFour={setOpenCreateCharactersModalFour}
         />
      {/* Add Create Characters Modal Four popup ends here */}
    </div>
  );
};

export default MyCharacters;
