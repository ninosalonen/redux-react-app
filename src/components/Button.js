import React from 'react'

const Button = ({ text, onPress }) => {
  return (
    <button
      style={{
        fontSize: '3rem',
        backgroundColor: '#2d2d2d',
        color: '#F9F7F5',
        borderRadius: '10px',
        padding: '1rem 1rem',
        cursor: 'pointer',
        margin: '1rem',
      }}
      onClick={onPress}
    >
      {text}
    </button>
  )
}

export default Button
