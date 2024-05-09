import CurrencyConvert from "./components/CurrencyConvert";
import Header from "./components/Header";
import ExchangeBoard from "./components/ExchangeBoard";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
      <Route  path="/currency-converter" element={ <CurrencyConvert />}/>
      <Route  path="/exchangerates" element={ <ExchangeBoard />}/>
     
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
