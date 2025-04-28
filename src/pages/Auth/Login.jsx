import { Link, useNavigate } from "react-router-dom";
// import { LoginImg, logo } from "../../../assets/images/images";
import { FcGoogle } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { login } from "../../../Reducer/AuthSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import AfterLoginModal from "./AfterLoginModal";
import { Checkbox, Label, Select } from "flowbite-react";
import { LoginImg, logo } from "../../assets/images/images";
import {
  getAlluserType,
  login,
  loginServiceProvider,
  wholeSalerLogin,
} from "../../reducers/AuthSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { usersRole } = useSelector((state) => state?.auth);
  useEffect(() => {
    dispatch(getAlluserType());
  }, []);

  console.log("usersRole", usersRole);

  const handleLogin = () => {
    navigate("/home");
  };

  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const type = watch("userType");
  console.log("type", type);

  const onSubmit = (data) => {
    if (type === "SA") {
      const payload = {
        email: data?.email,
        password: data?.password,
      };
      dispatch(login(payload)).then((res) => {
        console.log("Res", res);
        if (res?.payload?.status_code === 200) {
          navigate("/dashboard");
          setErrorMessage("");
        } else if (res?.payload?.message?.status_code === 400) {
          setErrorMessage(res?.payload?.message?.message);
        } else if (res?.payload?.message?.status_code === 401) {
          setErrorMessage(res?.payload?.message?.message);
        }
      });
    } else if (type === "SP") {
      const payload = {
        email: data?.email,
        password: data?.password,
      };
      dispatch(loginServiceProvider(payload)).then((res) => {
        console.log("res", res);

        if (res?.payload?.status_code === 200) {
          navigate("/dashboard");
          setErrorMessage("");
        } else if (res?.payload?.message?.status_code === 400) {
          setErrorMessage(res?.payload?.message?.message);
        } else if (res?.payload?.message?.status_code === 401) {
          setErrorMessage(res?.payload?.message?.message);
        }
      });
    } else if (type === "WS") {
      dispatch(wholeSalerLogin(data)).then((res) => {
        console.log("res", res);
        if (res?.payload?.status_code === 200) {
          navigate("/dashboard");
          setErrorMessage("");
        } else if (res?.payload?.message?.status_code === 400) {
          setErrorMessage(res?.payload?.message?.message);
        } else if (res?.payload?.message?.status_code === 401) {
          setErrorMessage(res?.payload?.message?.message);
        }
      });
    }
  };
  return (
    <div className="my-0 lg:my-0 px-4 lg:mx-0 flex justify-center items-center wrapper_bg_area h-screen bg-black">
      <div className="w-full my-0 mx-auto">
        <div className="lg:flex lg:h-screen py-8 lg:py-0">
          <div className="w-full lg:w-6/12 flex justify-center items-center bg-black">
            <div className="w-full lg:w-7/12">
              <div className="text-center mb-2 lg:mb-10">
                <img src={logo} alt="logo" className="inline-block w-4/12" />
              </div>
              <h1 className="text-center font-medium text-xl lg:text-[25px] leading-[45px] text-white pb-4 lg:pb-12">
                Sign In to Your Account
              </h1>
              <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <Label className="text-[15px] text-white font-normal pb-2 block">
                      Choose User Type
                    </Label>
                    <Select
                      {...register("userType")}
                      required
                      className="text-[#888888] py-[12px]"
                    >
                      <option>Choose User Type</option>
                      {usersRole?.data?.map((userrole) => {
                        return (
                          <>
                            <option value={userrole?.role_type_short_name}>
                              {userrole?.role_type_name}
                            </option>
                          </>
                        );
                      })}
                    </Select>
                    {/* {errors.user_name && (
                      <span className="text-red-500">
                        User Name is required
                      </span>
                    )} */}
                  </div>
                  <div className="mb-6">
                    <Label className="text-[15px] text-white font-normal pb-2 block">
                      Email
                    </Label>
                    <input
                      type="email"
                      id="email"
                      className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                      placeholder="Email"
                    />
                  </div>
                  <div className="mb-6">
                    {/* <div className="flex justify-between">
                      <div className="block md:hidden">
                        <Link
                          className="text-base md:text-xl text-teal-400 font-bold hover:text-teal-500"
                          to="/forgot-password"
                        >
                          Forgot Password?
                        </Link>
                      </div>
                    </div> */}
                    <Label className="text-[15px] text-white font-normal pb-2 block">
                      Your Password
                    </Label>
                    <input
                      placeholder="Password"
                      type="password"
                      id="password"
                      className="bg-white border border-[#dfdfdf] text-[#888888] text-sm rounded-lg focus:ring-[#f1d9ff] focus:border-[#f1d9ff] block w-full py-3 px-3"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      handleLogin();
                    }}
                    className="text-white bg-[#ff1a03] font-Manrope font-medium text-[23px] mb-2 hover:bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-xl text-xl w-full px-5 py-3 text-center"
                  >
                    Log In
                  </button>
                  <div className="text-red-500 mb-6 text-center">
                    {errorMessage}
                  </div>
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <div className="flex items-center gap-1">
                        <Checkbox />
                        <Label className="text-white font-normal text-sm">
                          Remember me!
                        </Label>
                      </div>
                    </div>
                    <div className="hidden md:block">
                      <Link
                        className="text-[#ff1a03] text-sm font-normal hover:text-white"
                        to="/forgot-password"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </div>
                </form>
                {/* <div className="break_area relative">
                  <p className="text-[#BABABA] text-[22px] uppercase bg-white px-4 relative z-10 text-center w-[100px] mx-auto">
                    Or
                  </p>
                </div> */}
                <div className="break_area relative pt-2 pb-2">
                  <p className="text-[#615D5D] text-sm leading-[22px] px-4 relative z-10 text-center w-[160px] mx-auto">
                    Or Continue With
                  </p>
                </div>
                <div className="flex justify-center items-center mt-4">
                  <div className="flex justify-center items-center border border-[#747474] px-4 py-2 rounded-md">
                    <FcGoogle className="text-2xl mr-1.5" />
                    <p className="text-white text-base">Google</p>
                  </div>
                </div>

                <div className="text-center mt-10">
                  <p className="text-[#615D5D] text-sm">
                    Don’t have an account?{" "}
                    <button
                      onClick={() => handleSignup()}
                      className="text-white hover:text-[#615D5D]"
                    >
                      Sign Up
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-6/12 bg-cover hidden lg:block"
            style={{ backgroundImage: `url("${LoginImg}")` }}
          >
            &nbsp;
          </div>
        </div>
      </div>
      {/* {openModal && (
        <AfterLoginModal openModal={openModal} setOpenModal={setOpenModal} />
      )} */}
    </div>
  );
};

export default Login;
