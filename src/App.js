import { useEffect, useState } from "react";
import AdavanceCard from "./components/AdavanceCard";
import Card from "./components/Card";
import CardWithProps from "./components/CardWithProps";
import ConditionalRendering from "./components/ConditionalRendering";
import LearningState from "./components/LearningState";
import Loop from "./components/Loop";

function App() {

  const [name, setName] = useState('shyam')
  const [age, setAge] = useState('70')

  const print = () => {
    console.log("I am Clicked")
  }

  const press = () => {
    console.log('I am Presshed')
  }

  // run every time when component rerender
  useEffect(() => {
    console.log("component rerendered")
  })
  
  // run only one time when component rendered
  useEffect(() => {
    console.log("component rendered")
  },[])
  
  // run only when age changed
    useEffect(() => {
    alert("age changed")
  },[age])

  return (
    <div>
        <div>Hello </div>
      <button onClick={() => setName("birzu")}>print Name</button>
      <p>{name}</p>
      <button onClick={() => setAge("50")}>print age</button>
      <p>{age}</p>
        {/* Calling Basic Component */}
        <h3>This is Basic Component</h3>
        <Card/>
        {/*  ----------  Components Card with props ------------- */}
        <h3>This is Component with props</h3>

        <div style={{display:"flex", gap:"10px"}}>
       <CardWithProps name="mithilesh" currentclass="12th"/>
       <CardWithProps name="himanshu" currentclass="BA" gender="male" click={press}/>
       <CardWithProps name="Pushpa" currentclass="BCA" gender="female" click={print}/>
        </div>

        {/* -------------------------------------- */}
        <h3>This is Component with state</h3>
        <LearningState/>
        {/* -------------------------------------- */}
        <h3>This is Component with ConditionalRendering</h3>
       <ConditionalRendering/>
        {/* -------------------------------------- */}
        <h3>This is Loop</h3>
       <Loop/>
        {/* -------------------------------------- */}
        <h3>This is AdavanceCard</h3>
    <AdavanceCard message="hi I am Deepak"/>
    <AdavanceCard message="Are you sure">
      <button>cancel</button>
      <button style={{marginLeft : "10px"}}>Ok</button>
    </AdavanceCard>

    </div>
  );
}

export default App;
