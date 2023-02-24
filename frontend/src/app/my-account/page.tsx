"use client"
import React from 'react'
import SidePanelOverlay from '../components/SidePanel/SidePanelOverlay'
import Feed from './components/Feed'

const page = () => {
  return (
    <div>
      <Feed/>
      
      <SidePanelOverlay></SidePanelOverlay>
      <div>a</div>
    </div>
  )
}


export default page