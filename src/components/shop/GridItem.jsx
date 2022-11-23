import React from "react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const GridItem = () => {
  return (
    <div>
      <div className="relative">
        {/* Product card container */}
        <div className="w-full p-[2px] sm:p-1 m-[2px]">
          <div className="w-full cursor-pointer bg-white relative text-black text-sm font-normal">
            {/* Assets ( images) */}
            <div className="relative pb-[100%]">
              <a href="#" className="absolute inset-0">
                <img
                  data-auto-id="image"
                  title="Adilette Comfort Slides"
                  src="https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg"
                  srcset="https://assets.adidas.com/images/w_178,h_178,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 178w,
https://assets.adidas.com/images/w_186,h_186,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 186w,
https://assets.adidas.com/images/w_205,h_205,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 205w,
https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 303w,
https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 383w,
https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 766w"
                  sizes="(min-width: 960px) 25vw, (min-width: 600px) 33vw, 49vw"
                  loading="lazy"
                  alt="Yoga Black Adilette Comfort Slides"
                  class="img_with_fallback___2aHBu glass-product-card__image performance-item"
                  data-inject_ssr_performance_instrument=""
                />
              </a>
              <div className="absolute right-5 top-5">
                <button>
                  {/* <FaHeart className=""></FaHeart> */}
                  <AiOutlineHeart className="text-[16px]"/>
                </button>
              </div>
              <a href="#" className=" absolute bottom-0">
                <div className="font-semibold ml-1"><span>-40%</span></div>
                <div className="flex mt-[5px] py-[2px] px-[5px] bg-white">
                  <div className="mr-[4px] text-gray-400 leading-4 line-through">
                    $35
                  </div>
                  <div className="leading-4 text-red-600">
                    $21
                  </div>
                </div>
              </a>
            </div>
            <a href="#">
              {/* Product-card _ details  Adjust min high later */}
              <div className="p-[10px] min-h-[75px] ">
                <p>Adilette Comfort Slides</p>
                <p className="text-slate-700">Yoga</p>
                <p className="text-slate-700">
                  <span>2 colors</span>
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
