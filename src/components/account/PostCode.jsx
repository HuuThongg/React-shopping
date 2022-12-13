import { useForm } from "react-hook-form";
import { useState
 } from "react";
const PostCode = () => {
  const [isTouchedPostCode, setIsTouchedPostCode] = useState(false);
  return (
    <div className="relative min-h-[84px] w-full overflow-visible">
      {/* input layout */}

      <div className="relative flex h-[56px] w-full flex-col items-center justify-start rounded-lg border-orange-600 bg-transparent bg-red-100 ">
        <input
          {...register("postcode", {
            required: true,
            minLength: 4,
            maxLength: 5,
            valueAsNumber: true,
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
        {/* {errors.password?.type === "required" && (
                            <div className="block">
                              <span>Please enter a valid password</span>
                            </div>
                          )} */}

        <label
          className={`absolute left-2 top-4 scale-100 px-1 text-base leading-6 transition-all delay-[250] ease-[cubic-bezier(0.25,0.1,0.25,0.1)] ${
            isTouchedPostCode
              ? "origin-center -translate-y-[28px] -translate-x-[10px] scale-75 text-[#131313] "
              : "text-[#979494]"
          } `}
        >
          <span>Postcode*</span>
        </label>
        <fieldset
          className={`pointer-events-none absolute left-0 bottom-0 m-0 h-full  w-full rounded-lg border border-solid  ${
            isTouchedPostCode ? "border-[#757575]" : "border-[#dcdcdc]"
          }  p-0 ${
            !isValid && isTouchedPostCode && isDirty ? "border-[#d43f21]" : ""
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
        {/* <input type="submit" /> */}
      </div>
    </div>
  );
};

export default PostCode;
