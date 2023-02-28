'use client'
import { HiXMark, HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { v4 as uuidv4 } from 'uuid';

import { FaHeart, FaRegHeart, FaSortAmountDown } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";
import { useCartStore } from "@/stores/useCart";
import { useFavoriteStore } from "@/stores/useFavorite";
import Link from "next/link";
import axios from "axios";
import useSWR from 'swr';
import { closeToggle } from "@/stores/jotai";
import Image from "next/image";

const fetcher = (url: string) => axios.get(url).then(res => res.data)

interface Item{
  amount : number
  price:string  
  size:string
  id:string
  image:string

}

const CartItem = ({ item }: { item: Item }) => {
  const [isSizeOptions, setIsSizeOptions] = useState(false)
  const ref = useRef<HTMLButtonElement>(null);
  const { amount, price, size, id } = item;
  const [chosenAmountItems, setChosenAmountItems] = useState(amount)

  const newId = +id - 1;
  const { data, error, isLoading } = useSWR(`https://api.npoint.io/412448615c4faa493df3/${newId}` 
  , fetcher)
  
  const deleteItemFromCart = useCartStore((state) => state.actions.deleteItem);
  const changeAmountItems = useCartStore((state) => state.actions.changeAmountItems);

  const favoriteItems = useFavoriteStore((state) => state.favItems);
  const addFav = useFavoriteStore((state) => state.addFav);
  const deleteFav = useFavoriteStore((state) => state.deleteFav);
  useEffect(() => {
    const checkIfLickedOutside = (e: MouseEvent ) => {
      // // If the menu is open and the clicked target is not within the menu, then close filter sidebar
      if (isSizeOptions && ref.current && !ref.current.contains(e.target as Node))
        setIsSizeOptions(false);
    };
    document.addEventListener("mousedown", checkIfLickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfLickedOutside);
    };
  }, [isSizeOptions]);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const { imgs, name } = data;
  const img = imgs[0];
  const isFavItem = favoriteItems.findIndex((e: { id: string; }) => e.id === id);
  const handleAddDelelteFave = () => {
    console.log("handleAddDelelteFave")
    if (isFavItem !== -1) {
      deleteFav({ id });
    } else {
      addFav({ id, price });
    }
  };
  const handleChangeAmountItems = (ammount : number) => {
    console.log("ammount")
    changeAmountItems({ id, size, ammount })
  }

  const handleDeleteItem = () => {
    deleteItemFromCart(item);
  };

  console.log(item)

  return (
    <div className=" max-h-[500px] w-full  opacity-100 transition-all ">
      <div className="relative mt-[40px] ">
        <div className="relative flex  w-full    border  border-[#767677] text-[16px]">
          <div className="w-[41.666667%] pl-0 screen600:w-[200px] screen600:min-w-[200px]">
            <Link
              className="relative block h-0 bg-[#eceff1] pb-[100%]"
              href={`/products/${id}`}
            >
              <Image className="w-full  object-contain" src={img} alt=""  width={30} height={30}/>
            </Link>
          </div>

          {/* right side */}
          {/* screen960:ml-[4.116667%] */}
          <div className="   flex w-[58.333333%] flex-grow flex-col flex-nowrap  justify-between screen600:flex-1 screen960:ml-[4.116667%]">
            {/* <div className="flex w-full flex-col justify-between"> */}
            {/* will change to flex-wrap at some point */}
            <div className="flex w-full  flex-nowrap justify-between pl-[15px] screen960:pl-0">
              {/* line item */}
              <div className=" w-[calc(100%-54px)]  text-[16px] screen600:py-[20px] screen600:pr-0">
                <div>
                  {/* row */}
                  <div className="flex flex-wrap justify-between  ">
                    <Link href={`/products/${id}`}>
                      <span className="">{name}</span>
                    </Link>
                    {/* price */}
                    <div className="flex flex-col space-x-5 whitespace-nowrap">
                      <div className="flex flex-wrap items-center">
                        {/* {item.saleoff?.price && (
                          <div className="mr-1 text-[#767677] line-through">
                            $100
                          </div>
                        )} */}
                        {/* <div
                          className={` ${item.saleoff?.price && "text-red-500"
                            }`}
                        >
                          {price}
                        </div> */}
                        <div
                        >
                          {price}
                        </div>
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
                  <button className="h-[50px] px-4 ">
                    <span
                      className="h-[24px] w-[24px]"
                      onClick={handleDeleteItem}
                    >
                      <HiXMark />
                    </span>
                  </button>
                  <div className="px-4 py-3 text-[21px]">
                    <span
                      className="h-[21px] w-[21px]"
                      onClick={handleAddDelelteFave}
                    >
                      {isFavItem != -1 ? <FaHeart /> : <FaRegHeart />}
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
                  <div className="relative block cursor-pointer  ">
                    {/* dropdown native select */}
                    <button
                      className="relative flex w-full cursor-pointer items-center justify-between border border-[#767677] bg-white p-[15px] px-[10px] text-[16px] text-black "
                      onClick={() => {
                        setIsSizeOptions(!isSizeOptions);
                      }}
                    >
                      <span className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold leading-3">
                        <span>{chosenAmountItems}</span>
                      </span>
                      <span>
                        {isSizeOptions ? <HiChevronDown /> : <HiChevronUp />}
                      </span>
                    </button>
                    {/* dropdwon custom options */}
                    <div
                      className={` border-t-[#767677]] ${isSizeOptions
                          ? "visible opacity-100"
                          : "invisible opacity-0"
                        } absolute left-0 
                    
                    right-0 top-[100%]   z-[2]
                    max-h-[195px] overflow-y-scroll border border-t-0
                    border-[#000000] bg-white 
                    transition-all`}
                    >
                      <ul className="">
                        {Array.from({ length: 10 }, (_, i) => i + 1).map(
                          (e, index) => (
                            <li key={index}>
                              <button
                                className={` m-0 block w-full  cursor-pointer border-b border-solid border-[#767677] bg-none p-[15px] text-left leading-3 text-[#383854] transition-colors  ${chosenAmountItems === index + 1 &&
                                  "font-semibold"
                                  }`}
                                onClick={() => {
                                  console.log("click")
                                  setChosenAmountItems(index + 1);
                                  handleChangeAmountItems(index + 1);
                                }}
                                ref={ref}
                              >
                                {e}
                              </button>
                            </li>
                          )
                        )}
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
