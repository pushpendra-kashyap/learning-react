import React from 'react'

function CardWithProps(props) {
    console.log(props)
    console.log(props.name)
    console.log(props.class)
  return (
      <>
    <div>name: {props.name}</div>
    <div>class: {props.class}</div>

    {/* ----------- Conditional Rendering -------- */}
    {/* {props.gender ?  <button>{props.gender}</button> : null} */}
  { props.gender &&  <button>{props.gender}</button>}
  {/* --------------------------------- */}
    </>
  )
}

export default CardWithProps