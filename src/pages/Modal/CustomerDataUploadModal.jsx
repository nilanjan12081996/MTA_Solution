import React from 'react';
import {
    AiOutlinePlus,
    AiOutlineSearch,
    BiCloudUpload,
    FiEdit3,
    IoIosArrowBack,
  } from "../../assets/icons";
import { Button, FileInput, Label,Modal,Select,Textarea,TextInput,} from "flowbite-react";
import { useForm } from "react-hook-form";
const CustomerDataUploadModal = ({
    openCreateCharactersModalThree,
    setOpenCreateCharactersModalThree,
    handlerBackStepTwo,
    handlerStepFour
}) => {
           const {
                 register,
                 handleSubmit,
                 watch,
                 formState: { errors },
               } = useForm();

          
    const customerdatauploadonSubmit = (data) =>{
        console.log("data",data);
    }
             


  return (
    <div>
      <Modal
        show={openCreateCharactersModalThree}
        onClose={() => setOpenCreateCharactersModalThree(false)}
        size="4xl"
      >
        <Modal.Header className="bg-[#7041ff] text-white rounded-md border-0 absolute right-2 top-2">
          &nbsp;
        </Modal.Header>
        <Modal.Body className="bg-[#151026] rounded-lg p-10 Create_Character_popup_wrap">
          <form onSubmit={handleSubmit(customerdatauploadonSubmit)}>
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
                      className="flex h-12 w-full cursor-pointer flex-col items-center justify-center rounded-lg border border-[#766d93] bg-[#2d283c] hover:bg-[#332e42] dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <Textarea 
                       placeholder=""  
                       rows={3} 
                      //  {...register("specific_campaigns", { required: true })}
                  />
                     
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
                  <Select {...register("your_goals", { required: true })}>
                            <option value="">Select</option>
                            <option value="Ads / Messaging">Ads / Messaging</option>
                            <option value="Website UX / Conversion">Website UX / Conversion</option>
                            <option value="Product-market fit">Product-market fit</option>
                            <option value="Brand positioning">Brand positioning</option>
                            <option value="Other">Other</option>
                            </Select>
                            {errors.your_goals && (    
                            <span className="text-red-500">
                                Please select your goals 
                            </span>
                            )}
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
                  <Textarea 
                  placeholder=""  
                  rows={3} 
                  {...register("specific_campaigns", { required: true })}
                  />
                   {errors.specific_campaigns && (    
                            <span className="text-red-500">
                                   specific campaigns is required 
                            </span>
                            )}
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
          </form>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CustomerDataUploadModal
