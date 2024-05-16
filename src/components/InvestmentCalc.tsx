import { useState } from "react";
import imglogo from "../assets/investment-calculator-logo.png"
import UserInput from "./UserInput";
import Results from "./Results";
const InvestmentCalc = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
})

const handlChange = (inputId:string, newValue:number) => {
  setUserInput(prevInput =>{
   return{
       ...prevInput,
       [inputId]: newValue
   }
  })
}
  return (
    <div>
      
      <div className=" flex  items-center flex-col gap-3">
     <img src={imglogo} alt="dollar-logo" className=" w-20 h-20 object-contain bg-transparent"/>
     <h1 className=" text-lg text-white">Investment Calculator</h1>
      </div>

      <UserInput onChangeInput={handlChange} userInput={userInput}/>
      <Results userInput={userInput} />

    </div>
  )
}

export default InvestmentCalc;
