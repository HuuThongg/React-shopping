import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const WishList = ({ product }) => {
  const [isShown, setIsShown] = useState(false);
  const { price, id } = product;
  const { status, data, error, isFetching, isSuccess, isLoading } = useQuery({
    queryKey: ["singleFav", id],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://api.npoint.io/412448615c4faa493df3/" + (id - 1)
      );
      return data;
    },
    enabled: !!id,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;

  const { imgs, name } = data;
  const img = imgs[0];

  return (
    <div className="mb-[15px] grid w-[100%] px-0 screen600:w-[25%] screen600:pr-[15px]">
      {/* wishlist card */}
      <div className="h-full min-h-[220px] w-full min-w-[150px] bg-yellow-100">
        {/* product card container */}
        <div
          className="relative m-0 hover:outline hover:outline-1 hover:outline-black"
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          {/* glass product card is where you need to style something simple for the entire product card like font-size font-weight letter-spacing */}
          <div className="relative w-full cursor-pointer bg-white  text-black">
            {/* product assets */}
            <div className="relative bg-[#eceff1]">
              {/* insert img */}
              <Link to={`/products/${id}`}>
                <img src={img} alt="" />
              </Link>
              {/* heart */}
              {/* price */}
              <div className="absolute right-2 top-2">
                <button>
                  <FaHeart className=""></FaHeart>
                </button>
              </div>
              <Link
                to={`/products/${id}`}
                className={` absolute ${
                  isShown ? "bottom-2" : "bottom-0"
                } left-1  transition-all`}
              >
                {/* <div className="ml-1 font-semibold">
                            <span>-40%</span>
                          </div> */}
                <div className="mt-[5px] flex bg-white py-[2px] px-[5px]">
                  {/* <div className="mr-[4px] leading-4 text-gray-400 line-through">
                              $35
                            </div> */}
                  <div className={`"text-black" leading-4`}>
                    {product.price}
                  </div>
                </div>
              </Link>
            </div>
            <Link to={`/products/${id}`}>
              {/* Product-card _ details  Adjust min high later */}
              <div className="min-h-[75px] p-[10px] text-[12px] text-[#2e2828]">
                <p>Predator Edge.4 Flexible Ground Soccer Cleats</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishList;
