import React from 'react'

const HeaderBag = ({ amountItems, totalAmount }) => {
  return (
    <header className="float-right flex w-full px-0 ">
      <div className="flex flex-col flex-wrap">
        <div className="mt-3 max-w-[729px] text-[20px] font-bold uppercase">
          <h5 className=" w-full pb-[50px] pt-[30px]">Hello THONG</h5>
        </div>
        <div className="text-[35px] font-bold">
          <h3>YOUR BAG</h3>
        </div>
        <div className="flex flex-wrap ">
          <div className="leading-6">
            <p className="font-normal">
              TOTAL: ({amountItems} items){" "}
              <span className="font-semibold text-black">${totalAmount}</span>
            </p>
          </div>
        </div>
        <div className="mt-2 flex w-full flex-wrap text-[16px]">
          <p>
            Items in your bag are not reserved - check out now to make them
            yours
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeaderBag