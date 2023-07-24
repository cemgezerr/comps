import React from 'react'
import classNames from 'classnames'

const Panel = ({children, className ,...rest}) => {
   const finalClassNames = classNames('border rounded p-3 shadow bg-white',classNames)
  return (
    <div {...rest} className={finalClassNames}>{children}</div>
  )
}

export default Panel