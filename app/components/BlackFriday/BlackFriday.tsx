import { blackfriday_full, blackfriday_s, blackfriday_m } from "@/public";
import { HiArrowRight } from "react-icons/hi2";
import Link from "next/link";
const BlackFriday = () => {
  return (
    <section className="relative min-h-[30vh] bg-white">
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
      <div className="lg:min-w-7xl absolute left-0 bottom-0 mx-2  flex h-auto w-full max-w-7xl py-10 text-white lg:right-0 lg:mx-auto lg:h-full">
        <div className="flex h-auto flex-col justify-end pl-2 screen960:items-start screen960:justify-center md:basis-1/2">
          <div className="max-w-sm">
            Welcome back! Start your holiday journey now with our best deals of
            the year, just for you
          </div>
          <div>
            <div className="my-2 block w-full  justify-start text-black">
              <Link
                href="products"
                className="inline-flex h-[50px]  items-center space-x-1  bg-slate-100 px-2 text-xs font-semibold"
              >
                {" "}
                <span className=" font-bold tracking-widest">SHOP WOMEN </span>
                <span className="">
                  <HiArrowRight className="text-xl"></HiArrowRight>
                </span>
              </Link>
            </div>
            <div className="my-2 block w-full  justify-start text-black">
              <Link
                href="products"
                className="inline-flex h-[50px]  items-center space-x-1  bg-slate-100 px-2 text-xs font-semibold"
              >
                {" "}
                <span className="font-bold tracking-widest">SHOP MEN </span>
                <span className="text-xl">
                  <HiArrowRight></HiArrowRight>
                </span>
              </Link>
            </div>
            <div className="my-2 block w-full  justify-start text-black">
              <Link
                href="products"
                className="inline-flex h-[50px]  items-center space-x-1  bg-slate-100 px-2 text-xs font-semibold "
              >
                {" "}
                <span className=" font-bold tracking-widest">SHOP KIDS </span>
                <span className="">
                  <HiArrowRight className="text-xl"></HiArrowRight>
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="basis-1/2"></div>
      </div>
    </section>
  );
};

export default BlackFriday;
