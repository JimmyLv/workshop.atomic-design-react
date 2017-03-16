import React from 'react'

const BUTTONS = {
  primary: {
    color: 'white',
    backgroundColor: 'blue',
  },
  default: {
    color: 'black',
    backgroundColor: 'white',
  },
  danger: {
    color: 'white',
    backgroundColor: 'red',
  },
}

const Button = ({type = 'default', onClick, children}) => (
  <button
    style={{...BUTTONS[type]}}
    onClick={() => onClick ? onClick(children) : console.info(children)}
  >{children}</button>
)

export default Button
