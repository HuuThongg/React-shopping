import { useLocation } from "react-router-dom";
import WishLists from "./WishLists";

const WishListMain = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <section
      className={`relative z-10 w-full ${
        pathname !== "/" ? "" : "pt-[95px]   md:pt-[100px] "
      }`}
    >
      <div className="maxvw relative flex w-full flex-auto overflow-visible">
        <WishLists/>
      </div>
    </section>
  );
};

export default WishListMain;

