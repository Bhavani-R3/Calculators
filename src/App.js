import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Simple from './component/SimpleInterest';
import CompoundInterest from './component/CompoundInterest';
import Bmi from './component/Bmi';
import SimpleInt from './component/SimpleInt';
import SimpleObject from './component/SimpleObject';
import LoanEmi from './component/LoanEmi';
import Navhead from './component/Navhead';
import Pnf from './component/Pnf';

function App() {
  return (
    <BrowserRouter>
      <Navhead/>
          <Routes>
            <Route path={`/simpleinterest`} element={<SimpleInt/>}/>
            <Route path={`/compoundinterest`} element={<CompoundInterest/>}/>
            <Route path={`/loanemi`} element={<LoanEmi/>}/>
            <Route path={`/bmi`} element={<Bmi/>}/>
            <Route path={`/*`} element={<Pnf/>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;

 {/* <Simple/> 
      <CompoundInterest/> 
      <Bmi/> 
      <SimpleInt/> 
      <SimpleObject/> 
      <LoanEmi/> */}
