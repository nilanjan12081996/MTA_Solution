import React from 'react';
import {
    support01,
    support02,
    support03,
  } from "../../assets/images/images";
import { Button, FileInput, Label,Modal,Select,Textarea,TextInput,} from "flowbite-react";
const CharacterModal = ({
    handlerBackStepThree,
    openCreateCharactersModalFour,
    setOpenCreateCharactersModalFour
}) => {
  return (
    <div>
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
    </div>
  )
}

export default CharacterModal
