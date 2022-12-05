import React from "react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";


const GridItem = ({data}) => {

  return (
    <div className="screeb960:hover hover:border-[1px] hover:border-solid hover:border-black">
      <div className="relative">
        {/* Product card container */}
        <div className="m-[2px] w-full p-[2px] sm:p-1">
          <div className="relative w-full cursor-pointer bg-white text-sm font-normal text-black">
            {/* Assets ( images) */}
            <div className="relative pb-[100%]">
              <Link to={data._id.$oid}  className="absolute inset-0">
                <img
                  data-auto-id="image"
                  title="Adilette Comfort Slides"
                  // src="https://assets.adidas.com/images/w_600,f_auto,q_auto/dee464faf8db400e9980ae92003f95dc_9366/4CMTE_Track_Top_Black_HM6235_21_model.jpg"
                  src={data.imgs[0]}
                  //                   srcSet="https://assets.adidas.com/images/w_178,h_178,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 178w,
                  // https://assets.adidas.com/images/w_186,h_186,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 186w,
                  // https://assets.adidas.com/images/w_205,h_205,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 205w,
                  // https://assets.adidas.com/images/w_303,h_303,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 303w,
                  // https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 383w,
                  // https://assets.adidas.com/images/w_766,h_766,f_auto,q_auto,fl_lossy,c_fill,g_auto/30378ca9761a43c78c37ad6e00cba5e6_9366/adilette-comfort-slides.jpg 766w"
                  // sizes="(min-width: 960px) 25vw, (min-width: 600px) 33vw, 49vw"
                  alt="Yoga Black Adilette Comfort Slides"
                />
              </Link>
              <div className="absolute right-5 top-5">
                <button>
                  {/* <FaHeart className=""></FaHeart> */}
                  <AiOutlineHeart className="text-[16px]" />
                </button>
              </div>
              <Link to={data._id.$oid} className=" absolute bottom-0 left-1 ">
                <div className="ml-1 font-semibold">
                  <span>-40%</span>
                </div>
                <div className="mt-[5px] flex bg-white py-[2px] px-[5px]">
                  <div className="mr-[4px] leading-4 text-gray-400 line-through">
                    $35
                  </div>
                  <div className="leading-4 text-red-600">{data.price}</div>
                </div>
              </Link>
            </div>
            <Link to={data._id.$oid}>
              {/* Product-card _ details  Adjust min high later */}
              <div className="min-h-[75px] p-[10px] ">
                <p>Adilette Comfort Slides</p>
                <p className="text-slate-700">Yoga</p>
                <p className="text-slate-700">
                  <span>{data.colors.length} colors</span>
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;
