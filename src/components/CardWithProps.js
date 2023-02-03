import React from 'react'

function CardWithProps({name, currentclass, gender}) {
    // console.log(props)
    // console.log(props.name)
    // console.log(props.class)


  return (
      <div style={{border: "black 2px solid"}}>

        <div style={{padding:"3px"}}>
    <div>name: {name}</div>
    <div>class: {currentclass}</div>

    {/* ----------- Conditional Rendering -------- */}
    {/* {props.gender ?  <button>{props.gender}</button> : null} */}
  { gender &&  <button>{gender}</button>}
        </div>
  {/* --------------------------------- */}
    </div>
  )
}

export default CardWithProps