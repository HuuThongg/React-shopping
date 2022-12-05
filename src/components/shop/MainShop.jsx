import HeaderShop from "./HeaderShop";
import ItemsContainer from "./ItemsContainer";
import FilterWrapper from "./FilterWrapper";
import OverlayFilter from "./OverlayFilter";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useAtom } from "jotai";
import { toggle_filter } from "../store/jotai";
import { useLocation } from "react-router-dom";
const MainShop = () => {
  const location = useLocation();

  const [isToggle, setIsToggle] = useAtom(toggle_filter);
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
  console.log(pathname);
  return (
    <section className={`relative z-10 ${pathname!=='/' ?"": "pt-[105px]   md:pt-[120px] " }w-full `}>
      <div className="z- relative w-full screen960:pt-[39px] ">
        <HeaderShop data={data} />
        <FilterWrapper data={data} />
        <ItemsContainer data={data} className="z-10" />
        {/* <OverlayFilter/> */}
        {/* Filter */}
        {isToggle && <OverlayFilter data={data} />}
      </div>
    </section>
  );
};

export default MainShop;
