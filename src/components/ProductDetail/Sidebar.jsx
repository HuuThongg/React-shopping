import { FaStar, FaRegStar } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";

const Sidebar = () => {
  return (
    // hidden
    <div className="hidden screen960:block  screen960:max-w-[320px]   screen1280:max-w-[430px] screen1440:max-w-[450px] grow-0 shrink-0 screen1280:basis-[430px] screen1440:basis-[450px] bg-red-400  max-w-[450px] basis-[450px] ">
      <div className=" bg-fuchsia-500 w-full h-0"></div>
      <div className="screen960:px-[20px] screen960:w-[320px] screen1280:px-[30px] screen1280:w-[430px] screen1440:px-[40px] screen1440:w-[450px] sticky top-0  m-h-vh pt-[30px] positionWebkit">
        {/* Product description  */}
        <div className="p-0 bg-white mb-0 flex flex-wrap ">
          {/* pre header */}
          <div>
            <div className="flex">
              <span className="inline-flex">Men's • Essentials</span>
            </div>
            <button>
              {/* star rating */}
              <div className="flex">
                {/* single start */}
                <div>
                  <FaStar />
                </div>
                <div>
                  <FaStar />
                </div>
                <div>
                  <FaStar />
                </div>
                <div>
                  <FaRegStar />
                </div>
                <div>
                  <FaRegStar />
                </div>
              </div>
              <span>247</span>
            </button>
          </div>
          {/* Name */}
          <h1>
            <span>Essentials Big Logo Tee</span>
          </h1>
          {/* Prduct price */}
          <div>
            <div className="flex">
              <div>$30</div>
              <div>$12</div>
            </div>
            <div>Black / White</div>
          </div>
        </div>
        {/* Buy section  */}
        <section className="pt-[40px]">
          {/* size selector */}
          <div>
            {/* heading container */}
            <div className="flex">
              <span>Sizes</span>
            </div>
          </div>
          {/* sizes */}
          <div className="gird">
            <button>
              <span>XS</span>
            </button>
            <button>
              <span>XS</span>
            </button>
            <button>
              <span>XS</span>
            </button>
          </div>
          {/* add to bag */}
          <div>
            <button>
              <span>ADD TO BAG</span>
              <span>
                <HiArrowLongRight />
              </span>
            </button>
            <div>
              <span>
                <FaRegStar />
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
