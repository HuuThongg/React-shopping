import { HiXMark, HiChevronDown } from "react-icons/hi2";
import { FaRegHeart, FaSortAmountDown } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useCart } from "../store/store";

const CartItem = ({ item }) => {
  const { amount, price, size, id } = item;

  const { status, data, error, isFetching, isSuccess, isLoading } = useQuery({
    queryKey: ["singleItem", id],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://api.npoint.io/412448615c4faa493df3/" + (id - 1)
      );
      return data;
    },
    enabled: !!id,
  });
  const deleteItemFromCart = useCart((state) => state.deleteItem);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const { imgs, name } = data;
  const img = imgs[0];

  const handleDeleteItem = () => {
    deleteItemFromCart(item);
  };
  return (
    <div className="max-h[500px] w-full  opacity-100 transition-all ">
      <div className="relative mt-[40px]">
        <div className="relative flex  w-full   truncate border  border-[#767677] text-[16px]">
          <div className="w-[41.666667%] pl-0 screen600:w-[240px] screen600:min-w-[240px]">
            <a className="relative block h-0 bg-[#eceff1] pb-[100%]" href="#">
              <img
                className="w-full object-contain"
                // src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/f544367209ae4494b5f0ab730140c5af_9366/FY8970_600_FY8970_01_standard.jpg.jpg?sh=364&strip=false&sw=364"
                src={data.imgs[0]}
                alt=""
              />
            </a>
          </div>

          {/* right side */}
          {/* screen960:ml-[4.116667%] */}
          <div className="   flex w-[58.333333%] flex-grow flex-col flex-nowrap  justify-between screen600:flex-1 screen960:ml-[4.116667%]">
            {/* <div className="flex w-full flex-col justify-between"> */}
            {/* will change to flex-wrap at some point */}
            <div className="flex w-full  flex-nowrap justify-between pl-[15px] screen960:pl-0">
              {/* line item */}
              <div className=" w-[calc(100%-45px)]  text-[16px] screen600:py-[20px] screen600:pr-0">
                <div>
                  {/* row */}
                  <div className="flex flex-wrap justify-between  ">
                    <a href="#">
                      <span className="">{name}</span>
                    </a>
                    {/* price */}
                    <div className="flex flex-col space-x-5 whitespace-nowrap">
                      <div className="flex flex-wrap items-center">
                        <div className="mr-1 text-[#767677] line-through">
                          $100
                        </div>
                        <div className="text-red-500">{price}</div>
                      </div>
                    </div>
                  </div>
                  {/* row */}
                  <div className="flex w-full flex-wrap  ">
                    <div className="flex-wrap  overflow-hidden text-ellipsis    uppercase ">
                      <span className="  truncate text-[16px]">
                        Cloud White / Core Black / Cloud White
                      </span>
                    </div>
                  </div>
                  {/* row size */}
                  <div>
                    <div className="w-full overflow-hidden text-ellipsis whitespace-nowrap uppercase">
                      <p>
                        {" "}
                        SIZE: <span> {size}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* remove and add favorite item to cart */}
              <div className="">
                <div className="mt-0 mr-0 flex flex-col items-end  text-[25px]">
                  <button className="h-[50px] px-4 " onClick={handleDeleteItem}>
                    <span className="h-[24px] w-[24px]">
                      <HiXMark />
                    </span>
                  </button>
                  <div className="px-4 text-[21px]">
                    <span className="h-[24px] w-[24px]">
                      <FaRegHeart />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit amoount  */}
            <div className="flex w-[calc(100%-50px)] items-center pl-[15px] screen600:pb-5">
              <div></div>
              {/* drop down container */}
              <div className="screen600:w-[100px]">
                {/* gl form item */}
                <div className="relative">
                  <div className="relative block cursor-pointer ">
                    {/* dropdown native select */}
                    <button className="relative flex w-full cursor-pointer items-center justify-between border border-[#767677] bg-white p-[15px] px-[10px] text-[16px] text-black ">
                      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                        <span>{amount}</span>
                      </span>
                      <span>
                        <HiChevronDown />
                      </span>
                    </button>
                    {/* dropdwon custom options */}
                    <div
                      className=" border-t-[#767677]] visible absolute left-0 
                    
                    right-0 top-[100%]  max-h-[195px]
                    overflow-y-scroll border border-[#000000]
                    bg-white opacity-100 transition-all
                    "
                    >
                      <ul className="">
                        <li>
                          <button className="m-0  block w-full cursor-pointer  border-b border-solid border-[#767677] bg-none p-[15px] text-left transition-colors">
                            2
                          </button>
                        </li>
                        <li>
                          <button className="m-0  block w-full cursor-pointer  border-b border-solid border-[#767677] bg-none p-[15px] transition-colors ">
                            3
                          </button>
                        </li>
                        <li>
                          <button className="m-0  block w-full cursor-pointer  border-b border-solid border-[#767677] bg-none p-[15px] transition-colors">
                            4
                          </button>
                        </li>
                        <li>
                          <button className="m-0  block w-full cursor-pointer  border-b border-solid border-[#767677] bg-none p-[15px] transition-colors">
                            5
                          </button>
                        </li>
                        <li>
                          <button className="m-0  block w-full cursor-pointer  border-b border-solid border-[#767677] bg-none p-[15px] transition-colors">
                            6
                          </button>
                        </li>
                      </ul>
                    </div>
                    {/* select */}
                    <select
                      className="absolute left-0 top-0 h-0 w-0 cursor-pointer appearance-none border-0 p-0 opacity-0 "
                      name="amount"
                      id="amount"
                    >
                      <option value=""></option>

                      <option value="">1</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                      <option value="">5</option>
                      <option value="">6</option>
                      <option value="">7</option>
                      <option value="">8</option>
                      <option value="">9</option>
                      <option value="">10</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
