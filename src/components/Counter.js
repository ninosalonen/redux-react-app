import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, reset } from '../actions/counter'
import Button from './Button'

const Counter = () => {
  const count = useSelector((store) => store.counter)
  const dispatch = useDispatch()
  return (
    <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
      <Button text={'+'} onPress={() => dispatch(increment())} />
      <Button text={'-'} onPress={() => dispatch(decrement())} />
      <Button text={'0'} onPress={() => dispatch(reset())} />
      <div style={{ fontSize: '5rem' }}>{count}</div>
    </div>
  )
}

export default Counter
