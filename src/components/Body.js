import React from 'react'
import SideBar from './SideBar'
import { useSelector } from "react-redux";
import {Outlet} from "react-router-dom"
const Body = () => {

  const isLight = useSelector((store) => store.theme.isLight);

  return (
    <div className={`${
      isLight ? "bg-white text-black" : "bg-black text-white"
    } flex`}>
      
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Body
