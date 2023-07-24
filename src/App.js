import React from 'react'
import Link from './components/Link'
import Route from './components/Route'
import AccordionPage from './pages/AccordionPage'
import DropDownPage from './pages/DropdownPage'


const App = () => {
  return (
    <div>
      <Link to={"/accordion"}>go accordion</Link>
      <Link to={"/dropdown"}>go dropdown</Link>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropDownPage />
        </Route>
      </div>
    </div>
  )
}

export default App