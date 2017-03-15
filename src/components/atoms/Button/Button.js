import React from 'react'

function Button(props) {
  return <button onClick={props.onClick}>{props.children}</button>
}

export default Button
