import { blackfriday_full, blackfriday_s, blackfriday_m } from "../../assets";
import { HiArrowRight } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
const BlackFriday = () => {
  return (
    <section className="bg-red-100 min-h-[30vh] relative">
      <div className="object-contain">
        <picture>
          <source
            media="(min-width: 960px)"
            srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/promo-fw22-blackfriday-firstaccess-lastday-large-mh-d_tcm221-965606.jpg"
          />
          <source
            media="(min-width: 600px)"
            srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_960,w_960/enUS/Images/promo-fw22-blackfriday-firstaccess-lastday-large-mh-t_tcm221-965605.jpg"
          />
          <source srcSet="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_600,w_600/enUS/Images/promo-fw22-blackfriday-firstaccess-lastday-large-mh-m_tcm221-965604.jpg" />
          <img
            id="tcm:221-965607"
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920/enUS/Images/promo-fw22-blackfriday-firstaccess-lastday-large-mh-d_tcm221-965606.jpg"
            data-inject_ssr_performance_instrument=""
            alt="sa"
          />
        </picture>
        {/* <img src={blackfriday_full} alt="" /> */}
      </div>
      <div className="absolute left-0 bottom-0 lg:right-0 mx-2  max-w-7xl w-full lg:min-w-7xl py-10 h-auto lg:h-full flex text-white lg:mx-auto">
        <div className="h-auto md:basis-1/2 flex flex-col justify-end screen960:justify-center screen960:items-start pl-2">
          <div className="max-w-sm">
            Welcome back! Start your holiday journey now with our best deals of
            the year, just for you
          </div>
          <div>
            <div className="block justify-start my-2  text-black w-full">
              <NavLink
                to="/products"
                className="text-xs font-semibold  bg-slate-100 h-[50px]  items-center inline-flex space-x-1 px-2"
              >
                {" "}
                <span className=" font-bold tracking-widest">SHOP WOMEN </span>
                <span className="">
                  <HiArrowRight className="text-xl"></HiArrowRight>
                </span>
              </NavLink>
            </div>
            <div className="block justify-start my-2  text-black w-full">
              <NavLink
                to="/products"
                className="text-xs font-semibold  bg-slate-100 h-[50px]  items-center inline-flex space-x-1 px-2"
              >
                {" "}
                <span className="font-bold tracking-widest">SHOP MEN </span>
                <span className="text-xl">
                  <HiArrowRight></HiArrowRight>
                </span>
              </NavLink>
            </div>
            <div className="block justify-start my-2  text-black w-full">
              <NavLink
                to="/products"
                className="text-xs font-semibold  bg-slate-100 h-[50px]  items-center inline-flex space-x-1 px-2 "
              >
                {" "}
                <span className=" font-bold tracking-widest">SHOP KIDS </span>
                <span className="">
                  <HiArrowRight className="text-xl"></HiArrowRight>
                </span>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="basis-1/2"></div>
      </div>
    </section>
  );
};

export default BlackFriday;
