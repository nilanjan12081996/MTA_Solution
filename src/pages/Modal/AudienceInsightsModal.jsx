import React from 'react';
import { Button, FileInput, Label,Modal,Select,Textarea,TextInput,} from "flowbite-react";
import { useForm } from "react-hook-form";
const AudienceInsightsModal = ({
       openCreateCharactersModalTwo,
       setOpenCreateCharactersModalTwo,
       handlerStepTwo,
       handlerBackStepOne,
       audienceInsightSubmit,
      
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
                 show={openCreateCharactersModalTwo}
                 onClose={() => setOpenCreateCharactersModalTwo(false)}
                 size="4xl"
               >
                 <Modal.Header className="bg-[#7041ff] text-white rounded-md border-0 absolute right-2 top-2">
                   &nbsp;
                 </Modal.Header>
                 <Modal.Body className="bg-[#151026] rounded-lg p-10 Create_Character_popup_wrap">
                   <form onSubmit={handleSubmit(audienceInsightSubmit)}>
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
                           <Select {...register("age_range", { required: true })}>
                            <option value="">Select</option>
                            <option value={10}>10 - 18</option>
                            <option value={19}>19 - 27</option>
                            </Select>
                            {errors.age_range && (
                            <span className="text-red-500">
                                Please select age ange
                            </span>
                            )}
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
                           <TextInput 
                           id="base" 
                           type="text" 
                           sizing="md" 
                           {...register("region_country", { required: true })}
                           />
                           {errors.region_country && (
                            <span className="text-red-500">
                                   Requiered region/country
                            </span>
                            )}
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
                           <Textarea placeholder=""  
                           rows={3} 
                           {...register("job_role", { required: true })}
                           />
                             {errors.job_role && (
                                      <span className="text-red-500">
                                        Job Role is required
                                      </span>
                                    )}
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
                           <Textarea placeholder=""  
                           rows={3} 
                           {...register("key_problem", { required: true })}
                           />
                            {errors.key_problem && (
                                      <span className="text-red-500">
                                        Key Problems is required
                                      </span>
                                    )}
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
                           <Textarea 
                            placeholder=""  
                            rows={3} 
                           {...register("buy_product", { required: true })}
                           />
                           {errors.buy_product && (
                                      <span className="text-red-500">
                                        Buy Product is required
                                      </span>
                                    )}
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
                           <Textarea placeholder=""  
                             rows={3} 
                             {...register("concerns_objections", { required: true })}
                           />
                            {errors.concerns_objections && (
                                      <span className="text-red-500">
                                        Concerns or Objections is required
                                      </span>
                                    )}
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
                            //  onClick={() => handlerStepThree(true)}
                             className="text-white text-[18px] font-medium rounded-md py-2.5 w-full mt-0"
                           >
                             Next
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

export default AudienceInsightsModal
