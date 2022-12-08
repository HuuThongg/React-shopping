import HeaderShop from "./HeaderShop";
import ItemsContainer from "./ItemsContainer";
import FilterWrapper from "./FilterWrapper";
import OverlayFilter from "./OverlayFilter";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useLocation } from "react-router-dom";
const MainShop = () => {
  const location = useLocation();


  const { status, data, isError, error, isFetching, isSuccess, isLoading } =
    useQuery({
      queryKey: ["totalItems"],
      queryFn: async () => {
        const { data } = await axios.get(
          "https://api.npoint.io/412448615c4faa493df3"
        );
        return data;
      },
    });
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>error</div>;
  const pathname = location.pathname;
  return (
    <section
      className={`relative  ${
        pathname !== "/" ? "pt-[95px]   md:pt-[100px] ":"" 
      }w-full `}
    >
      <div className="z- relative w-full screen960:pt-[39px] ">
        <HeaderShop data={data} />
        <FilterWrapper data={data} />
        <ItemsContainer data={data} />
        {/* <OverlayFilter/> */}
        {/* Filter */}

        <OverlayFilter data={data} />
      </div>
    </section>
  );
};

export default MainShop;
