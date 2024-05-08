
import CurrencyConvert from "./components/CurrencyConvert"
import ExchangeBoard from "./components/ExchangeBoard"
import Header from "./components/Header"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

function App() {

  
  return (
    <>
   
  
  <Header/>
     <CurrencyConvert/>
      <ExchangeBoard/>
 
    </>
  )
}

export default App
