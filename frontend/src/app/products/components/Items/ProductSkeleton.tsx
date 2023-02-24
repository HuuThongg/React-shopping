import React from 'react'

const ProductSkeleton = ({count}:{count:number}) => {
  return (
    <>
      {[...Array(count)].map((_, i) => (
        // <Skeleton
        //   key={i}
        //   startColor="blackAlpha.400"
        //   endColor="whiteAlpha.300"
        //   height={height}
        //   width={{ base: "full" || width }}
        //   borderRadius={4}
        // />
        <div className=" w-full  h-[323px] screen600:h-[315px] screen960:h-[301px] screen1290:h-[383px] screen1600:h-[467px]  bg-transparent ">
          <div className='w-full h-[239px] screen600:h-[236px] screen960:h-[213px] screen1290:h-[293px] screen1600:h-[380px] bg-[#eceff0]'>
          </div>
          <div className="h-4 mt-4 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[250px] mb-2.5"></div>
          <div className="h-4 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[200px] "></div>
          <div className="h-4 mt-1 bg-gray-200 rounded-sm dark:bg-gray-700 max-w-[150px]"></div>
        </div>
      ))}
    </>
  )
}

export default ProductSkeleton