import { HiOutlineChevronDown } from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";
const Content = () => {
  const [translateX, setTranslateX] = useState(0);

  const [isDraggin, setIsDraggin] = useState(false);
  const [origX, setOrigX] = useState(0);
  const [translateXX, setTranslateXX] = useState(0);
  const [lastTranslateX, setLastTranslateX] = useState(0);

  const handleMouseDown = ({ clientX }) => {
    console.log("dasdsad");
    // window.addEventListener("mousemove", this.handleMouseMove);
    // window.addEventListener("mouseup", this.handleMouseUp);
    setIsDraggin(true);
    setOrigX(clientX);
  };
  const handleMouseup = ({ clientX }) => {
    window.removeEventListener("mousemove", this.handleMouseMove);
    window.removeEventListener("mouseup", this.handleMouseUp);
    setTranslateXX((prev) => clientX - prev.origX + prev.lastTranslateX);
  };
  const handleMouseMove = ({ clientX }) => {
    if (!isDraggin) return;
    setIsDraggin(false);
    setOrigX(clientX);
    setLastTranslateX(translateXX);
  };

  return (
    // content
    <div className="w-full min-h-screen h-full min-w-0">
      {/* gallery-section */}
      <div className="w-full relative">
        {/* back/ home/ running/ shoes */}
        {/* image */}
        <div className=" w-full ">
          {/* imgge grid */}
          <section className=" w-full relative select-none  text-center block">
            {/* image gird container  */}
            <div className="grid gap-[1px]  grid-cols-1 screen960:grid-cols-2 overflow-hidden ">
              <div className=" col-span-2 relative">
                <div className="relative pt-[100%]">
                  <div className="absolute inset-0 w-full h-full bg-red-100 cursor-pointer flex justify-center screen960:max-w-[calc(100vw-300px)] mx-auto">
                    <img
                      src="https://assets.adidas.com/images/w_600,f_auto,q_auto/0e8b4b879e4447268c8fae9801521e61_9366/Ultraboost_22_Shoes_Beige_GX6643_01_standard.jpg"
                      sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      srcset="https://assets.adidas.com/images/h_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e8b4b879e4447268c8fae9801521e61_9366/Ultraboost_22_Shoes_Beige_GX6643_01_standard.jpg 320w, https://assets.adidas.com/images/h_420,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e8b4b879e4447268c8fae9801521e61_9366/Ultraboost_22_Shoes_Beige_GX6643_01_standard.jpg 420w, https://assets.adidas.com/images/h_600,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e8b4b879e4447268c8fae9801521e61_9366/Ultraboost_22_Shoes_Beige_GX6643_01_standard.jpg 600w, https://assets.adidas.com/images/h_640,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e8b4b879e4447268c8fae9801521e61_9366/Ultraboost_22_Shoes_Beige_GX6643_01_standard.jpg 640w, https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e8b4b879e4447268c8fae9801521e61_9366/Ultraboost_22_Shoes_Beige_GX6643_01_standard.jpg 840w"
                      alt="Beige Ultraboost 22 Shoes LTI71"
                      data-inject_ssr_performance_instrument=""
                    />
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative pt-[100%]">
                  <div className="absolute top-0 w-full h-full bg-red-100 cursor-pointer flex justify-center">
                    <img
                      className="absolute top-0 left-0 object-cover max-w-full max-h-full w-full h-full"
                      sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      srcSet="https://assets.adidas.com/videos/h_320,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 320w, https://assets.adidas.com/videos/h_420,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 420w, https://assets.adidas.com/videos/h_600,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 600w, https://assets.adidas.com/videos/h_640,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 640w, https://assets.adidas.com/videos/h_840,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 840w"
                      src="https://assets.adidas.com/videos/w_600,f_auto,q_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg"
                      alt="Black Ultraboost 22 Shoes LTI71"
                    />
                    <div className="opacity-100 cursor-pointer w-full h-full absolute top-0 left-0 object-center">
                      <video
                        className="object-cover max-w-full max-h-full w-full h-full align-middle  "
                        src="https://assets.adidas.com/videos/q_auto,f_auto,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.mp4"
                        loop
                        // isVideoStopped ? 'autoPlay':''
                        autoPlay
                        playsInline
                        muted
                      ></video>
                    </div>
                    <button className="opacity-100 absolute flex justify-center items-center w-[60px] h-[60px] top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4  text-black">
                      {/* <span>dsdsadasdasd</span> */}
                    </button>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative pt-[100%]">
                  <div className="absolute top-0 w-full h-full bg-red-100 cursor-pointer flex justify-center">
                    <img
                      className="absolute top-0 left-0 object-cover max-w-full max-h-full w-full h-full"
                      sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      srcSet="https://assets.adidas.com/videos/h_320,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 320w, https://assets.adidas.com/videos/h_420,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 420w, https://assets.adidas.com/videos/h_600,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 600w, https://assets.adidas.com/videos/h_640,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 640w, https://assets.adidas.com/videos/h_840,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 840w"
                      src="https://assets.adidas.com/videos/w_600,f_auto,q_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg"
                      alt="Black Ultraboost 22 Shoes LTI71"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative pt-[100%]">
                  <div className="absolute top-0 w-full h-full bg-red-100 cursor-pointer flex justify-center">
                    <img
                      className="absolute top-0 left-0 object-cover max-w-full max-h-full w-full h-full"
                      src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg"
                      sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      srcSet="https://assets.adidas.com/images/h_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 320w, https://assets.adidas.com/images/h_420,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 420w, https://assets.adidas.com/images/h_600,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 600w, https://assets.adidas.com/images/h_640,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 640w, https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 840w"
                      alt="Black Ultraboost 22 Shoes LTI71"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative pt-[100%]">
                  <div className="absolute top-0 w-full h-full bg-red-100 cursor-pointer flex justify-center">
                    <img
                      className="absolute top-0 left-0 object-cover max-w-full max-h-full w-full h-full"
                      src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg"
                      sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      srcSet="https://assets.adidas.com/images/h_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 320w, https://assets.adidas.com/images/h_420,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 420w, https://assets.adidas.com/images/h_600,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 600w, https://assets.adidas.com/images/h_640,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 640w, https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 840w"
                      alt="Black Ultraboost 22 Shoes LTI71"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative pt-[100%]">
                  <div className="absolute top-0 w-full h-full bg-red-100 cursor-pointer flex justify-center">
                    <img
                      className="absolute top-0 left-0 object-cover max-w-full max-h-full w-full h-full"
                      src="https://assets.adidas.com/images/w_600,f_auto,q_auto/44c4714624e340a28ddaae9800d43749_9366/Ultraboost_22_Shoes_Black_HQ0965_02_standard.jpg"
                      sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      srcSet="https://assets.adidas.com/images/h_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/44c4714624e340a28ddaae9800d43749_9366/Ultraboost_22_Shoes_Black_HQ0965_02_standard.jpg 320w, https://assets.adidas.com/images/h_420,f_auto,q_auto,fl_lossy,c_fill,g_auto/44c4714624e340a28ddaae9800d43749_9366/Ultraboost_22_Shoes_Black_HQ0965_02_standard.jpg 420w, https://assets.adidas.com/images/h_600,f_auto,q_auto,fl_lossy,c_fill,g_auto/44c4714624e340a28ddaae9800d43749_9366/Ultraboost_22_Shoes_Black_HQ0965_02_standard.jpg 600w, https://assets.adidas.com/images/h_640,f_auto,q_auto,fl_lossy,c_fill,g_auto/44c4714624e340a28ddaae9800d43749_9366/Ultraboost_22_Shoes_Black_HQ0965_02_standard.jpg 640w, https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/44c4714624e340a28ddaae9800d43749_9366/Ultraboost_22_Shoes_Black_HQ0965_02_standard.jpg 840w"
                      alt="Black Ultraboost 22 Shoes LTI71"
                    />
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="relative pt-[100%]">
                  <div className="absolute top-0 w-full h-full bg-red-100 cursor-pointer flex justify-center">
                    <img
                      className="absolute top-0 left-0 object-cover max-w-full max-h-full w-full h-full"
                      src="https://assets.adidas.com/images/w_600,f_auto,q_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg"
                      sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      srcSet="https://assets.adidas.com/images/h_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 320w, https://assets.adidas.com/images/h_420,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 420w, https://assets.adidas.com/images/h_600,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 600w, https://assets.adidas.com/images/h_640,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 640w, https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c613f6c47e254437aa6cae9800d43d63_9366/Ultraboost_22_Shoes_Black_HQ0965_03_standard.jpg 840w"
                      alt="Black Ultraboost 22 Shoes LTI71"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* show more */}
            <button className=" bg-white border-2 border-black border-solid  h-[50px] px-2  gap-x-2 w-[150px]  flex ustify-center items-center mx-auto">
              <span className="uppercase font-semibold tracking-wide text-ellipsis overflow-hidden flex-auto ">
                Show More
              </span>
              <span>
                <HiOutlineChevronDown />
              </span>
            </button>
            <div></div>
          </section>

          {/* sticky products available */}
          {/* none or flex  */}
          {/* becarefull with pointer-events-none */}
          <div
            className="flex  w-full justify-center sticky mb-[40px] pointer-events-none bottom-12 z-[100000000] "
            onClick={() => {
              console.log("belowsection");
            }}
          >
            {/* sticky container */}
            <div className="flex px-[20px]  flex-col  max-w-full ">
              {/* background container */}
              <div className="p-[10px] bg-white">
                <div className="font-bold ml-3">4 colors available </div>
                <nav
                  className="overflow-hidden flex max-w-full relative mt-[10px] "
                  onClick={() => {
                    console.log("AAonclick");
                  }}
                >
                  <div className="fade absolute left-0 w-[60px] h-full z-[1]"></div>
                  <div className="fade absolute right-0 w-[60px] h-full z-[1]"></div>

                  <div
                    className={`inline-flex h-full `}
                    onClick={() => {
                      console.log("onclick");
                    }}
                    onMouseDown={handleMouseDown}
                    x={translateXX}
                    isDraggin={isDraggin}
                    style={{ transform: `translateX(${translateXX}px)` }}
                  >
                    <a
                      href="#"
                      className="ml-[10px] mr-[10px] h-[60px] w-[60px] bg-[#eceff1] relative "
                    >
                      <img
                        src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/Ultra_4DFWD_Shoes_Black_GX6632_01_standard.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="ml-[10px] mr-[10px] h-[60px] w-[60px] bg-[#eceff1] relative "
                    >
                      <img
                        src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/40eced1090dd4d88aee0ae84015a9e00_9366/Ultraboost_1.0_Arizona_State_White_HQ5877_01_standard.jpg"
                        alt="Product color: Cloud White / Team Maroon / Team Colleg Gold"
                      />
                    </a>
                    <a
                      href="#"
                      className="ml-[10px] mr-[10px] h-[60px] w-[60px] bg-[#eceff1] relative "
                    >
                      <img
                        src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/Ultra_4DFWD_Shoes_Black_GX6632_01_standard.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="ml-[10px] mr-[10px] h-[60px] w-[60px] bg-[#eceff1] relative "
                    >
                      <img
                        src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/ead7a6967e654e28a311aee800f4812a_9366/Ultraboost_1.0_DNA_Shoes_White_GY9134_01_standard.jpg"
                        alt="Product color: Cloud White / Cloud White / Green"
                      />
                    </a>
                    <a
                      href="#"
                      className="ml-[10px] mr-[10px] h-[60px] w-[60px] bg-[#eceff1] relative "
                    >
                      <img
                        src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/Ultra_4DFWD_Shoes_Black_GX6632_01_standard.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="ml-[10px] mr-[10px] h-[60px] w-[60px] bg-[#eceff1] relative "
                    >
                      <img
                        src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/Ultra_4DFWD_Shoes_Black_GX6632_01_standard.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="ml-[10px] mr-[10px] h-[60px] w-[60px] bg-[#eceff1] relative "
                    >
                      <img
                        src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/Ultra_4DFWD_Shoes_Black_GX6632_01_standard.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="ml-[10px] mr-[10px] h-[60px] w-[60px] bg-[#eceff1] relative "
                    >
                      <img
                        src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/Ultra_4DFWD_Shoes_Black_GX6632_01_standard.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="ml-[10px] mr-[10px] h-[60px] w-[60px] bg-[#eceff1] relative "
                    >
                      <img
                        src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/Ultra_4DFWD_Shoes_Black_GX6632_01_standard.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="ml-[10px] mr-[10px] h-[60px] w-[60px] bg-[#eceff1] relative "
                    >
                      <img
                        src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/Ultra_4DFWD_Shoes_Black_GX6632_01_standard.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="ml-[10px] mr-[10px] h-[60px] w-[60px] bg-[#eceff1] relative "
                    >
                      <img
                        src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/Ultra_4DFWD_Shoes_Black_GX6632_01_standard.jpg"
                        alt=""
                      />
                    </a>
                    <a
                      href="#"
                      className="ml-[10px] mr-[10px] h-[60px] w-[60px] bg-[#eceff1] relative z-10 flex items-center justify-center   "
                    >
                      <img
                        className=" h-full w-full "
                        src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/Ultra_4DFWD_Shoes_Black_GX6632_01_standard.jpg"
                        alt="dsadsad"
                      />
                      <span className="before:content-[''] before:w-full before:h-[4px] before:absolute before:bottom-0 before:left-0 before:bg-black h-full w-full"></span>
                    </a>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* description view : Running sopportive dsada */}
        </div>
      </div>
      {/* fixed content : revfiews description */}
    </div>
  );
};

export default Content;
