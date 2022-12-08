import { useOrder} from "../store/store"
import {HiArrowLongRight} from "react-icons/hi2";
const Order = () => {
  const orders = useOrder((state) => state.orders);
  const totalAmount = useOrder((state) => state.totalAmount);
  const amountItems = useOrder((state) => state.amountItems);

  return (
    <div className="w-full bg-[#efefef] px-[15px] ">
      <div className="relative mx-auto max-w-full pt-[30px] screen600:pt-[80px]  screen960:px-[15px] screen1280:w-full">
        {/* orderse container  */}
        <div className="flex w-full flex-col flex-wrap ">
          <article className="w-full px-[15px]">
            <section className="mb-[40px] bg-white px-[10px] screen600:p-[40px]">
              <h5 className="font-bold uppercase text-[18px]">
                Your Order: <span>AD155299144</span>
              </h5>
              <div className="mt-3">
                {/* time */}
                <span className="text-[16px]">November 22,2022 | $63.13| 1 item</span>
              </div>
              <div className="mt-3 w-full">
                <div className="flex w-full flex-wrap items-end ">
                  {/* img items */}
                  <div className="w-full screen600:w-[50%]">
                    <div className="relative">
                      <div className="pt-[10px]">
                        <div className=" scrollbar-hide flex w-full snap-x snap-mandatory   gap-x-2 overflow-x-auto overflow-y-hidden">
                          {/* each card */}
                          <div className=" flex min-h-[1px] flex-none basis-auto snap-none ">
                            {/* wrapper img */}
                            <div className="h-[75px] w-[75px] cursor-pointer relative bg-[#eceff1">
                              <img
                                className="w-full"
                                src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/04569072a1434187aedaad75010e5041_9366/GX5594_540_GX5594_01_standard.jpg.jpg?sh=75&strip=false&sw=75"
                                alt=""
                              />
                            </div>
                          </div>
                          {/* each card */}
                          <div className=" flex min-h-[1px] flex-none basis-auto snap-none ">
                            {/* wrapper img */}
                            <div className="h-[75px] w-[75px] cursor-pointer relative bg-[#eceff1">
                              <img
                                className="w-full"
                                src="https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/04569072a1434187aedaad75010e5041_9366/GX5594_540_GX5594_01_standard.jpg.jpg?sh=75&strip=false&sw=75"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* view details */}
                  <div className="mt-3 screen600:m-0 w-full screen600:ml-[8.33333333%] screen600:w-[41.666666667%]  ">
                    <div className="flex flex-row-reverse screen600:flex-row w-full flex-auto translate-x-0 translate-y-0  font-semibold text-white active:translate-x-[3px] active:translate-y-[3px] screen600:w-auto justify-between">
                      <button className="invisible"></button>
                      <button
                        className=" checkoutShadow  relative inline-flex min-h-[50px] w-auto cursor-pointer  items-center justify-between whitespace-nowrap border-none  bg-black px-[15px] text-left hover:text-[#767677] "
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
  );
}

export default Order