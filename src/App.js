import './App.css';
import Simple from './component/SimpleInterest';
import CompoundInterest from './component/CompoundInterest';
import Bmi from './component/Bmi';
import SimpleInt from './component/SimpleInt';
import SimpleObject from './component/SimpleObject';
import LoanEmi from './component/LoanEmi';

function App() {
  return (
    <div className="App">
      {/* <Simple/> 
      <CompoundInterest/> 
      <Bmi/> 
      <SimpleInt/> 
      <SimpleObject/> */}
      <LoanEmi/>
    </div>
  );
}

export default App;
