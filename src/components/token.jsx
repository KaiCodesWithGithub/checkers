import React from 'react'

const Token = ({ color, isKing }: {
    color: Any;
    isKing: Boolean;
}) => {
  return (
    <div style={{ boxSizing: 'border-box', width: '1em', height: '1em', background: color === 'dark' ? '#000' : '#fff', border: '3px solid black', borderRadius: '50%', margin: '.5em' }}></div>
  )
}

export default Token