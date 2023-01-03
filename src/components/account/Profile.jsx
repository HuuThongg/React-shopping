import { useLocation } from "react-router";
import { useForm } from "react-hook-form";
import Tab from "./Tab";
import {
  HiOutlineUser,
  HiOutlineCalendar,
  HiOutlineTruck,
} from "react-icons/hi2";
import { useState } from "react";
import { HiChevronDown } from "react-icons/hi2";

const Profile = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [isTouchedEmail, setIsTouchedEmail] = useState(false);

  const [isTouchedPW, setIsTouchedPW] = useState(false);
  const [isTouchedRegion, setIsTouchedRegion] = useState(false);
  const [isMouseEnterRegion, setIsMouseEnterRegion] = useState(false);
  const [country, setCountry] = useState("United States");
  const [isTouchedProvince, setIsTouchedProvince] = useState(false);
  const [isTouchedCity, setIsTouchedCity] = useState(false);
  const [isTouchedPostCode, setIsTouchedPostCode] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid, touchedFields },
  } = useForm({
    mode: "all",
    defaultValues: {
      email: "",
      password: "",
      province: "",
      city: "",
      postcode: "",
    },
  });

  const onSubmit = (data) => console.log(data);
  console.log(isDirty);
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
        <div className="bg-[#f7f7f7]">
          {/* header */}
          <div className="mb-[24px]">
            <h1 className="w-full text-2xl font-medium leading-7">Settings</h1>
          </div>
          <div className="hidden w-full pb-3 screen960:block"></div>

          {/* profile detail */}
          <div className="min-h-[calc(100vh-570px)]">
            <div className=" inline-block bg-[#f7f7f7] pr-6 pb-8 pl-0 align-top screen960:max-w-[290px]">
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
            <div className="screen960 relative ml-[140px] mt-0  inline-block min-h-[1px] w-[33.333333%] max-w-[768px]  px-2 pt-[48px] pb-[36px] align-top text-base leading-7">
              <main>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* wrapper */}
                  <div className="">
                    <div>
                      <h2 className=" mb-3 text-base font-medium leading-7 screen960:mb-[36px]">
                        Account Details
                      </h2>
                    </div>
                    {/* account form */}
                    <div>
                      {/* email */}
                      <div className="relative min-h-[84px] w-full overflow-visible">
                        {/* input layout */}

                        <div className="relative flex h-[56px] w-full flex-col items-center justify-start rounded-lg border-orange-600 bg-transparent  ">
                          <input
                            type="email"
                            {...register("email", {
                              required: true,
                              minLength: 8,
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
                            className={`m-0 flex h-[56px] w-full rounded-lg border-0 border-[#111111] py-4 px-3 text-base
                            leading-6 text-[#504141] outline-0 
                            
                            `}
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
                            className={`absolute left-2 top-4 scale-100 px-1 text-base leading-6 transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)] ${
                              isTouchedEmail
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
                            className={`pointer-events-none absolute left-0 bottom-0 m-0 h-full  w-full rounded-lg border border-solid  ${
                              isTouchedEmail
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
                            className={`absolute left-2 top-4 scale-100 px-1 text-base leading-6 transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)] ${
                              isTouchedPW
                                ? "origin-center -translate-y-[28px] -translate-x-[10px] scale-75 text-[#131313] "
                                : "text-[#979494]"
                            } pointer-events-none`}
                          >
                            <span
                              className={`${
                                errors.password && "text-[#d43f21]"
                              } `}
                            >
                              Password*
                            </span>
                          </label>
                          <fieldset
                            className={`pointer-events-none absolute left-0 bottom-0 m-0 h-full  w-full rounded-lg border border-solid  ${
                              isTouchedPW
                                ? "border-[#757575]"
                                : "border-[#dcdcdc]"
                            }  p-0 ${
                              errors.password ? "border-[#d43f21]" : ""
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
                      <div>
                        <h4 className="mb-4">Location</h4>
                        {/* country/region */}
                        <div className="relative min-h-[84px] w-full overflow-visible  ">
                          {/* selection layout */}
                          <div
                            className="relative inline-flex h-[56px] w-full  items-center justify-start rounded-lg border-orange-600 bg-transparent bg-[#fff] align-bottom"
                            onMouseEnter={() => {
                              setIsMouseEnterRegion(true);
                            }}
                            onMouseLeave={() => {
                              setIsMouseEnterRegion(false);
                            }}
                          >
                            <label className="pointer-events-none absolute left-2 top-4 origin-center -translate-y-[28px] -translate-x-[10px] scale-75 px-1 text-base leading-4 text-[#131313]">
                              <span
                                className={`${
                                  isMouseEnterRegion
                                    ? "text-[#11111]"
                                    : "text-[#757575]"
                                }  `}
                              >
                                Country/Region*
                              </span>
                            </label>
                            {/* dropdown */}
                            <div className="relative h-full w-full text-[#111111]  ">
                              <select
                                onFocus={() => setIsTouchedRegion(true)}
                                onBlur={() => {
                                  if (isDirty) setIsTouchedRegion(true);
                                  else setIsTouchedRegion(false);
                                }}
                                onChange={(e) => {
                                  setCountry(e.target.value);
                                }}
                                className=" h-full w-full cursor-pointer appearance-none rounded-[4px] opacity-0 outline-0
                              "
                              >
                                <option disabled>Country/Region</option>
                                <option value="US">United States</option>
                                <option value="AF">Afghanistan</option>
                                <option value="AL">Albania</option>
                                <option value="DZ">Algeria</option>
                                <option value="AS">American Samoa</option>
                                <option value="AD">Andorra</option>
                                <option value="AO">Angola</option>
                                <option value="AI">Anguilla</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AG">Antigua and Barbuda</option>
                                <option value="AR">Argentina</option>
                                <option value="AM">Armenia</option>
                                <option value="AW">Aruba</option>
                                <option value="AU">Australia</option>
                                <option value="AT">Austria</option>
                                <option value="AZ">Azerbaijan</option>
                                <option value="BS">Bahamas</option>
                                <option value="BH">Bahrain</option>
                                <option value="BD">Bangladesh</option>
                                <option value="BB">Barbados</option>
                                <option value="BY">Belarus</option>
                                <option value="BE">Belgium</option>
                                <option value="BZ">Belize</option>
                                <option value="BJ">Benin</option>
                                <option value="BM">Bermuda</option>
                                <option value="BT">Bhutan</option>
                                <option value="BO">Bolivia</option>
                                <option value="BA">
                                  Bosnia and Herzegovina
                                </option>
                                <option value="BW">Botswana</option>
                                <option value="BV">Bouvet Island</option>
                                <option value="BR">Brazil</option>
                                <option value="IO">
                                  British Indian Ocean Territory
                                </option>
                                <option value="BN">Brunei Darussalam</option>
                                <option value="BG">Bulgaria</option>
                                <option value="BF">Burkina Faso</option>
                                <option value="BI">Burundi</option>
                                <option value="KH">Cambodia</option>
                                <option value="CM">Cameroon</option>
                                <option value="CA">Canada</option>
                                <option value="CV">Cape Verde</option>
                                <option value="KY">Cayman Islands</option>
                                <option value="CF">
                                  Central African Republic
                                </option>
                                <option value="TD">Chad</option>
                                <option value="CL">Chile</option>
                                <option value="CN">China Mainland </option>
                                <option value="CX">Christmas Island</option>
                                <option value="CC">
                                  Cocos (Keeling) Islands
                                </option>
                                <option value="CO">Colombia</option>
                                <option value="KM">Comoros</option>
                                <option value="CG">Congo</option>
                                <option value="CD">Congo, The DRC</option>
                                <option value="CK">Cook Islands</option>
                                <option value="CR">Costa Rica</option>
                                <option value="CI">Cote d'Ivoire</option>
                                <option value="HR">Croatia</option>
                                <option value="CU">Cuba</option>
                                <option value="CY">Cyprus</option>
                                <option value="CZ">Czech Republic</option>
                                <option value="DK">Denmark</option>
                                <option value="DJ">Djibouti</option>
                                <option value="DM">Dominica</option>
                                <option value="DO">Dominican Republic</option>
                                <option value="TL">East Timor</option>
                                <option value="EC">Ecuador</option>
                                <option value="EG">Egypt</option>
                                <option value="SV">El Salvador</option>
                                <option value="GQ">Equatorial Guinea</option>
                                <option value="ER">Eritrea</option>
                                <option value="EE">Estonia</option>
                                <option value="ET">Ethiopia</option>
                                <option value="EU">European Union</option>
                                <option value="FK">
                                  Falkland Islands (Malvinas)
                                </option>
                                <option value="FO">Faroe Islands</option>
                                <option value="FJ">Fiji</option>
                                <option value="FI">Finland</option>
                                <option value="FR">France</option>
                                <option value="GF">French Guiana</option>
                                <option value="PF">French Polynesia</option>
                                <option value="TF">
                                  French Southern Territories
                                </option>
                                <option value="GA">Gabon</option>
                                <option value="GM">Gambia</option>
                                <option value="GE">Georgia</option>
                                <option value="DE">Germany</option>
                                <option value="GH">Ghana</option>
                                <option value="GI">Gibraltar</option>
                                <option value="GR">Greece</option>
                                <option value="GL">Greenland</option>
                                <option value="GD">Grenada</option>
                                <option value="GP">Guadeloupe</option>
                                <option value="GU">Guam</option>
                                <option value="GT">Guatemala</option>
                                <option value="GN">Guinea</option>
                                <option value="GW">Guinea-Bissau</option>
                                <option value="GY">Guyana</option>
                                <option value="HT">Haiti</option>
                                <option value="HM">
                                  Heard and McDonald Islands
                                </option>
                                <option value="VA">
                                  Holy See (Vatican City State)
                                </option>
                                <option value="HN">Honduras</option>
                                <option value="HK">Hong Kong</option>
                                <option value="HU">Hungary</option>
                                <option value="IS">Iceland</option>
                                <option value="IN">India</option>
                                <option value="ID">Indonesia</option>
                                <option value="IR">
                                  Iran (Islamic Republic of)
                                </option>
                                <option value="IQ">Iraq</option>
                                <option value="IE">Ireland</option>
                                <option value="IL">Israel</option>
                                <option value="IT">Italy</option>
                                <option value="JM">Jamaica</option>
                                <option value="JP">Japan</option>
                                <option value="JO">Jordan</option>
                                <option value="KZ">Kazakhstan</option>
                                <option value="KE">Kenya</option>
                                <option value="KI">Kiribati</option>
                                <option value="KP">Korea, D.P.R.O.</option>
                                <option value="KR">Korea, Republic of</option>
                                <option value="KW">Kuwait</option>
                                <option value="KG">Kyrgyzstan</option>
                                <option value="LA">Laos</option>
                                <option value="LV">Latvia</option>
                                <option value="LB">Lebanon</option>
                                <option value="LS">Lesotho</option>
                                <option value="LR">Liberia</option>
                                <option value="LY">
                                  Libyan Arab Jamahiriya
                                </option>
                                <option value="LI">Liechtenstein</option>
                                <option value="LT">Lithuania</option>
                                <option value="LU">Luxembourg</option>
                                <option value="MO">Macau</option>
                                <option value="MK">Macedonia</option>
                                <option value="MG">Madagascar</option>
                                <option value="MW">Malawi</option>
                                <option value="MY">Malaysia</option>
                                <option value="MV">Maldives</option>
                                <option value="ML">Mali</option>
                                <option value="MT">Malta</option>
                                <option value="MH">Marshall Islands</option>
                                <option value="MQ">Martinique</option>
                                <option value="MR">Mauritania</option>
                                <option value="MU">Mauritius</option>
                                <option value="YT">Mayotte</option>
                                <option value="MX">Mexico</option>
                                <option value="FM">
                                  Micronesia, Federated States of
                                </option>
                                <option value="MD">Moldova, Republic of</option>
                                <option value="MC">Monaco</option>
                                <option value="MN">Mongolia</option>
                                <option value="ME">Montenegro</option>
                                <option value="MS">Montserrat</option>
                                <option value="MA">Morocco</option>
                                <option value="MZ">Mozambique</option>
                                <option value="MM">Myanmar (Burma)</option>
                                <option value="NA">Namibia</option>
                                <option value="NR">Nauru</option>
                                <option value="NP">Nepal</option>
                                <option value="NL">Netherlands</option>
                                <option value="AN">Netherlands Antilles</option>
                                <option value="NC">New Caledonia</option>
                                <option value="NZ">New Zealand</option>
                                <option value="NI">Nicaragua</option>
                                <option value="NE">Niger</option>
                                <option value="NG">Nigeria</option>
                                <option value="NU">Niue</option>
                                <option value="NF">Norfolk Island</option>
                                <option value="MP">
                                  Northern Mariana Islands
                                </option>
                                <option value="NO">Norway</option>
                                <option value="OM">Oman</option>
                                <option value="PK">Pakistan</option>
                                <option value="PW">Palau</option>
                                <option value="PA">Panama</option>
                                <option value="PG">Papua New Guinea</option>
                                <option value="PY">Paraguay</option>
                                <option value="PE">Peru</option>
                                <option value="PH">Philippines</option>
                                <option value="PN">Pitcairn</option>
                                <option value="PL">Poland</option>
                                <option value="PT">Portugal</option>
                                <option value="PR">Puerto Rico</option>
                                <option value="QA">Qatar</option>
                                <option value="RE">Reunion</option>
                                <option value="RO">Romania</option>
                                <option value="RU">Russian Federation</option>
                                <option value="RW">Rwanda</option>
                                <option value="KN">
                                  Saint Kitts and Nevis
                                </option>
                                <option value="LC">Saint Lucia</option>
                                <option value="VC">
                                  Saint Vincent and the Grenadines
                                </option>
                                <option value="WS">Samoa</option>
                                <option value="SM">San Marino</option>
                                <option value="ST">
                                  Sao Tome and Principe
                                </option>
                                <option value="SA">Saudi Arabia</option>
                                <option value="SN">Senegal</option>
                                <option value="RS">Serbia</option>
                                <option value="SC">Seychelles</option>
                                <option value="SL">Sierra Leone</option>
                                <option value="SG">Singapore</option>
                                <option value="SK">
                                  Slovakia (Slovak Republic)
                                </option>
                                <option value="SI">Slovenia</option>
                                <option value="SB">Solomon Islands</option>
                                <option value="SO">Somalia</option>
                                <option value="ZA">South Africa</option>
                                <option value="GS">
                                  South Georgia and the South Sandwich Islands
                                </option>
                                <option value="SS">South Sudan</option>
                                <option value="ES">Spain</option>
                                <option value="LK">Sri Lanka</option>
                                <option value="SH">St. Helena</option>
                                <option value="PM">
                                  St. Pierre and Miquelon
                                </option>
                                <option value="SD">Sudan</option>
                                <option value="SR">Suriname</option>
                                <option value="SJ">
                                  Svalbard and Jan Mayen Islands
                                </option>
                                <option value="SZ">Swaziland</option>
                                <option value="SE">Sweden</option>
                                <option value="CH">Switzerland</option>
                                <option value="SY">Syrian Arab Republic</option>
                                <option value="TW">Taiwan</option>
                                <option value="TJ">Tajikistan</option>
                                <option value="TZ">
                                  Tanzania, United Republic of
                                </option>
                                <option value="TH">Thailand</option>
                                <option value="TG">Togo</option>
                                <option value="TK">Tokelau</option>
                                <option value="TO">Tonga</option>
                                <option value="TT">Trinidad and Tobago</option>
                                <option value="TN">Tunisia</option>
                                <option value="TM">Turkmenistan</option>
                                <option value="TC">
                                  Turks and Caicos Islands
                                </option>
                                <option value="TV">Tuvalu</option>
                                <option value="TR">Türkiye</option>
                                <option value="UM">U.S. Minor Islands</option>
                                <option value="UG">Uganda</option>
                                <option value="UA">Ukraine</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="GB">United Kingdom</option>
                                <option value="UY">Uruguay</option>
                                <option value="UZ">Uzbekistan</option>
                                <option value="VU">Vanuatu</option>
                                <option value="VE">Venezuela</option>
                                <option value="VN">Vietnam</option>
                                <option value="VG">
                                  Virgin Islands (British)
                                </option>
                                <option value="VI">
                                  Virgin Islands (U.S.)
                                </option>
                                <option value="WF">
                                  Wallis and Futuna Islands
                                </option>
                                <option value="EH">Western Sahara</option>
                                <option value="YE">Yemen</option>
                                <option value="ZM">Zambia</option>
                                <option value="ZW">Zimbabwe</option>
                              </select>
                              <div className=" pointer-events-none absolute inset-0  flex w-full items-center justify-between">
                                <span className="ml-3 w-[calc(100%-64px)] text-base">
                                  {country}
                                </span>
                                <span className="mx-3 text-[24px]">
                                  <HiChevronDown />
                                </span>
                              </div>
                            </div>
                            <fieldset
                              className={`pointer-events-none absolute left-0 bottom-0 m-0 h-full  w-full rounded-lg border border-solid  ${
                                isTouchedRegion
                                  ? "border-[#757575]"
                                  : "border-[#dcdcdc]"
                              }  p-0  `}
                            >
                              <legend
                                className={`invisible ml-[7px] h-[1px] px-1 py-0 text-[12px] transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)]`}
                              >
                                Country/Reguion*
                              </legend>
                            </fieldset>
                          </div>
                        </div>

                        {/* Province */}
                        <div className="relative min-h-[84px] w-full overflow-visible">
                          {/* input layout */}

                          <div className="relative flex h-[56px] w-full flex-col items-center justify-start rounded-lg border-orange-600 bg-transparent bg-red-100 ">
                            <input
                              {...register("province]", {
                                required: true,
                                minLength: 2,
                                maxLength: 30,
                              })}
                              onFocus={() => setIsTouchedProvince(true)}
                              onBlur={() => {
                                if (isDirty) setIsTouchedProvince(true);
                                else setIsTouchedProvince(false);
                              }}
                              className="m-0 flex h-[56px] w-full rounded-lg   border-0 border-[#111111] py-4  px-3  text-base
                            leading-6 text-[#504141] outline-0 
                            "
                            />
                            {errors.province && (
                              <p className="text-[14px] text-[#d43f21]">
                                Please enter a valid province
                              </p>
                            )}

                            <label
                              className={`absolute left-2 top-4 scale-100 px-1 text-base leading-6 transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)] ${
                                isTouchedProvince
                                  ? "origin-center -translate-y-[28px] -translate-x-[10px] scale-75 text-[#131313] "
                                  : "text-[#979494]"
                              } pointer-events-none`}
                            >
                              <span
                                className={`${
                                  errors.province ? "text-[#d43f21]" : ""
                                }`}
                              >
                                Province
                              </span>
                            </label>
                            <fieldset
                              className={`pointer-events-none absolute left-0 bottom-0 m-0 h-full  w-full rounded-lg border border-solid  ${
                                isTouchedProvince
                                  ? "border-[#757575]"
                                  : "border-[#dcdcdc]"
                              }  p-0 ${
                                errors.province ? "border-[#d43f21]" : ""
                              }`}
                            >
                              <legend
                                className={`invisible ml-[7px] h-[1px] px-1 py-0 text-[12px] transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)]
                              active:origin-center active:-translate-y-[32px] active:scale-75 active:text-[#d43f21]
                              ${!isTouchedProvince ? "hidden" : "block"} 
                              `}
                              >
                                Province
                              </legend>
                            </fieldset>
                            {/* <input type="submit" /> */}
                          </div>
                        </div>

                        {/* City */}
                        <div className="relative min-h-[84px] w-full overflow-visible">
                          {/* input layout */}

                          <div className="relative flex h-[56px] w-full flex-col items-center justify-start rounded-lg border-orange-600 bg-transparent bg-red-100 ">
                            <input
                              {...register("city", {
                                required: true,
                                minLength: 2,
                                maxLength: 30,
                              })}
                              onFocus={() => setIsTouchedCity(true)}
                              onBlur={() => {
                                if (isDirty) setIsTouchedCity(true);
                                else setIsTouchedCity(false);
                              }}
                              className="m-0 flex h-[56px] w-full rounded-lg   border-0 border-[#111111] py-4  px-3  text-base
                            leading-6 text-[#504141] outline-0 
                            "
                            />
                            {errors.city && (
                              <p className="text-[14px] text-[#d43f21]">
                                Please enter a valid city
                              </p>
                            )}

                            <label
                              className={`absolute left-2 top-4 scale-100 px-1 text-base leading-6 transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)] ${
                                isTouchedCity
                                  ? "origin-center -translate-y-[28px] -translate-x-[10px] scale-75 text-[#131313] "
                                  : "text-[#979494]"
                              } pointer-events-none`}
                            >
                              <span
                                className={`${
                                  errors.city ? "text-[#d43f21]" : ""
                                }`}
                              >
                                City
                              </span>
                            </label>
                            <fieldset
                              className={`pointer-events-none absolute left-0 bottom-0 m-0 h-full  w-full rounded-lg border border-solid  ${
                                isTouchedCity
                                  ? "border-[#757575]"
                                  : "border-[#dcdcdc]"
                              }  p-0 ${errors.city ? "border-[#d43f21]" : ""}`}
                            >
                              <legend
                                className={`invisible ml-[7px] h-[1px] px-1 py-0 text-[12px] transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)]
                              active:origin-center active:-translate-y-[32px] active:scale-75 active:text-[#d43f21]
                              ${!isTouchedCity ? "hidden" : "block"} 
                              `}
                              >
                                City
                              </legend>
                            </fieldset>
                            {/* <input type="submit" /> */}
                          </div>
                        </div>

                        {/* PoseCode */}
                        <div className="relative min-h-[84px] w-full overflow-visible">
                          {/* input layout */}

                          <div className="relative flex h-[56px] w-full flex-col items-center justify-start rounded-lg border-orange-600 bg-transparent bg-red-100 ">
                            <input
                              {...register("postcode", {
                                required: true,
                                minLength: 3,
                                maxLength: 5,
                              })}
                              onFocus={() => setIsTouchedPostCode(true)}
                              onBlur={() => {
                                if (isDirty) setIsTouchedPostCode(true);
                                else setIsTouchedPostCode(false);
                              }}
                              className="m-0 flex h-[56px] w-full rounded-lg   border-0 border-[#111111] py-4  px-3  text-base 
                            leading-6 text-[#504141] outline-0 
                            "
                            />
                            {errors.postcode && (
                              <p className="text-[14px] text-[#d43f21]">
                                Please enter a valid post code
                              </p>
                            )}

                            <label
                              className={`absolute left-2 top-4 scale-100 px-1 text-base leading-6 transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)] ${
                                isTouchedPostCode
                                  ? "origin-center -translate-y-[28px] -translate-x-[10px] scale-75 text-[#131313] "
                                  : "text-[#979494]"
                              } pointer-events-none`}
                            >
                              <span
                                className={`${
                                  errors.postcode && "text-[#d43f21]"
                                }`}
                              >
                                Postcode*
                              </span>
                            </label>
                            <fieldset
                              className={`pointer-events-none absolute left-0 bottom-0 m-0 h-full  w-full rounded-lg border border-solid  ${
                                isTouchedPostCode
                                  ? "border-[#757575]"
                                  : "border-[#dcdcdc]"
                              }  p-0 ${
                                errors.postcode ? "border-[#d43f21]" : ""
                              }`}
                            >
                              <legend
                                className={`invisible ml-[7px] h-[1px] px-1 py-0 text-[12px] transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)]
                              active:origin-center active:-translate-y-[32px] active:scale-75 active:text-[#d43f21]
                              ${!isTouchedPostCode ? "hidden" : "block"} 
                              `}
                              >
                                Postcode*
                              </legend>
                            </fieldset>
                          </div>
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
