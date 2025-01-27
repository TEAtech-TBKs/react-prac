import React from 'react'

// const ButtonComponent = (props) => {
//   return (
//     <button onClick={props.test} className={props.color}>{props.title}</button>
//   )
// }
// or
const ButtonComponent = ({test, title ,color}) => {
  return (
    <button onClick={test} className={color}>{title}</button>
  )
}

export default ButtonComponent