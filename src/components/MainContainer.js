import React from 'react'
import ButtonList from './ButtonList'
import SideBar from './SideBar'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='col-span-11'>
      
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainContainer
