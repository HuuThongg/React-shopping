import React from 'react'

const AccoutName = () => {
  return (
    <div className="mt-[40px] flex w-full flex-col  bg-white">
      <div className="mx-auto w-full max-w-[1440px] px-[15px]">
        <div className=" float-left flex  w-full items-center justify-between px-[15px] py-[10px]">
          <div className="flex flex-col justify-center">
            <h1 className="pr-[0.5rem] text-3xl font-bold">Huu Thong Le</h1>
            <div className="mt-2 flex items-center justify-start">
              <div className="relative top-1">
                {/*  row*/}
                <div className="flex gap-2">
                  <img
                    src="https://www.adidas.com/glass/react/8e82996/assets/img/membership-home/adiclub-spendable-points-icon-black.svg"
                    alt="x"
                  />
                  <span>6.6366 points to spend</span>
                </div>
              </div>
            </div>
          </div>
          <img
            src="https://www.adidas.com/glass/react/8e82996/assets/img/membership-home/myaccount-redesign/new-adiClub-levels/adiclub-level-4-badge-DT-SVG.svg"
            alt="c"
          />
        </div>
      </div>
    </div>
  );
}

export default AccoutName