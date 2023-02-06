'use client'
import { useCartStore } from '@/stores/useCart';
import React from 'react'

const OrderSummary = () => {
  const storedItems = useCartStore((state) => state.items);
  const totalAmount = useCartStore((state) => state.totalAmount);
  const amountItems = useCartStore((state) => state.amountItems);
  return (
    <div className="mt-[40px] bg-white">
      <div className="relative border border-solid border-[#eceff1] px-[15px] screen960:py-[24px]">
        {/* Order summary */}
        <div>
          <h5 className="mb-[10px] text-[20px] font-bold uppercase">
            order summary
          </h5>
          <div>
            <div className="mb-[10px] flex justify-between">
              <span>Original price</span>
              <span>${totalAmount}</span>
            </div>
            <div className="mb-[10px] flex justify-between">
              <span>Sale</span>
              <span>{storedItems.salePrice?.price}</span>
              {/* <span>-$200.00</span> */}
            </div>
            <div className="mb-[10px] flex justify-between">
              <span className="uppercase">{amountItems} items</span>
              <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className="mb-[10px] flex justify-between">
              <span className="uppercase">delivery</span>
              <span className="uppercase">free</span>
            </div>
            <div className="mb-[10px] flex justify-between">
              <span className="capitalize">sale tax</span>
              <span className="">-</span>
            </div>
            <div className=" flex justify-between">
              <span className="uppercase">Total</span>
              <span className="">${totalAmount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary