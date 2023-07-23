import React from 'react'
import Button from './Button'

const App = () => {
  return (
    <div>
      <div><Button primary rounded outline>Selamlar</Button></div>
      <div><Button secondary>Satın Al</Button></div>
      <div><Button success >İade Et</Button></div>
      <div><Button warning >Kargola</Button></div>
      <div><Button danger>Ödeme Yap</Button></div>
    </div>
    
  )
}

export default App