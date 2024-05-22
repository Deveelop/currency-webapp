
import CurrencyConvert from "./pages/CurrencyConvert";
import Header from "./components/Header";
import ExchangeBoard from "./pages/ExchangeBoard";
import InvestmentCalc from "./pages/InvestmentCalc";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
 
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route  path="/" element={ <CurrencyConvert />}/>
      <Route  path="/exchangerates" element={ <ExchangeBoard />}/>
      <Route  path="/investment-calculator" element={ <InvestmentCalc />}/>
      
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
