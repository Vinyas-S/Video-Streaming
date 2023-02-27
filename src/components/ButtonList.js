import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const buttons = [
    "All",
    "Cricket",
    "React",
    "India",
    "JSX",
    "Mixes",
    "Music",
    "Live",
    "Computers",
    "Kannada Cinema",
    "New to you",
  ];
  return (
    <ul className='flex'>
      {buttons.map((button) => (
        <li
          key={button}
          className=" border-2 br-black py-1 px-3 rounded-md m-2 cursor-pointer"
        >
          <Button name={button} />
        </li>
      ))}
    </ul>
  )
}

export default ButtonList
