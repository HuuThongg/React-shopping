'use client'
import CheckoutInfo from "./CheckoutInfo";
import YourBag from "./YourBag";
import HeaderBag from "./HeaderBag";
import { useCartStore } from "@/stores/useCart";
const CheckoutPage = () => {
  const storedItems = useCartStore((state) => state.items);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const amountItems = useCartStore((state) => state.amountItems);
  const deleteAll = useCartStore((state) => state.actions.deleteAllItems)
//   className = {`relative z-[1] ${pathname !== "/" ? "" : "pt-[95px]   md:pt-[100px] "
//     } mx-auto   max-w-[1280px]  px-4`
// }
//     >
  return (
    <section
      className={`relative z-[1] pt-[95px]  md:pt-[100px]  mx-auto max-w-[1280px]  px-4`}
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
