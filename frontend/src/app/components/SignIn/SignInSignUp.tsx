'use client'
import { useState } from "react"
import Modal from "../Modal";
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import SignNextAuth from "./SignNextAuth";
import SignUp from "./SignUp";
const validationSchema = z.object({
  email: z.string().email().min(2),
  password: z.string().min(6)
});

type ValidationSchema = z.infer<typeof validationSchema>; 


export default  function SignInSignUp() {
  const { data: session, status } = useSession();
  // console.log(session)
  const [showModal, setShowModal] = useState(false);
  const [tab,setTab] = useState("signIn");
  const [isTouchedEmail, setIsTouchedEmail] = useState(false);
  const [isTouchedPW, setIsTouchedPW] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors,isDirty },
  } = useForm<ValidationSchema>({
    resolver: zodResolver(validationSchema),
    mode:"all",
    defaultValues:{
      email:"",
      password:""
    }
  });
  const onSubmit: SubmitHandler<ValidationSchema> = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <>
      {session ? (
      <div className="bg-gray-100 px-2 py-2 rounded-md font-semibold" onClick={()=> signOut()}>
        Sign Out
      </div>
      ) :(
        
        
          <div className="bg-gray-100 px-2 py-2 rounded-md font-semibold" onClick={() => setShowModal(true)}>
            Sign In
          </div>
        
      )} 
      
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="bg-white flex w-full" >
            <div className="flex flex-col w-full mt-[2.215rem] relative shrink-0  items-center">
              <div className="px-10">
                  <div className="pb-4 ">
                    <button 
                      onClick={() => setTab("signIn")}
                      className={` px-3 py-2 uppercase font-semibold leading-6 pb-[0.125rem]  outline-none mr-[4.5rem] ${tab ==="signIn" ? "border-b-4 border-black" :""} `}>SIGN IN</button>
                    <button 
                      onClick={()=> setTab("signup")}
                      className={` px-3 py-2 uppercase font-semibold leading-6 pb-[0.125rem] outline-none ${tab ==="signup" && "border-b-4 border-black"}`}>SIGN UP</button>
                  </div>
              </div>
              {tab === "signIn" ? (

                <div className="px-10 mt-5 w-full">
                  <SignNextAuth/>
                  <form onSubmit={handleSubmit((d) => console.log(d))} className="flex flex-col text-black mt-2">

                    {/* email */}
                    <div className="relative min-h-[84px] w-full overflow-visible">
                      {/* input layout */}

                      <div className="relative flex h-[56px] w-full flex-col items-center justify-start rounded-lg border-orange-600 bg-transparent  ">
                        <input
                          id="email"
                          type="email"
                          {...register("email", {
                            required: true,
                            minLength: 15,
                            maxLength: 30,
                            // pattern: new RegExp(
                            //   "^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$",
                            //   "g"
                            // ),
                          })}
                          onFocus={() => setIsTouchedEmail(true)}
                          onBlur={() => {
                            if (isDirty) setIsTouchedEmail(true);
                            else setIsTouchedEmail(false);
                          }}
                          className={`m-0 flex h-[56px] w-full rounded-lg border-0 border-[#111111] py-4 px-3 text-base leading-6 text-[#504141] outline-0`}
                        />
                        {errors.email && (
                          <p className="text-[14px] text-[#d43f21]">
                            Please enter a valid email
                          </p>
                        )}
                        {/* {errors.password?.type === "required" && (
                              <div className="block">
                                <span>Please enter a valid password</span>
                              </div>
                            )} */}

                        <label
                          htmlFor="email"
                          className={`absolute left-2 top-4 scale-100 px-1 text-base leading-6 transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)] ${isTouchedEmail
                            ? "origin-center -translate-y-[28px] -translate-x-[10px] scale-75 text-[#131313] "
                            : "text-[#979494]"
                            }
                              pointer-events-none`}
                        >
                          <span
                            className={`${errors.email && "text-[#d43f21]"}`}
                          >
                            Email*
                          </span>
                        </label>
                        <fieldset
                          className={`pointer-events-none absolute left-0 bottom-0 m-0 h-full  w-full rounded-lg border border-solid  ${isTouchedEmail
                            ? "border-[#757575]"
                            : "border-[#dcdcdc]"
                            }  p-0 ${errors.email ? "border-[#d43f21]" : ""}`}
                        >
                          <legend
                            className={`invisible ml-[7px] h-[1px] px-1 py-0 text-[12px] transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)]
                                active:origin-center active:-translate-y-[32px] active:scale-75 active:text-[#d43f21]
                                ${!isTouchedEmail ? "hidden" : "block"} 
                                `}
                          >
                            Email*
                          </legend>
                        </fieldset>
                        {/* <input type="submit" /> */}
                      </div>
                    </div>

                    {/* password */}
                    <div className="relative min-h-[84px] w-full overflow-visible">
                      {/* input layout */}

                      <div className="relative flex h-[56px] w-full flex-col items-center justify-start rounded-lg border-orange-600 bg-transparent bg-[#f7f7f7] ">
                        <input
                          type="password"
                          id="password"
                          {...register("password", {
                            required: true,
                            minLength: 8,
                            maxLength: 30,
                            // pattern: new RegExp(
                            //   "^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$",
                            //   "g"
                            // ),
                          })}
                          onFocus={() => setIsTouchedPW(true)}
                          onBlur={() => {
                            if (isDirty) setIsTouchedPW(true);
                            else setIsTouchedPW(false);
                          }}
                          className="m-0 flex h-[56px] w-full rounded-lg   border-0 border-[#111111] py-4  px-3  text-base
                              leading-6 text-[#504141] outline-0 
                              "
                        />
                        {errors.password && (
                          <p className="text-[14px] text-[#d43f21]">
                            Please enter a valid passward
                          </p>
                        )}
                        {/* {errors.password?.type === "required" && (
                              <div className="block">
                                <span>Please enter a valid password</span>
                              </div>
                            )} */}

                        <label
                          htmlFor="password"
                          className={`absolute left-2 top-4 scale-100 px-1 text-base leading-6 transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)] ${isTouchedPW
                            ? "origin-center -translate-y-[28px] -translate-x-[10px] scale-75 text-[#131313] "
                            : "text-[#979494]"
                            } pointer-events-none`}
                        >
                          <span
                            className={`${errors.password && "text-[#d43f21]"
                              } `}
                          >
                            Password*
                          </span>
                        </label>
                        <fieldset
                          className={`pointer-events-none absolute left-0 bottom-0 m-0 h-full  w-full rounded-lg border border-solid  ${isTouchedPW
                            ? "border-[#757575]"
                            : "border-[#dcdcdc]"
                            }  p-0 ${errors.password ? "border-[#d43f21]" : ""
                            }`}
                        >
                          <legend
                            className={`invisible ml-[7px] h-[1px] px-1 py-0 text-[12px] transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)]
                                active:origin-center active:-translate-y-[32px] active:scale-75 active:text-[#d43f21]
                                ${!isTouchedPW ? "hidden" : "block"} 
                                `}
                          >
                            Password*
                          </legend>
                        </fieldset>
                        {/* <input type="submit" /> */}
                      </div>
                    
                    </div>
                    <button type="submit" className="bg-blue-300 hover:bg-blue-500 rounded-md text-black  hover:text-white font-semibold py-2">Sign In</button>
                  </form>
                </div>
              ):(
                <SignUp/>
              )}
            </div>
          </div>

          {/* <div className="bg-white rounded-lg p-4">
            <h1 className="text-2xl font-bold">Modal title</h1>
            <div onClick={() => setShowModal(false)}>
              Close
            </div>
          </div> */}
        </Modal>
      )}
    </>
  );
}