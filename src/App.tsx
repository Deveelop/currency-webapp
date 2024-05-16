
import CurrencyConvert from "./components/CurrencyConvert";
import Header from "./components/Header";
import ExchangeBoard from "./components/ExchangeBoard";
import InvestmentCalc from "./components/InvestmentCalc";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
 
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route  path="/currency-converter" element={ <CurrencyConvert />}/>
      <Route  path="/exchangerates" element={ <ExchangeBoard />}/>
      <Route  path="/investment-calculator" element={ <InvestmentCalc />}/>
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
