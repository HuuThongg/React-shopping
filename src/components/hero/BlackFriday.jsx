import { blackfriday_full, blackfriday_s, blackfriday_m } from "../../assets";
import { HiArrowRight } from "react-icons/hi2";

const BlackFriday = () => {
  return (
    <section className="bg-red-100 min-h-[30vh] relative">
      <div className="object-contain">
        <picture>
          <source media="min-width:960px" srcSet={blackfriday_full}></source>
        </picture>
        {/* <div class="bg-[url('/img/hero-pattern.svg')]">
</div> */}
        <img src={blackfriday_full} alt="" />
      </div>
      <div className="absolute left-0 bottom-0 mx-2 lg:mx-auto max-w-7xl py-10 h-auto flex text-white">
        <div className="basis-1/2 flex flex-col ">
          <div>
            Welcome back! Start your holiday journey now with our best deals of
            the year, just for you
          </div>
          <div>
            <div className="block justify-start my-2  text-black w-full">
              <a
                href="#"
                className="text-xs font-semibold  bg-slate-100 h-[50px]  items-center inline-flex space-x-1 px-2"
              >
                {" "}
                <span className=" font-bold tracking-widest">SHOP WOMEN </span>
                <span className="">
                  <HiArrowRight className="text-xl"></HiArrowRight>
                </span>
              </a>
            </div>
            <div className="block justify-start my-2  text-black w-full">
              <a
                href="#"
                className="text-xs font-semibold  bg-slate-100 h-[50px]  items-center inline-flex space-x-1 px-2"
              >
                {" "}
                <span className="font-bold tracking-widest">SHOP MEN </span>
                <span className="text-xl">
                  <HiArrowRight></HiArrowRight>
                </span>
              </a>
            </div>
            <div className="block justify-start my-2  text-black w-full">
              <a
                href="#"
                className="text-xs font-semibold  bg-slate-100 h-[50px]  items-center inline-flex space-x-1 px-2 "
              >
                {" "}
                <span className=" font-bold tracking-widest">SHOP KIDS </span>
                <span className="">
                  <HiArrowRight className="text-xl"></HiArrowRight>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="basis-1/2"></div>
      </div>
    </section>
  );
};

export default BlackFriday;
