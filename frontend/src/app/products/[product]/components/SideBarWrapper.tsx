import { ReactNode } from "react";

const SideBarWrapper = ({children} :{children:ReactNode}) => {
  return (
    <div className=" px-2 screen600:px-4 screen960:px-0  w-full  shrink-0   grow-0 basis-[450px] border-[1px] border-y-0 border-r-0 border-solid border-slate-300 bg-white screen960:block screen960:max-w-[320px] screen1280:max-w-[430px] screen1280:basis-[430px] screen1440:max-w-[450px] screen1440:basis-[450px] screen1600:max-w-[490px] screen1600:basis-[490px]">
      <div className=" h-0 w-full bg-fuchsia-500 "></div>
      <div className="screen960:m-h-vh positionWebkit sticky top-0 pt-[30px] screen960:w-[320px] screen960:px-[20px] screen1280:w-[430px]  screen1280:px-[30px] screen1440:w-[450px] screen1440:px-[40px] ">
        {children}
      </div>
    </div>
  )
}

export default SideBarWrapper