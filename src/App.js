import DropDown from './components/DropDown'
import React from 'react'

const App = () => {
  const option = [
    {label:'Red', value:'red'},
    {label:'Green', value:'green'},
    {label:'Blue', value:'blue'}

  ]
  return (
    <div><DropDown option={option}/></div>
  )
}

export default App