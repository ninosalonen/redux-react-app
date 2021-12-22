import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from './Button'
import boolean from '../actions/boolean'

const Boolean = () => {
  const bool = useSelector((store) => store.boolean)
  const dispatch = useDispatch()
  return (
    <div style={{ display: 'flex', padding: '1rem', alignItems: 'center' }}>
      <Button text={bool ? ':(' : ':)'} onPress={() => dispatch(boolean())} />
      <div style={{ fontSize: '5rem' }}>{bool ? ':)' : ':('}</div>
    </div>
  )
}

export default Boolean
