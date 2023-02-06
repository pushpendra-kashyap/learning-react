import React from 'react'

function AdavanceCard(props) {
  return (
    <div>
        <p>{props.message}</p>
        {props.children}
    </div>
  )
}

export default AdavanceCard