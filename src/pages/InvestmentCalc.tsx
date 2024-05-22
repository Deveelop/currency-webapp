import { useState } from "react";
import imglogo from "../assets/investment-calculator-logo.png"
import UserInput from "../components/UserInput";
import Results from "../components/Results";
const InvestmentCalc = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0
})

const inputIsValid = userInput.duration >= 1;

const handlChange = (inputId:string, newValue:number) => {
  setUserInput(prevInput =>{
   return{
       ...prevInput,
       [inputId]: newValue
   }
  })
}
  return (
    <div className=" p-4">
      
      <div className=" flex  items-center flex-col gap-3">
     <img src={imglogo} alt="dollar-logo" className=" w-20 h-20 object-contain bg-transparent"/>
     <h1 className=" text-lg text-white">Investment Calculator</h1>
      </div>

      <UserInput onChangeInput={handlChange} userInput={userInput}/>
     { inputIsValid ? <Results userInput={userInput}/> :  <p className=" flex justify-center text-[red]">Please enter a duration greater than zero</p>}

    </div>
  )
}

export default InvestmentCalc;
