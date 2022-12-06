import { useLocation } from "react-router-dom"
import CheckoutInfo from "./CheckoutInfo";
import YourBag from "./YourBag";

const CheckoutPage = () => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <section
      className={`relative z-10 ${
        pathname !== "/" ? "" : "pt-[105px]   md:pt-[120px] "
      } mx-auto   max-w-[1280px]  px-4`}
    >
      <div className="">
        {/* row */}
        <div className="flex w-full flex-wrap">
          {/* Your Bag */}

          <YourBag/>

          {/* Check out  */}
          
          <CheckoutInfo/>
        </div>
      </div>
    </section>
  );
}

export default CheckoutPage;