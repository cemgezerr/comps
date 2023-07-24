import React from 'react'
import Accordion from '../components/Accordion'

const AccordionPage = () => {
  const items = [
    {
      id:23131,
      label: 'react biliyormuyuz',
      content: 'ne kadar öğrenebiliriz ne kadar öğrenebilirizne kadar öğrenebilirizne kadar öğrenebilirizne kadar öğrenebiliriz'
    },
    {
      id:123123,
      label: 'react biliyormuyuz',
      content: 'ne kadar öğrenebiliriz ne kadar öğrenebilirizne kadar öğrenebilirizne kadar öğrenebilirizne kadar öğrenebiliriz'
    },
    {
      id:1212312,
      label: 'react biliyormuyuz',
      content: 'ne kadar öğrenebiliriz ne kadar öğrenebilirizne kadar öğrenebilirizne kadar öğrenebilirizne kadar öğrenebiliriz'
    },

  ]
  return (
    <div><Accordion items={items}/></div>
  )
}

export default AccordionPage;