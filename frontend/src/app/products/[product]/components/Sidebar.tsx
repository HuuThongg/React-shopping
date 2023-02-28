'use client'
import { FaStar, FaRegStar } from "react-icons/fa";
import { HiArrowLongRight, HiOutlineBellAlert } from "react-icons/hi2";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// import { useCartItems } from "../stores/store";
import { useCartItems, userCartActions } from "@/stores/useCart";
import { usePathname } from 'next/navigation';
import axios from "axios";
import useSWR from 'swr'
import SideBarWrapper from "./SideBarWrapper";
import SideBarSkeletonLoading from "./SideBarSkeletonLoading";
import { useQuery } from '@apollo/client';
import ProductsOperation from '@/graphql/operations/products';
const fetcher = (url: string) => axios.get(url).then(res => res.data)
const Sidebar = () => {
  const pathname = usePathname();
  const storedItems = useCartItems();
  const addItem = userCartActions().addItem;
  const [sizeItem, setSizeItem] = useState("");
  const [idButtonSize, setIdButtonSize] = useState(null);
  const productId = pathname?.split("/")[2];
  const { data: singleProduct, error, loading : isLoading } = useQuery(ProductsOperation.Queries.product, {
    variables: {
      productId
    }
  });

  if (isLoading) return (
    <SideBarSkeletonLoading/>
  )

  if (error) return <div>Error Side bar</div>;
  const product = singleProduct.product;
  const img = product?.imgs[0];
  const handleAddItem = () => {
    console.log("add item")
    console.log(img)
    addItem({
      id: product.id,
      amount: 1,
      price: product.price,
      size: sizeItem,
      img: img,
    });
  };

  return (
    <SideBarWrapper>
      {/* Product description  */}
      <div className="mb-0  flex flex-col flex-wrap p-0">
        {/* pre header */}
        <div className="flex min-h-[24px] w-full flex-wrap items-center justify-between">
          <div className="flex">
            <span className="inline-flex">Men's • Essentials</span>
          </div>
          <button className="relative flex items-baseline ">
            {/* star rating */}
            <div className="relative mr-2 inline-flex items-center justify-center text-[11px]">
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
            <span className="underline">247</span>
          </button>
        </div>
        {/* Name */}
        <h1 className="mt-2 text-[35px] font-normal italic">
          <span>{product.name}</span>
        </h1>
        {/* Prduct price */}
        <div className="mt-2">
          <div className="flex items-center ">
            {/* sale off price  */}
            <div className="mr-1 text-gray-500 line-through">
              {product.saleoff?.price}
            </div>
            <div className="ml-1 font-bold text-red-600">{product.price}</div>
          </div>
          <div className="mt-2">Black / White</div>
        </div>
        {/* sale off Event */}
        <div className="mt-5 text-gray-500">
          <div className="font-semibold text-black">
            <span> Black Friday Sale </span>
          </div>
          <div>
            <span>Get an extra 40% off with code CYBER. Ends 11/30.</span>
          </div>
          <div className="font-medium  underline">
            <a href="#">Shop Black Friday Sale</a>
          </div>
        </div>
      </div>
      {/* Buy section  */}
      <section className="mt-[40px] ">
        {/* size selector */}
        <div>
          {/* heading container */}
          <div className="flex font-semibold">
            <span>Sizes</span>
          </div>
        </div>
        {/* sizes */}
        <div className="gridSize mt-[10px] grid rounded border-[1px] border-b-0 border-t-0 border-r-0 border-solid border-slate-300">
          {product.sizes.map((size, index) => (
            <button
              key={uuidv4()}
              className={`relative h-[50px] border-[1px] border-t-1 border-l-0 border-solid  border-slate-300 line-through hover:bg-black hover:text-white ${(sizeItem !== "") & (idButtonSize === index)
                  ? "bg-black text-white"
                  : "bg-white text-black"
                } `}
              onClick={() => {
                setSizeItem(size);
                setIdButtonSize(index);
              }}
            >
              {/* text-slate-500 */}
              <span>{size}</span>
              <span className="absolute right-2 top-0">
                <HiOutlineBellAlert />
              </span>
            </button>
          ))}
        </div>
        {/* add to bag */}
        <div className="mt-7  flex w-full items-center justify-between  text-white">
          <button
            className="flex h-[50px] w-full items-center  justify-between rounded bg-black px-3 font-semibold shadow-xl"
            // onClick={addItem(product._id.$oid)}
            onClick={handleAddItem}
          >
            <span>ADD TO BAG</span>
            <span className="text-[35px]">
              <HiArrowLongRight />
            </span>
          </button>
          <div className="ml-[10px]">
            <div className="flex h-[50px] w-[50px]  items-center justify-center rounded border-[1px] border-solid border-black bg-white">
              <span className="text-black">
                <FaRegStar />
              </span>
            </div>
          </div>
        </div>
      </section>
    </SideBarWrapper>  

  );
};

export default Sidebar;
// note {product.saleoff?.price} need to add  salfeoff field to api later
