import AdavanceCard from "./components/AdavanceCard";
import Card from "./components/Card";
import CardWithProps from "./components/CardWithProps";
import ConditionalRendering from "./components/ConditionalRendering";
import LearningState from "./components/LearningState";
import Loop from "./components/Loop";

function App() {

  const print = () => {
    console.log("I am Clicked")
  }

  const press = () => {
    console.log('I am Presshed')
  }

  return (
    <div>
        <div>Hello </div>

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
