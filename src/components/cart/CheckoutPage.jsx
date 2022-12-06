import { useLocation } from "react-router-dom";
import CheckoutInfo from "./CheckoutInfo";
import YourBag from "./YourBag";
import HeaderBag from "./HeaderBag";
import { useCart } from "../store/store";

const CheckoutPage = () => {
  const storedItems = useCart((state) => state.items);
  const totalAmount = useCart((state) => state.totalAmount);
  const amountItems = useCart((state) => state.amountItems);
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

          <YourBag
            amountItems={amountItems}
            totalAmount={totalAmount}
            storedItems={storedItems}
          />

          {/* Check out  */}

          <CheckoutInfo
            amountItems={amountItems}
            totalAmount={totalAmount}
            storedItems={storedItems}
          />
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;