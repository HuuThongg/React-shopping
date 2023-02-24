'use client'
import {useEffect, useState} from "react";
// import { useQuery } from "@tanstack/react-query";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import useSWR from 'swr'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import 'react-loading-skeleton/dist/skeleton.css'

const fetcher = (url: string)  => axios.get(url).then(res => res.data)
const SetGift = () => {

  const {data , error, isLoading} = useSWR('https://my-json-server.typicode.com/HuuThongg/mockjson/db', fetcher)
  if (isLoading) return (
    <>
      <div role="status" className="w-full p-4 border border-gray-200  shadow animate-pulse md:p-6 dark:border-gray-700 flex space-x-1">
        <div>
          <div className="h-[326px] w-[244.5px] bg-gray-200  dark:bg-gray-700  mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
        <div>
          <div className="h-[326px] w-[244.5px] bg-gray-200  dark:bg-gray-700  mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>

        <div>
          <div className="h-[326px] w-[244.5px] bg-gray-200  dark:bg-gray-700  mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>

        <div>
          <div className="h-[326px] w-[244.5px] bg-gray-200  dark:bg-gray-700  mb-4"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
    </>
  );
  if (error) return <div>Error</div>;
  // let a = data.backgrounds;
  // const { isLoading, error, data, isFetching } = useQuery(
  //   ["repoData"],
  //   async () => {
  //     const res = await axios.get(
  //       "https://my-json-server.typicode.com/HuuThongg/mockjson/db"
  //     );
  //     // console.log(res.data)
  //     return await res.data;
  //   }
  // );
  return (
    <section className="w-full relative  overflow-hidden">
      <div className=" w-full relative  h-full text-white flex overflow-hidden">
        {/* Backgroud */}
        <div className="h-full absolute inset-0 z-0">
          {/* container */}
          <div className="w-full h-full">
            <picture className="h-full">
              <source
                media="(min-width: 960px)"
                srcSet={data.backgrounds.bg_m_w_960}
              />
              <source
                media="(min-width: 600px)"
                srcSet={data.backgrounds.bg_m_w_600}
              />
              <source srcSet={data.backgrounds.bg_smallest} />
              <img src={data.backgrounds.bg_m_w_960} alt="background image 960"/>
            </picture>
          </div>
        </div>

        <div className="pt-4 pl-4 z-10 w-full max-w-full  mx-auto h-full screen1280:w-[1280px] overflow-hidden relative ">
          {/* container */}

          <div className="flex flex-wrap px-0 w-full">
            {/* wrapper */}
            <div className="w-full">
              <div>
                <h4 className="text-[30px] text-slate-900 font-bold">
                  {data.header.headerInfo}
                </h4>
                <p className=" block text-slate-900 font-normal mt-4 w-full">
                  {data.header.description}
                </p>
              </div>
            </div>
          </div>

          {/* container    row no-gutters  */}
          <div className="flex flex-wrap w-full z-30 overflow-hidden overflow-x-auto ">
            <div className="relative overflow-hidden overflow-x-auto ">
              {/* control scroll */}
              <div className="w-full  flex py-1  snap-x snap-mandatory overflow-x-auto scrollbar-hide  mb-5   ">
                {/* content for each  */}
                {/*w-[calc((100%-10px)/1.187)]  */}

                {data.content.map((product) => (
                  <div
                    key={uuidv4()}
                    className=" grow-0 shrink-0 basis-auto  snap-align-none w-[calc((100%-10px)/1.187)]  screen600:w-[calc((100%-20px)/2.43)] screen960:w-[calc((100%-40px)/4)]  mr-[10px] scroll-mx-6  "
                  >
                    <div className="h-full relative w-full ">
                      <a href="#" className="w-full ">
                        {/* teaser-card-content */}
                        <div className=" h-full  flex flex-col w-full relative">
                          {/* image */}
                          <div className=" h-full before:block before:content-['']  before:w-full pt-[133.333333333333%] w-full">
                            {/* Wrapper */}
                            <div className="absolute inset-0 h-full w-full">
                              {/* container */}
                              <div className="w-full h-full">
                                <picture>
                                  <source
                                    media="(min-width: 960px)"
                                    srcSet={product.images[0].bg_m_w_960}
                                  />
                                  <source
                                    media="(min-width: 600px)"
                                    srcSet={product.images[0].bg_m_w_600}
                                  />
                                  <source srcSet={product.images[0].bg_smallest} />
                                  <img srcSet={product.images[0].bg_m_w_960} />
                                </picture>
                              </div>
                            </div>
                          </div>
                          {/* Content  */}
                          <div className="flex flex-col mt-3 text-white flex-end ">
                            <span className="block text-ellipsis overflow-hidden mb-0">
                              <strong>{product.sale_off}</strong>
                            </span>
                            <p className="pt-[5px]">{product.description}</p>
                            <div className="flex mt-5 flex-1 items-end text-[20px] underline underline-offset-2">
                              <button>
                                <span className="text-[18px] flex-1 overflow-hidden text-ellipsis">
                                  SHOP NOW
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SetGift;
