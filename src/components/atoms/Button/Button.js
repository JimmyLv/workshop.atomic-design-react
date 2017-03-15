import React from 'react'

function Button(props) {
  return <button {...props} color={'red'}>{props.children}</button>
}

export default Button
