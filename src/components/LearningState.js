import React, { useState } from 'react'

function LearningState() {

  const [name, setName] = useState("Pushpa")

  const changeName = () => {
    const names = ["Ram", "shyam", "Dheeraj", "Himanshu", "Mithilesh",]
    const randomIndex = Math.floor(Math.random() * names.length)
    console.log( names[randomIndex])
    setName(names[randomIndex])
  }

  return (
    <div>

    <div>Name:{name}</div>
    <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default LearningState