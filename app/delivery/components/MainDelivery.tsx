'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link'
import { GiSmartphone } from 'react-icons/gi'
  ;
import OrderSummary from '@/app/cart/components/OrderSummary';

const MainDelivery = () => {
  const router = useRouter();
  function handleClick() {
    router.push("/home");
  }
  const handleClick1 = () => {
    router.replace('/new-route');
  }
  return (
    <div>
      {/* Logo */}
      <div className="absolute top-0 left-0 z-[106] flex h-[63px] w-full bg-white text-black ">
        <div className="mx-auto my-0 flex w-full max-w-[80rem] flex-wrap">
          <div className="flex w-full items-center justify-between px-[15px] screen1280:ml-[4.1666666667%]">
            <Link
              href="/"
              className='mt-2 h-[60px] w-[60px] bg-[url("https://www.adidas.com/static/checkout/react/edaae5d/assets/img/icon-adidas-logo.svg")] bg-cover bg-center bg-no-repeat'
            >
              <span className="absolute inset-0 h-[1px] w-[1px] overflow-hidden whitespace-nowrap p-0">
                Adidas
              </span>
            </Link>
            {/* container */}
            <div className="flex w-full flex-wrap items-center px-0">
              <div className="ml-[33.33333%] w-[66.666667%] ">
                <div className="flex  justify-end">
                  <div className="inline-flex items-center">
                    <span>
                      <GiSmartphone />
                    </span>
                    <span className="mx-1 tracking-wider">
                      Questions?
                      <div className="inline-block underline">
                        1-800-982-9337
                      </div>
                    </span>
                  </div>
                  <div className="inline-flex items-center">
                    <span className="ml-1">8AM ET – 11PM ET, 7 days a week</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* checkout page */}
      <div className="mx-auto mt-[63px] px-[15px] pb-[30px] pt-0">
        <div className="flex w-full flex-wrap">
          {/* Header */}
          <div className="w-full px-0 screen1280:ml-[4.1666666667%] ">
            <div className="relative flex w-full ">
              <Link href="/" className="mr-5 flex py-[15px]">
                <div className="items-self-center flex w-6 rounded-full bg-black pl-2 text-sm font-bold text-white">
                  1
                </div>
                <div className=" ml-2 uppercase">BAG</div>
              </Link>
              <div className="mr-5 flex py-[15px]">
                <div className="items-self-center flex w-6 rounded-full bg-black pl-2 text-sm font-bold text-white">
                  2
                </div>
                <div className=" ml-2 uppercase">Delivery</div>
              </div>
              <Link href="/" className="mr-5 flex py-[15px]">
                <div className="items-self-center flex w-6 rounded-full bg-black pl-2 text-sm font-bold text-white">
                  3
                </div>
                <div className=" ml-2 uppercase">PAYMENT</div>
              </Link>
              <Link href="/" className="mr-5 flex py-[15px]">
                <div className="items-self-center flex h-6 w-6 justify-self-center rounded-full bg-black pl-2 text-sm font-bold text-white">
                  4
                </div>
                <div className=" ml-2 uppercase">ORDER COMPLETE</div>
              </Link>
            </div>
          </div>
          {/*  */}
          <main className="w-full  px-0 screen960:w-[58.3333333%] screen1280:ml-[4.1666666667%]">
            <div className="mt-[40px] flex-wrap ">
              <h4 className="mb-4  text-[30px] uppercase leading-[24px]">
                Shipping Address
              </h4>
              <p className="mb-4 w-full">
                Get your order sent to your chosen address, or arrange
                collection at a collection point or adidas store
              </p>
            </div>
            <div className="-ml-[10px] flex w-full flex-wrap ">
              <div className="grow-1 m-[10px] max-w-[calc(50%-20px)] shrink-0 basis-[34%] bg-red-200">
                <div className="grow-1 min-h-[12rem] flex-col border border-black p-5">
                  <div className="grow-1 overflow-hidden ">
                    <strong className="w-full font-bold "> Huu Thong Le</strong>
                    <div className="mt-4 text-base leading-[22px]">
                      <div>1565 Ovene</div>
                      <div>San Jose, CAQ, 95723, US</div>
                      <div>510874612</div>
                    </div>
                    <div className='flex grow-1 mt-[16px]'>

                    </div>
                    {/* edit and remove buttons */}
                    <div>
                      <button className="inline cursor-pointer px-[1px] underline capitlize">
                        {" "}
                        Edit
                      </button>
                      <button className="inline cursor-pointer pl-2 underline capitalize ">
                        {" "}
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          <aside className="mt-[40px] bg-red-300 screen960:w-[37.5%] screen1280:ml-[4.1666666667%] screen1280:w-[29.16666666667%]">
            <OrderSummary />
          </aside>
        </div>
      </div>
      <button onClick={() => router.back()}>Go back</button>
      {/* If you need to replace the current location instead of push a new one onto the history stack, use navigate(to, { replace: true }). If you need state, use navigate(to, { state }).  */}
      {/* <Link to="/" state={state} /> */}
      {/* <Navigate to="/" replace  /> */}
      <button onClick={handleClick1}>Replace current location</button>
    </div>
  );
}

export default MainDelivery