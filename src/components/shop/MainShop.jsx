import HeaderShop from "./HeaderShop";
import ItemsContainer from "./ItemsContainer";
import FilterWrapper from "./FilterWrapper";
import OverlayFilter from "./OverlayFilter";
const MainShop = () => {
  return (
    <section className="pt-[105px] md:pt-[120px] relative w-full   z-10">
      <div className="relative w-full screen960:pt-[39px] z- ">
        <HeaderShop />
        <FilterWrapper />
        <ItemsContainer  className="z-10"/>
        {/* <OverlayFilter/> */}
        {/* Filter */}
        {/* <OverlayFilter className="z-[200000]" /> */}
      </div>
    </section>
  );
};

export default MainShop;
