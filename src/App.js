import Card from "./components/Card";
import CardWithProps from "./components/CardWithProps";

function App() {
  return (
    <div>
        <div>Hello </div>

        {/* Calling Basic Component */}
        <Card/>
        {/*  ----------  Components Card with props ------------- */}
       <CardWithProps name="mithilesh" currentclass="12th"/>
       <CardWithProps name="himanshu" currentclass="BA"/>
       <CardWithProps name="Pushpa" currentclass="BCA" gender="female"/>
        {/* -------------------------------------- */}
    </div>
  );
}

export default App;
