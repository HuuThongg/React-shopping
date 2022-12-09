import { useOrder} from "../store/store"
import {HiArrowLongRight} from "react-icons/hi2";
import { useLocation } from "react-router";
import Tab from "./Tab";

const OrderHisotry = () => {

  const location = useLocation();
  const pathname = location.pathname;

  const orders = useOrder((state) => state.orders);
  const totalAmount = useOrder((state) => state.totalAmount);
  const amountItems = useOrder((state) => state.amountItems);
  const orderTime = useOrder((state) => state.orderTime)
  const orderID = useOrder((state) => state.orderID);
  return (
    <section
      className={`relative z-[1] ${
        pathname !== "/" ? "" : "pt-[95px]   md:pt-[100px] "
      }   bg-[#f7f7f7] `}
    >
      <div className="">
        <Tab />
      </div>
      <div className=" mx-auto   max-w-[1280px]">
        <div className="w-full bg-[#f7f7f7] px-[15px] ">
          <div className="relative mx-auto max-w-full pt-[30px] screen600:pt-[80px]  screen960:px-[15px] screen1280:w-full">
            {/* orderse container  */}
            <div className="flex w-full flex-col flex-wrap ">
              <article className="w-full px-[15px]">
                <section className="mb-[40px] bg-white px-[10px] screen600:p-[40px]">
                  <h5 className="text-[18px] font-bold uppercase">
                    Your Order: <span>{orderID}</span>
                  </h5>
                  <div className="mt-3">
                    {/* time */}
                    <span className="text-[16px]">
                      {orderTime.month} {orderTime.date} , {orderTime.year} | $
                      {totalAmount} | {amountItems}{" "}
                      {amountItems > 1 ? "items" : " item"}
                    </span>
                  </div>
                  <div className="mt-3 w-full">
                    <div className="flex w-full flex-wrap items-end ">
                      {/* img items */}
                      <div className="w-full screen600:w-[50%]">
                        <div className="relative">
                          <div className="pt-[10px]">
                            <div className=" scrollbar-hide flex w-full snap-x snap-mandatory   gap-x-2 overflow-x-auto overflow-y-hidden">
                              {orders.map((order, index) => (
                                // {/* each card */}
                                <div
                                  key={index}
                                  className=" flex min-h-[1px] flex-none basis-auto snap-none "
                                >
                                  {/* wrapper img */}
                                  <div className="bg-[#eceff1 relative h-[75px] w-[75px] cursor-pointer">
                                    <img
                                      className="w-full"
                                      src={order.img}
                                      alt=""
                                    />
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* view details */}
                      <div className="mt-3 w-full screen600:m-0 screen600:ml-[8.33333333%] screen600:w-[41.666666667%]  ">
                        <div className="flex w-full flex-auto translate-x-0 translate-y-0 flex-row-reverse justify-between  font-semibold text-white active:translate-x-[3px] active:translate-y-[3px] screen600:w-auto screen600:flex-row">
                          <button className="invisible"></button>
                          <button
                            className=" checkoutShadow  relative inline-flex min-h-[50px] w-auto cursor-pointer  items-center justify-between whitespace-nowrap border-none  bg-black px-3 text-left hover:text-[#767677] screen600:px-[15px] "
                            // onClick={handleDeleteAllItemsAndAddOrder}
                          >
                            <span className="uppercase tracking-widest">
                              view details
                            </span>
                            <span className="text-[30px]">
                              <HiArrowLongRight />
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OrderHisotry;