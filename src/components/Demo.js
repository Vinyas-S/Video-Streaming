import React, { useState } from 'react'

const Demo = () => {
    const [text,setText]=useState()
  return (
    <div className='m-4 p-2 w-96 h-96 border border-black'>
      <input type="text" className='border border-black w-72 px-2' value={text}></input>
      
    </div>
  )
}

export default Demo;



