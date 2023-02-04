import React from 'react'
import CardWithProps from './CardWithProps'

function Loop() {

const students = [
    {
        name:"Mithilesh",
        class:12,
        gender:"male"
    },
    {
        name:"Priyanshu",
        class:11,
        gender:"male"
    },
    {
        name:"Himanshu",
        class:10,
        gender:"male"
    },
    {
        name:"Birzu",
        class:"BA",
        gender:"male"
    },
 
]

  return (
    <div>
    <div>There are {students.length} students</div>
    {students.map((el, index) => 
        <CardWithProps key={index} name={el.name} currentclass={el.class} gender={el.gender} />
    )}
    </div>
  )
}

export default Loop




