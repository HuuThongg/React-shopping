import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import Tab from "./Tab";
import {
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTruck,
} from "react-icons/hi2";
import { useState } from "react";


const Profile = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmitA = (data) => console.log(data);
  return (
    <section
      className={`relative z-[1] ${
        pathname !== "/" ? "" : "pt-[95px]   md:pt-[100px] "
      }   bg-[#f7f7f7] `}
    >
      <div className="">
        <Tab />
      </div>
      <div className=" mx-auto min-h-[690px] max-w-[1280px]   p-[50px]">
        <div className="bg-red-100">
          {/* header */}
          <div className="mb-[24px]">
            <h1 className="w-full text-2xl font-medium leading-7">Settings</h1>
          </div>
          <div className="hidden w-full pb-3 screen960:block"></div>

          {/* profile detail */}
          <div className="min-h-[calc(100vh-570px)]">
            <div className=" inline-block bg-red-300 pr-6 pb-8 pl-0 align-top screen960:max-w-[290px]">
              <div className="">
                <div className="relative flex h-[44px] cursor-pointer items-center">
                  <div className="w-[46px] min-w-[46px] pr-5 leading-[44px]">
                    <HiOutlineUser className="text-[26px]"></HiOutlineUser>
                  </div>
                  <div className="w-[calc(100%-32px)] leading-10">
                    <div className="h-full w-full">
                      <span>Account Details</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative flex h-[44px] cursor-pointer items-center">
                  <div className="w-[46px] min-w-[46px] pr-5 leading-[44px]">
                    <HiOutlineCalendar className="text-[26px]"></HiOutlineCalendar>
                  </div>
                  <div className="w-[calc(100%-32px)] leading-10">
                    <div className="h-full w-full">
                      <span>Payment Methods</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="">
                <div className="relative flex h-[44px] cursor-pointer items-center">
                  <div className="w-[46px] min-w-[46px] pr-5 leading-[44px]">
                    <HiOutlineTruck className="text-[26px]"></HiOutlineTruck>
                  </div>
                  <div className="w-[calc(100%-32px)] leading-10">
                    <div className="h-full w-full">
                      <span>Delivery Address</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="screen960 relative ml-[140px] mt-0  inline-block min-h-[1px] w-[33.333333%] max-w-[768px] bg-slate-200 px-2 pt-[48px] pb-[36px] align-top text-base leading-7">
              <main>
                <form onSubmit={handleSubmit(onSubmitA)}>
                  {/* wrapper */}
                  <div className="bg-white">
                    <div>
                      <h2 className=" mb-3 text-base font-medium leading-7 screen960:mb-[36px]">
                        Account Details
                      </h2>
                    </div>
                    {/* account form */}
                    <div>
                      {/* email */}
                      {/* error active focus */}
                      <div className="relative min-h-[84px] w-full overflow-visible">
                        {/* input layout */}
                        <div className="relative flex h-[56px] w-full items-center justify-start rounded-lg border-orange-600 bg-transparent bg-red-100 ">
                          <input
                            {...register("email", {
                              required: true,
                              maxLength: 20,
                              pattern: /^[A-Za-z]+$/i,
                            })}
                            className="m-0 h-[56px] w-full rounded-lg border-0   border-[#111111] py-4 px-3  text-base  leading-6
                            text-[#504141] outline-0
                            "
                          />
                          {errors?.email?.type === "required" && (
                            <p>This field is required</p>
                          )}
                          {errors?.email?.type === "maxLength" && (
                            <p>First name cannot exceed 20 characters</p>
                          )}
                          {errors?.email?.type === "pattern" && (
                            <p>Alphabetical characters only</p>
                          )}
                          <label className="absolute left-2 top-4 scale-100 px-1 text-base leading-6 transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)] active:origin-center active:-translate-y-[32px]  active:scale-75 active:text-[#d43f21]">
                            <span>Email</span>
                          </label>
                          <fieldset className="pointer-events-none absolute left-0 bottom-0 m-0 h-full  w-full rounded-lg border border-solid border-[#757575]  p-0">
                            <legend className="ml-[7px]transition-all invisible h-[1px] px-1 py-0 text-[12px] delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)]  active:origin-center active:-translate-y-[32px] active:scale-75 active:text-[#d43f21]">
                              Email
                            </legend>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

{
  /*
const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });

criteriaMode: "firstError",

<form onSubmit={handleSubmit(onSubmit)}>
  <h1>ErrorMessage</h1>
  <input
    {...register("multipleErrorInput", {
      required: "This input is required.",
      pattern: {
        value: /\d+/,
        message: "This input is number only.",
      },
      minLength: {
        value: 11,
        message: "This input must exceed 10 characters",
      },
    })}
  />
  <ErrorMessage
    errors={errors}
    name="multipleErrorInput"
    render={({ messages }) => {
      console.log("messages", messages);
      return messages
        ? Object.entries(messages).map(([type, message]) => (
            <p key={type}>{message}</p>
          ))
        : null;
    }}
  />

  <input type="submit" />
</form>; */
}