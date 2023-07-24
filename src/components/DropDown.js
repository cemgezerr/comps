import React from 'react'
import { useState } from 'react'

const DropDown = ({ option, selection, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  const handleOptionClick = (option) => {
    setIsOpen(false)
    onSelect(option)
  }


  const renderedOption = option.map((option) => {
    return <div onClick={() => handleOptionClick(option)} key={option.value}>{option.label}</div>
  })

  let content = 'Select...'
  if (selection) {
    content = selection.label
  }
  return (
    <div>
      <div onClick={handleClick}>{content}</div>
      <div>
        {isOpen && <div>{renderedOption}</div>}
      </div>
    </div>
  )
}

export default DropDown