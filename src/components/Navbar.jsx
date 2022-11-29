import { logo } from "../assets";
import { navLinks, topInfo } from "../constants";
import { FaRegUser } from "react-icons/fa";
import { HiHeart, HiBars4 } from "react-icons/hi2";
import { useState, useEffect } from "react";
import { debounce } from "../utilities/helper";

const Navbar = () => {
  const [active, setActive] = useState("men");
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [toggle, setToggle] = useState(false);
  const handleScroll = debounce(() => {
    // find current scroll position
    const currentScrollPos = window.scrollY;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 0) ||
        currentScrollPos < 120
    );
    setPrevScrollPos(currentScrollPos);
  }, 10);
  // new useEffect:
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  console.log(visible);
  return (
    <div
      className={`fixed top-0 left-0 w-full justify-items-center z-40 transition-shadow  duration-[250] delay-100 ease-[cubic-bezier(0.25, 0.1, 0.25, 1.0) ] ${
        !visible ? "-translate-y-full" : ""
      }`}
    >
      <div className="bg-[#18181b] h-[45px] w-full  md:h-[40px] grid place-items-center">
        <button className="text-white w-full h-full ">
          FREE STANDARD SHIPPING & RETURNS
        </button>
      </div>
      <nav className="border w-full flex flex-col  px-2 justify-between  h-[60px] md:h-[80px] bg-white ">
        <div className="hidden md:block w-full">
          <ul className="list-none flex items-center pl-12 justify-end -pr-5">
            {topInfo.map((nav, index) => (
              <li
                key={nav.id}
                className={` font-normal italic cursor-pointer text-sm ${
                  index === topInfo.length - 1 ? "mr-0" : "mr-4"
                } `}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full flex justify-between items-center md:items-end lg:items-center ">
          <div className="flex md:hidden ">
            <button className="w-12 h-12 flex   items-center justify-center">
              <HiBars4 className="w-7 h-7"></HiBars4>
            </button>
            <div className="  w-12 h-12 ">
              <a
                href="#"
                className="w-full h-full  relative  justify-center grid place-items-center text-center"
              >
                <HiHeart className="w-6 h-6 inline"></HiHeart>
                <span className="absolute top-0 right-0 w-5 h-5 text-xxl bg-blue-400 rounded-full text-center">
                  1
                </span>
              </a>
            </div>
          </div>
          <img
            src={logo}
            alt="Adidas Logo"
            className=" pl-12 h-[60px] object-contain "
          ></img>
          <ul className="list-none hidden md:flex justify-start lg:justify-center  items-center flex-1 pl-12  pb-3 lg:pb-0">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-semibold cursor-pointer text-[16px] ${
                  active === nav.title ? "text-black-100" : "text-neutral-400"
                }  ${index === navLinks.length - 1 ? "mr-0" : "mr-10"} `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>

                {/* Header-stick- wrapper z-50 */}

                {/* <div className="bg-blue-400 z-50">
                  <div className="">
                    <div>
                      <div className="flex justify-between flex-nowrap">
                        <div class="col-5 tridion-col">
                          <div class="headline">
                            <a
                              href="/us/men-shoes"
                              manual_cm_sp="header-_-men-_-shoes"
                            >
                              <span class="">SHOES</span>
                            </a>
                          </div>
                          <ul>
                            <li>
                              <a
                                href="/us/men-athletic_sneakers"
                                manual_cm_sp="header-_-men-_-shoes-_-sneakers"
                              >
                                <span class="">Sneakers</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/us/men-running-shoes"
                                manual_cm_sp="header-_-men-_-shoes-_-running"
                              >
                                <span class="">Running</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/us/men-soccer-shoes"
                                manual_cm_sp="header-_-men-_-shoes-_-soccer"
                              >
                                <span class="">Soccer</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/us/men-basketball-shoes"
                                manual_cm_sp="header-_-men-_-shoes-_-basketball"
                              >
                                <span class="">Basketball</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/us/men-slides"
                                manual_cm_sp="header-_-men-_-shoes-_-sandals &amp; slides"
                              >
                                <span class="">Sandals &amp; Slides</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/us/men-outdoor-shoes"
                                manual_cm_sp="header-_-men-_-shoes-_-outdoor &amp; hiking"
                              >
                                <span class="">Outdoor &amp; Hiking</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/us/men-shoes?price=price<101.0"
                                manual_cm_sp="header-_-men-_-shoes-_-shoes $100 &amp; under"
                              >
                                <span class="">Shoes $100 &amp; Under</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/us/men-football-cleats"
                                manual_cm_sp="header-_-men-_-shoes-_-football"
                              >
                                <span class="">Football</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/us/men-workout-shoes"
                                manual_cm_sp="header-_-men-_-shoes-_-workout &amp; gym"
                              >
                                <span class="">Workout &amp; Gym</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/us/men-golf-shoes"
                                manual_cm_sp="header-_-men-_-shoes-_-golf"
                              >
                                <span class="">Golf</span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="/us/men-baseball-shoes"
                                manual_cm_sp="header-_-men-_-shoes-_-baseball"
                              >
                                <span class="">Baseball</span>
                              </a>
                            </li>
                          </ul>
                          <div class="bottom-link">
                            <a
                              href="/us/men-shoes"
                              manual_cm_sp="header-_-men-_-shoes-_-all men's shoes"
                            >
                              <span class="">All Men's Shoes</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </li>
            ))}
          </ul>
          <div className="flex space-x-4 justify-items-center">
            <div className="  w-12 h-12  relative ">
              <button className=" w-full h-full ">
                <FaRegUser className="w-6 h-6 inline "></FaRegUser>
                <span className="absolute  w-5 h-5 text-xxl bg-yellow-400 rounded-full top-0 right-0 text-center">
                  1
                </span>
              </button>
            </div>
            <div className="  w-12 h-12 justify-items-center">
              <a
                href="#"
                className="w-full h-full  grid place-items-center relative "
              >
                <HiHeart className="w-6 h-6"></HiHeart>
                <span className="absolute w-5 h-5 text-xxl bg-blue-400 rounded-full top-0 right-0 text-center">
                  1
                </span>
              </a>
            </div>
            <div className="  w-12 h-12  ">
              <a
                href="#"
                className="w-full h-full grid place-items-center  relative justify-center "
              >
                <FaRegUser className="w-6 h-6 "></FaRegUser>
                <span className="absolute top-0 right-0 w-5 h-5 text-xxl bg-blue-400 rounded-full  block text-center ">
                  1
                </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
