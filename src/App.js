import Card from "./components/Card";
import CardWithProps from "./components/CardWithProps";
import LearningState from "./components/LearningState";

function App() {
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
       <CardWithProps name="himanshu" currentclass="BA"/>
       <CardWithProps name="Pushpa" currentclass="BCA" gender="female"/>
        </div>
        {/* -------------------------------------- */}

        <h3>This is Component with state</h3>
        <LearningState/>

    </div>
  );
}

export default App;
