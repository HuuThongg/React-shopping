import SidePanelOverlay from '@/app/components/SidePanel/SidePanelOverlay';
import React from 'react'
import Content from './components/Content';
import Sidebar from './components/Sidebar';
// export async function generateStaticParams() {
//   // const posts = await getPosts();

//   // return posts.map((post) => ({
//   //   slug: post.slug,
//   // }));
//   return {
//     slug: "dsadsadsa"
//   }
// }
const page = ({params}:{params:{slug:string}}) => {
  const { slug } = params;
  
//   className = {`relative z-10 w-full ${pathname !== "/" ? "" : "pt-[95px]   md:pt-[100px] "
//     }`
// }
  return (
    <section
      className={`relative z-10 w-full pt-[95px]  md:pt-[100px] `}
    >
      <div className="maxvw relative flex w-full flex-auto overflow-visible flex-col screen960:flex-row" >
        <Content/>
        <Sidebar/>
        <SidePanelOverlay/>
        {/* <Content product={product} />
        <Sidebar product={product} /> */}
      </div>
    </section>
  )
}

export default page