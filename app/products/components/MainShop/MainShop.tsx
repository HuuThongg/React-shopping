'use client'

import FilterWrapper from "../Filter/FilterWrapper";
import OverlayFilter from "../Filter/OverlayFilter";
import HeaderShop from "../HeaderShop/HeaderShop";
import ItemsContainer from "../Items/ItemsContainer";
import axios from "axios";
import useSWR from 'swr'

const fetcher = (url: string) => axios.get(url).then(res => res.data)
const url = "https://api.npoint.io/412448615c4faa493df3"
const MainShop = () => {
  
  const { data, error, isLoading } = useSWR(url, fetcher)
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error</div>;
//   className = {`relative  ${pathname !== "/" ? "pt-[95px]   md:pt-[100px] " : ""
//     }w-full `
// }
  return (
    <section
      className={`relative  pt-[95px]   md:pt-[100px] w-full `}
    >
      <div className="z- relative w-full screen960:pt-[39px] ">
        <HeaderShop data={data} />
        <FilterWrapper/>
        <ItemsContainer data={data} />
        <OverlayFilter />
      </div>
    </section>
  );
};

export default MainShop;
