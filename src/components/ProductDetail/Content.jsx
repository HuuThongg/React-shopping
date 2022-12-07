import { HiOutlineChevronDown } from "react-icons/hi2";
import { useState, useRef, useEffect } from "react";


const Content = ({ product }) => {
  const [isDragging, setIsDraggin] = useState(false);
  const [origX, setOrigX] = useState(0);
  const [translateXX, setTranslateXX] = useState(0);
  const [lastTranslateX, setLastTranslateX] = useState(0);

  const handleMouseDown = ({ clientX }) => {
    console.log("mouse down ");
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseup);
    setIsDraggin(true);
    setOrigX(clientX);
  };
  const handleMouseup = ({ clientX }) => {
    console.log("mouse up");
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", () => {
      console.log("dasd");
    });
    setTranslateXX(clientX - origX + lastTranslateX);
  };
  const handleMouseMove = ({ clientX }) => {
    console.log("mouse move");
    if (!isDragging) return;
    setIsDraggin(false);
    setOrigX(clientX);
    setLastTranslateX(translateXX);
  };
  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log(e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log(e.target.innerHTML);
  };
  return (
    // content
    <div className="h-full min-h-screen w-full min-w-0">
      {/* gallery-section */}
      <div className="relative w-full">
        {/* back/ home/ running/ shoes */}
        {/* image */}
        <div className=" w-full ">
          {/* imgge grid */}
          <section className=" relative block w-full  select-none text-center">
            {/* image gird container  */}
            <div className="grid grid-cols-1  gap-[1px] overflow-hidden screen960:grid-cols-2 ">
              <div className=" relative col-span-2">
                <div className="relative pt-[100%]">
                  <div className="absolute inset-0 mx-auto flex h-full w-full cursor-pointer justify-center bg-red-100 screen960:max-w-[calc(100vw-300px)]">
                    <img
                      src={product.imgs[0]}
                      // src="https://assets.adidas.com/images/w_600,f_auto,q_auto/0e8b4b879e4447268c8fae9801521e61_9366/Ultraboost_22_Shoes_Beige_GX6643_01_standard.jpg"
                      // sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                      // srcSet="https://assets.adidas.com/images/h_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e8b4b879e4447268c8fae9801521e61_9366/Ultraboost_22_Shoes_Beige_GX6643_01_standard.jpg 320w, https://assets.adidas.com/images/h_420,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e8b4b879e4447268c8fae9801521e61_9366/Ultraboost_22_Shoes_Beige_GX6643_01_standard.jpg 420w, https://assets.adidas.com/images/h_600,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e8b4b879e4447268c8fae9801521e61_9366/Ultraboost_22_Shoes_Beige_GX6643_01_standard.jpg 600w, https://assets.adidas.com/images/h_640,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e8b4b879e4447268c8fae9801521e61_9366/Ultraboost_22_Shoes_Beige_GX6643_01_standard.jpg 640w, https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0e8b4b879e4447268c8fae9801521e61_9366/Ultraboost_22_Shoes_Beige_GX6643_01_standard.jpg 840w"
                      // alt="Beige Ultraboost 22 Shoes LTI71"
                      // data-inject_ssr_performance_instrument=""
                    />
                  </div>
                </div>
              </div>
              {product.imgs.map((img) => (
                <div key={Math.random().toString()} className="relative">
                  <div className="relative pt-[100%]">
                    <div className="absolute top-0 flex h-full w-full cursor-pointer justify-center bg-red-100">
                      <img
                        className="absolute top-0 left-0 h-full max-h-full w-full max-w-full object-cover"
                        src={img}
                        // sizes="(max-width: 320px) 320px, (max-width: 420px) 420px, (max-width: 600px) 600px, (max-width: 640px) 640px, (max-width: 840px) 840px"
                        // srcSet="https://assets.adidas.com/videos/h_320,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 320w, https://assets.adidas.com/videos/h_420,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 420w, https://assets.adidas.com/videos/h_600,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 600w, https://assets.adidas.com/videos/h_640,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 640w, https://assets.adidas.com/videos/h_840,c_fill,f_auto,q_auto,fl_lossy,so_1,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg 840w"
                        // src="https://assets.adidas.com/videos/w_600,f_auto,q_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.jpg"
                        // alt="Black Ultraboost 22 Shoes LTI71"
                      />
                      {/* <div className="absolute top-0 left-0 h-full w-full cursor-pointer object-center opacity-100">
                        <video
                          className="h-full max-h-full w-full max-w-full object-cover align-middle  "
                          src="https://assets.adidas.com/videos/q_auto,f_auto,g_auto/2295df640df14692bb1caed900fc5a1f_d98c/Ultraboost_22_Shoes_Black_HQ0965_video.mp4"
                          loop
                          // isVideoStopped ? 'autoPlay':''
                          autoPlay
                          playsInline
                          muted
                        ></video>
                      </div> */}
                      <button className="absolute top-[50%] left-[50%] flex h-[60px] w-[60px] -translate-x-2/4 -translate-y-2/4 items-center justify-center text-black  opacity-100">
                        {/* <span>dsdsadasdasd</span> */}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* show more */}
            <button className=" ustify-center mx-auto flex h-[50px]  w-[150px] items-center  gap-x-2 border-2  border-solid border-black bg-white px-2">
              <span className="flex-auto overflow-hidden text-ellipsis font-semibold uppercase tracking-wide ">
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

          {product.colors?.length > 0 &&
          
            <div className="sticky  bottom-12 z-[100000000] mb-[40px] flex  w-full justify-center ">
              {/* sticky container */}
              <div className="flex max-w-full  flex-col  px-[20px] ">
                {/* background container */}
                <div className="bg-white p-[10px]">
                  <div className="ml-3 font-bold">
                    {product.colors?.length } colors available
                  </div>
                  <nav className="relative mt-[10px] flex max-w-full overflow-hidden ">
                    {/* <div className="fade absolute left-0 z-[1] h-full w-[60px]"></div>
                      <div className="fade absolute right-0 z-[1] h-full w-[60px]"></div> */}

                    <div
                      className={`inline-flex h-full `}
                      // onDragStart={(e) => dragStart(e, index)}
                      // onDragEnter={(e) => dragEnter(e, index)}
                      // onMouseDown={handleMouseDown}
                      style={{ transform: `translateX(${translateXX}px)` }}
                    >
                      {product.colors.map((color) => (
                        <a
                          key={Math.random()}
                          href="#"
                          className="relative ml-[10px] mr-[10px] h-[60px] w-[60px] bg-[#eceff1] "
                        >
                          <img src={color.img} alt="" />
                        </a>
                      ))}
                      {/* <a
                        href="#"
                        className="relative z-10 ml-[10px] mr-[10px] flex h-[60px] w-[60px] items-center justify-center bg-[#eceff1]   "
                      >
                        <img
                          className=" h-full w-full "
                          src="https://assets.adidas.com/images/w_320,f_auto,q_auto,fl_lossy,c_fill,g_auto/b9bd6dc6bbb84a8faa3dae8400320b3e_9366/Ultra_4DFWD_Shoes_Black_GX6632_01_standard.jpg"
                          alt="dsadsad"
                        />
                        <span className="h-full w-full before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-full before:bg-black before:content-['']"></span>
                      </a> */}
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          }
          {/* description view : Running sopportive dsada */}
        </div>
      </div>
      {/* fixed content : revfiews description */}
    </div>
  );
};

export default Content;

