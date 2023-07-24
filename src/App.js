import DropDown from './components/DropDown'
import React from 'react'
import { useState } from 'react'

const App = () => {
  const [selection,setSelection] = useState(null);

  const handleSelection = (option) => {
    setSelection(option);
  }
  const option = [
    {label:'Red', value:'red'},
    {label:'Green', value:'green'},
    {label:'Blue', value:'blue'}

  ]
  return (
    <div><DropDown option={option} value={selection} onChange={handleSelection}/></div>
  )
}

export default App