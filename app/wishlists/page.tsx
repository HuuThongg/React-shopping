import React from 'react'
import WishLists from './components/WishLists'

const page = () => {
//   className = {`relative z-10 w-full ${pathname !== "/" ? "" : "pt-[95px]   md:pt-[100px] "
//     }`
// }
  return (
    <section
      className={`relative z-10 w-full "pt-[95px]   md:pt-[100px]`}
    >
      <div className="maxvw relative flex w-full flex-auto overflow-visible">
        <WishLists />
      </div>
    </section>
  )
}

export default page