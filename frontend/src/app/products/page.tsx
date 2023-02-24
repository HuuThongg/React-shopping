import React from 'react'
import SidePanelOverlay from '../components/SidePanel/SidePanelOverlay'
import MainShop from './components/MainShop/MainShop'
export const metadata = {
  title: 'Adidas Products',
}
const page = () => {
  return (
    <div className='relative'>
      <MainShop/>
      <SidePanelOverlay/>
    </div>
  )
}

export default page