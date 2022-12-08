import { useLocation } from "react-router-dom";
import CheckoutInfo from "./CheckoutInfo";
import YourBag from "./YourBag";
import HeaderBag from "./HeaderBag";
import { useCart } from "../store/store";

const CheckoutPage = () => {
  const storedItems = useCart((state) => state.items);
  const totalAmount = useCart((state) => state.totalAmount);
  const amountItems = useCart((state) => state.amountItems);
  const deleteAll = useCart((state) => state.deleteAllItems)
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <section
      className={`relative z-[1] ${
        pathname !== "/" ? "" : "pt-[95px]   md:pt-[100px] "
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
            deleteAll={deleteAll}
          />
        </div>
      </div>
    </section>
  );
};

export default CheckoutPage;
