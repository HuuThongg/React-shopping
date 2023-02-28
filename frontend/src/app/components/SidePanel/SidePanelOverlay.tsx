// create a side panel overlay component that will be used to display the side panelr
'use client'
import { useState, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { GrClose } from 'react-icons/gr'
import { toggle_sidePanel } from '@/stores/jotai'
import { useAtom } from 'jotai'
import Image from 'next/image'
import Link from 'next/link'
import { HiOutlineArrowRight } from 'react-icons/hi'
import { HiOutlineCheck } from 'react-icons/hi'
import { useRouter } from 'next/navigation'
const SidePanelOverlay = () => {
  const router = useRouter()
  const [isSidePanelOpen, setIsSidePanelOpen] = useAtom(toggle_sidePanel)

  const ref = useRef<HTMLDivElement>(null);
  const handleSidePanelToggle = ()=>{
    setIsSidePanelOpen(!isSidePanelOpen)
    console.log('handleSidePanelToggle')
  }
  const [portalElement, setPortalElement] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const checkIfLickedOutside = (e : MouseEvent) => {
      // // If the menu is open and the clicked target is not within the menu, then close filter sidebar
      if (isSidePanelOpen && ref.current && !ref.current.contains(e.target as Node))
        setIsSidePanelOpen(false);
    };
    document.addEventListener("mousedown", checkIfLickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfLickedOutside);
    };
  }, [isSidePanelOpen]);

  useEffect(() => {
    setPortalElement(document.getElementById('side-panel-overlay'))
  }, [portalElement])
  return (
    <>
      {portalElement  && (
        createPortal(
          <div className={`${isSidePanelOpen ? "visible" :"invisible"} w-full transistionVisibility bg-[rgba(0,0,0,0.2)]  z-30 block fixed inset-0`}>
            {/* side bar container */}
            <div className={`flex flex-col w-full screen960:w-[23.5rem] h-full bg-[#f9f7f6] fixed top-0 right-0 break-all overscroll-contain ${isSidePanelOpen ? "translate-x-[0%]" : "translate-x-[100%]"} transition-transform ease-[cubic-bezier(0.25,0.1,0.25,1)]    duration-200  delay-300`} 
            ref={ref}
            >
              <div className=' py-[15px] pr-5 pl-[40px] sticky top-0 bg-white flex items-center w-full'>
                <div className='ml-[15px] pt-1 flex-1 text-6 font-bold tracking-wide no-underline'>HI THONG</div>
                <div className='cursor-pointer'
                  onClick={handleSidePanelToggle}
                >
                  <GrClose className='text-[24px]'/>
                </div>
              </div>

              <div className='flex flex-wrap px-[55px] pb-[10px] border-b-[1px] border-solid border-[#d3d7da] '>
                <div className='flex-1 basis-[50%]'>
                  <Image src="/adiclub-level-1-badge-MOB-SVG.svg" alt="adiclub-level" width={150} height={41} />
                </div>
                <div className='flex-1 basis-[50%] text-right text-sm font-normal tracking-normal no-underline' >
                  <div className=''>
                    Points to spend
                  </div>
                  <div className='mt-2 flex justify-end'>
                    <Image src="/adiclub-spendable-points-icon-black.svg" width={20}  height={20} alt="adiclub point"  className="mr-1 max-w-full h-auto  " />
                    <strong>0</strong>
                  </div>
                </div>
                <div className='flex-auto basis-full mt-4 '>
                  <div className='w-full h-[3px] bg-[#c4c4c4] shadow-2xl'>

                  </div>
                </div>
                <div className='flex-auto mt-[0.5rem] text-right  text-sm tracking-normal  leading-6 '>
                  Next: LEVEL 2
                </div>
              </div>
              <div className='px-[0.625rem]   pt-5'>
                <div>
                  <div className='mt-2 border border-[#d3d7da]'>
                    <Link href="#" className='relative flex item-center justify-between w-full bg-white p-5 cursor-pointer'>
                      <div className='flex flex-col break-words max-w-[85%] '>
                        <div className='flex items-center font-bold text-base'>
                          Enter now
                        </div>
                        <span className='capitalize  leading-5 text-sm mt-2 max-w-[18rem] break-words overflow-hidden text-ellipsis'>LAGACY FORUM, KAREEM ABDULT-JABBAR</span>
                      </div>
                      <span className='self-center'>
                        <HiOutlineArrowRight
                        className='text-[24px] ' 
                        />
                      </span>
                    </Link>
                  </div>
                  <div className='mt-2 border border-[#d3d7da]'>
                    <Link href="#" className='relative flex item-center justify-between w-full bg-white p-5 cursor-pointer'>
                      <div className='flex flex-col break-words max-w-[85%] '>
                        <div className='flex items-center font-bold text-base'>
                          Enter now
                        </div>
                        <span className='capitalize  leading-5 text-sm mt-2 max-w-[18rem] break-words overflow-hidden text-ellipsis'>LAGACY FORUM, KAREEM ABDULT-JABBAR</span>
                      </div>
                      <span className='self-center'>
                        <HiOutlineArrowRight
                          className='text-[24px] '
                        />
                      </span>
                    </Link>
                  </div>
                </div>
                <div className='mt-5 border border-[#d3d7da]'>
                  <div className='p-5 pb-[30px]'>
                    <p className='font-bold'>Your instant benefits</p>
                    <ul className='flex flex-col '>
                      <li className='mt-4 inline-flex text-sm font-normal leading-5'>
                        <span>
                          <HiOutlineCheck className='text-[24px] mr-2 ml-1'/>
                        </span>
                        Free shipping
                      </li>
                      <li className='mt-4 inline-flex text-sm font-normal leading-5'>
                        <span>
                          <HiOutlineCheck className='text-[24px] mr-2 ml-1' />
                        </span>
                        adiClub points with your order
                      </li>
                    </ul>
                  </div>
                  <div>
                    <Link href="#" className='relative p-5 w-full flex items-center justify-between bg-white cursor-pointer'>
                      <div className=' inline-flex text-sm font-normal leading-5'>
                        
                        <div>
                          Find out more about The adiClub program
                        </div>
                        
                      </div>
                      <span>
                        <HiOutlineArrowRight className='text-[24px] mr-2 ml-1' />
                      </span>
                    </Link>
                    
                  </div>
                </div>
              </div>
              <div className='mt-auto min-h-[130px] sticky bottom-0 w-full '>
                <div className=' absolute bottom-0 h-[90px] p-5 bg-white w-full border border-[#d3d7da]'>
                  <button
                    onClick={() => { handleSidePanelToggle(); router.push('/my-account') }}
                    
                    className=" checkoutShadow  relative inline-flex min-h-[50px] w-full cursor-pointer  items-center justify-between whitespace-nowrap border-none  bg-black px-[15px] text-left transition-colors text-white hover:text-gray-500 font-semibold"
                  >
                    <span className="uppercase">VISIT YOUR ACCOUNT</span>
                    <span className="text-[30px]">
                      <HiOutlineArrowRight />
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        , portalElement
        )
      ) }
    </>
    );
}

export default SidePanelOverlay




