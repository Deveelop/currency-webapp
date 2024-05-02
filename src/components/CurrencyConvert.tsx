import { ChangeEvent, useEffect, useState } from "react"
import CurrencyDropDown from "./CurrencyDropDown"
import {HiArrowsRightLeft} from "react-icons/hi2"


const CurrencyConvert = () => {
  
    const [currencies, setCurrencies] = useState<string[]>([])
    const [amount, setAmount] = useState(1)
    const [ fromCurrency, setFromCurrency] = useState('USD')
    const [ toCurrency, setToCurrency] = useState('INR');
    const [convertedAmount, setConvertedAmount] = useState("")
    const [converting, setConverting] = useState(false)

   
      

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
      const valueAsNumber = parseFloat(e.target.value);
      setAmount(valueAsNumber);
    }
    const fetchCurrencies = async () => {
      try{
        const res = await fetch("https://api.frankfurter.app/currencies");
        const data = await res.json();
        setCurrencies(Object.keys(data));
      }catch(error){
        console.error('encountered error', error)
      }
    }
    useEffect(() => {
      fetchCurrencies()
    }, [])

    

    const convertCurrencies = async () => {
     if (!amount) return;
     setConverting(true)
      try{
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      const data = await res.json();

      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency)
  
     }catch(error){
      console.error("error occured", error);
     } finally {
      setConverting(false)
     }
    }

    const handleFavorites = () => {
      
    }

    const swapCurrencies = () => {
   
  const temp = fromCurrency;
  setFromCurrency(toCurrency);
  setToCurrency(temp);

    }
      
  return (
    <div className=" max-w-xl m-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className=" mb-5 text-2xl font-semibold text-gray-700 ">Currency Converter</h2>
      <div className=" border-b-2 mb-2"/>
      <div className=" grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        <CurrencyDropDown currencies={currencies}  title="From" currency={fromCurrency}
  setCurrency={setFromCurrency} handleFavorites={handleFavorites}/>
        <div className=" flex justify-center -mb-5 sm:mb-0">
          <button onClick={swapCurrencies} className=" p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
          <HiArrowsRightLeft className=" text-xl text-gray-700"/>
          </button>
        </div>
        <CurrencyDropDown currencies={currencies} title="To" currency={toCurrency}
  setCurrency={setToCurrency} handleFavorites={handleFavorites}/>
      </div>
      <div className=" mt-4">
        <label
         htmlFor="amount"
         className=" block text-sm font-medium text-gray-700">Amount:</label>
        <input
        value={amount}
        onChange={onChangeHandle}
         type="number"
         className=" w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500  mt-1"
         />
      </div>

      <div className=" flex justify-end mt-6">
        <button onClick={convertCurrencies} 
        className={` px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${converting ? "animate-pulse" : ""}`}>
          Convert
        </button>
      </div>
      {
        convertedAmount && (<div className=" mt-4 text-right font-medium text-lg text-green-600">
        Converted Amount: {convertedAmount}
      </div>
      )}
      
    </div>
  )
}

export default CurrencyConvert;
