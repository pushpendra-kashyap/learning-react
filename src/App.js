import Card from "./components/Card";
import CardWithProps from "./components/CardWithProps";

function App() {
  return (
    <div>
        <div>Hello </div>

        {/* Calling Basic Component */}
        <Card/>
        {/*  ----------  Components Card with props ------------- */}
       <CardWithProps name="mithilesh" class="12th"/>
       <CardWithProps name="himanshu" class="BA"/>
       <CardWithProps name="Pushpa" class="BCA" gender="female"/>
        {/* -------------------------------------- */}
    </div>
  );
}

export default App;
