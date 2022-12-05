import HeaderShop from "./HeaderShop";
import ItemsContainer from "./ItemsContainer";
import FilterWrapper from "./FilterWrapper";
import OverlayFilter from "./OverlayFilter";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
const MainShop = () => {
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
  return (
    <section className="relative z-10 w-full pt-[105px]   md:pt-[120px]">
      <div className="z- relative w-full screen960:pt-[39px] ">
        <HeaderShop data={data} />
        <FilterWrapper data={data} />
        <ItemsContainer data={data} className="z-10" />
        {/* <OverlayFilter/> */}
        {/* Filter */}
        {/* <OverlayFilter className="z-[200000]" /> */}
      </div>
    </section>
  );
};

export default MainShop;
