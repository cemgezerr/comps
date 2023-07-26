import React from 'react'
import Button from '../components/Button';
import useCounter from '../hooks/use-counter';



const CounterPage = ({initialCount}) => {
  const {counter,increment } = useCounter(initialCount)


  return (
    <div>
    <h1>Count is {counter}</h1>
    <Button onClick={increment}>Tıkla</Button>
    </div>
  )
}

export default CounterPage