import {
  HiArrowLongRight,
  HiOutlineArrowUpOnSquareStack,
} from "react-icons/hi2";
import { useOrder } from "../store/store";
import { useNavigate } from "react-router";
import OrderSummary from "./OrderSummary";

const CheckoutInfo = ({ amountItems, totalAmount, storedItems, deleteAll }) => {
  const orders = useOrder((state) => state.orders);
  const addOrder = useOrder((state) => state.addOrder);

  const handleDeleteAllItemsAndAddOrder = () => {
    addOrder({ totalAmount, amountItems, storedItems });
    deleteAll();
    navigage("/delivery");
  };
  const navigage = useNavigate();
  const isEmpty = amountItems !== 0;
  return (
    <aside className="ml-0 px-0 screen960:ml-[4.16667%] screen960:w-[37.5%] screen1280:w-[29.1666667%]">
      {isEmpty && (
        <div className="flex w-full flex-col  pt-[40px]">
          <div className="flex w-full flex-col justify-end screen960:flex-col-reverse">
            {/* pro``mo code */}
            <div className=" mt-[15px]  w-full ">
              <div className="h-[100px] w-full">
                <form className="flex h-full items-center justify-start">
                  <button className="underline ">Use a promo code</button>
                </form>
              </div>
            </div>
            {/* // Tap to apply  */}

            {/* // ORDER SUMMARY */}
            <OrderSummary />

            {/* Checkout or pay with paypal */}
            <div className="  flex flex-auto flex-col text-[14px] screen960:mt-0">
              <div className="flex-auto translate-x-0 translate-y-0 bg-black font-semibold text-white active:translate-x-[3px] active:translate-y-[3px]">
                <button
                  className=" checkoutShadow  relative inline-flex min-h-[50px] w-full cursor-pointer  items-center justify-between whitespace-nowrap border-none  px-[15px] text-left hover:text-[#767677] active:text-[#c1c1c8] "
                  onClick={handleDeleteAllItemsAndAddOrder}
                >
                  <span className="uppercase tracking-widest">Checkout</span>
                  <span className="text-[30px]">
                    <HiArrowLongRight />
                  </span>
                </button>
              </div>
              <p className="mx-[10px] text-center font-light leading-[50px]">
                OR
              </p>
              <div className="flex-auto translate-x-0 translate-y-0 border-2 border-black bg-white active:translate-x-[3px] active:translate-y-[3px]">
                <button className="   relative inline-flex min-h-[50px] w-full cursor-pointer  items-center justify-between whitespace-nowrap border-none  px-[15px] text-left">
                  <span className="font-bold uppercase">
                    <img
                      src="https://www.adidas.com/static/checkout/react/d15ae68/assets/img/img-paypal-logo.svg"
                      alt="paypal"
                    />
                  </span>
                  <span className="text-[30px]">
                    <HiOutlineArrowUpOnSquareStack />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      )}
      {/* Accepted payment methods */}
      <div className="my-[40px]">
        <div>
          <h4>accpeted payment methods</h4>
          <img
            src="https://brand.assets.adidas.com/image/upload/f_auto,q_auto,fl_lossy/enUS/Images/visa-master-amex-discover-paypal-applepay-affirm-klarna-afterpay_tcm221-698514.png"
            alt="payment methods"
          />
        </div>
      </div>
    </aside>
  );
};

export default CheckoutInfo;
