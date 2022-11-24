import HeaderShop from "./HeaderShop";
import ItemsContainer from "./ItemsContainer";
import FilterWrapper from "./FilterWrapper";
const MainShop = () => {
  return (
    <section className="pt-[105px] md:pt-[120px] relative w-full  z-0">
      <div className="relative w-full screen960:pt-[39px]  ">
        
        <HeaderShop/>
        <FilterWrapper/>
        <ItemsContainer/>
        
      </div>
    </section>
  );
};

export default MainShop;
