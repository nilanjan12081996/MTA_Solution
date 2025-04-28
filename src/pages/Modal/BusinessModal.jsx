import React from 'react'
import { Button, FileInput, Label,Modal,Select,Textarea,TextInput,} from "flowbite-react";
import { useForm } from "react-hook-form";
const BusinessModal = ({
    openCreateCharactersModalOne ,
    setOpenCreateCharactersModalOne,
    businessSubmit,
  
}) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();
    


  return (
    <div>
           <Modal
                  show={openCreateCharactersModalOne}
                  onClose={() => setOpenCreateCharactersModalOne(false)}
                  size="4xl"
                >
                  <Modal.Header className="bg-[#7041ff] text-white rounded-md border-0 absolute right-2 top-2">
                    &nbsp;
                  </Modal.Header>
                  <Modal.Body className="bg-[#151026] rounded-lg p-10 Create_Character_popup_wrap">
              
                  <form onSubmit={handleSubmit(businessSubmit)}>
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
                            <TextInput 
                            id="base" 
                            type="text" 
                            sizing="md" 
                            {...register("company_name", {
                              required: true,
                            })}
                            />
                            {errors.company_name && (
                                      <span className="text-red-500">
                                        Company Name is required
                                      </span>
                              )}
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
                            <TextInput 
                              id="base" 
                              type="text" 
                              sizing="md" 
                              {...register("website", {
                                required: true,
                              })}
                            />
                             {errors.website && (
                                      <span className="text-red-500">
                                        Company Website URL is required
                                      </span>
                                    )}
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
                            <Textarea 
                             placeholder=""  
                             rows={3} 
                            {...register("product_service", {
                              required: true,
                            })}
                            />
                            {errors.product_service && (
                                      <span className="text-red-500">
                                         Product/Service is required
                                      </span>
                                    )}
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
                            <Textarea 
                            placeholder=""  
                            rows={3} 
                            {...register("ideal_customer", { required: true })}
                            />
                            {errors.ideal_customer && (
                               <span className="text-red-500">
                                  Ideal Customer is required
                              </span>
                             )}
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
                            <Select {...register("b2b_b2c", { required: true })}>
                            <option value="">Select</option>
                            <option value={1}>B2B</option>
                            <option value={2}>B2C</option>
                            <option value={3}>B2B or B2C</option>
                            </Select>
                            {errors.b2b_b2c && (
                            <span className="text-red-500">
                                Please select B2B or B2C
                            </span>
                            )}
                          </div>
                        </div>
                        <div className="create_characters_btn w-full">
                          <button
                            type="submit"
                            // onClick={() => handlerStepTwo(true)}
                            className="text-white text-[18px] font-medium rounded-md py-2.5 w-full mt-2"
                          >
                            Next
                          </button>
                        </div>
                      </div>
                    </div>
                   </form>
                  </Modal.Body>
                </Modal>
    </div>
  )
}

export default BusinessModal
