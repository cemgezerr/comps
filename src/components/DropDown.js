import React from 'react'
import { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from 'react-icons/go'
import Panel from './Panel'

const DropDown = ({ option, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();


  useEffect(() => {
    const handler = (event) => {
      if(!divEl.current){
      return;}

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('click',handler,true);

    return () => {
      document.removeEventListener('click',handler);
    }


  }, [])

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  const handleOptionClick = (option) => {
    setIsOpen(false)
    onChange(option)
  }


  const renderedOption = option.map((option) => {
    return <div className='hover:bg-sky-100 rounded cursor-pointer p-1' onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
  })

  return (
    <div ref={divEl} className='w-48 relative'>
      <Panel className='flex justify-between items-center cursor-pointer' onClick={handleClick}>{value?.label || 'Select...'} <GoChevronDown className='text-xl' /> </Panel>
      {isOpen && <Panel className='absolute top-full'>{renderedOption} </Panel>}
    </div>
  )
}

export default DropDown;