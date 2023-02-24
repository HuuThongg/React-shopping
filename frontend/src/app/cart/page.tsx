import React from 'react'
import SidePanelOverlay from '../components/SidePanel/SidePanelOverlay'
import CheckoutPage from './components/CheckoutPage'

const page = () => {
  return (
    <div className='pt-[150px]'>
      <CheckoutPage/>
      <SidePanelOverlay/>
    </div>
  )
}

export default page