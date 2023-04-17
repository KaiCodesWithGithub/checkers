import React from 'react'
import PropTypes from 'prop-types';

const Token = ({ color, isKing }) => {
  return (
    <div style={{ width: '1em', height: '1em', background: color === 'dark' ? '#000' : '#fff', border: '3px solid black', borderRadius: '50%', margin: '.5em', display: 'flex', alignItems: 'center', justifyContent: 'center', color: color === 'dark' ? "#fff" : "#000" }}>{ isKing && "♔" }</div>
  )
}

Token.propTypes = {
  color: PropTypes.string.isRequired,
  isKing: PropTypes.bool,
}

// tr>th{$}+td.dark.a$+td.light.b$+td.dark.c$+td.light.d$+td.dark.e$+td.light.f$+td.dark.g$+td.light.h$
// tr>th{$}+td.light.a$+td.dark.b$+td.light.c$+td.dark.d$+td.light.e$+td.dark.f$+td.light.g$+td.dark.h$

export default Token