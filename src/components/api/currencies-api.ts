import { useState } from "react";

export const CurrenciesApi = () => {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [fxRates, setFxRates] = useState('')
  const [baseRates, setBaseRates] = useState('')
  const [amount, setAmount] = useState<number>(1);
  const [converting, setConverting] = useState<boolean>(false);
  const [convertedAmount, setConvertedAmount] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>('');
  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [error, setError] = useState<string>("");
  const [rateError, setRateError] = useState<string>("");
  
  const fetchCurrencies = async () => {
    try {
        const res = await fetch("https://api.frankfurter.app/currencies");
        const data = await res.json();
        console.log(data)
        setCurrencies(Object.keys(data));
    } catch (error) {
     console.log(error)
       
    }
}

const convertCurrencies = async () => {
  if (!amount){
setError("Please enter valid amount...");
  return;
  }
  setConverting(true)
  try {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      if(!res.ok){
       if(res.status === 404){
        setError("Not found!")
       } else{
        setError("An error occurred. Please try again later...")
       }
      }
      const data = await res.json();
      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency)
      
  } catch (error) {
     
      setError("An error occurred. Please try again later...")
  } finally {
      setConverting(false)
  }
}

const fetchFxRate = async () => {
try{
  const res = await fetch('https://api.frankfurter.app/latest?amount=1&from=USD');
  if(!res.ok){
    if(res.status === 404){
      setRateError('Failed to fetch')
    }else{
      setRateError('An error occurred. Please try again later...')
    }
  }
  const data = await res.json();
  setFxRates(data.rates)
  setBaseRates(data.base)
 
} catch(err){

  setRateError('An error occurred. Please try again later...')
}

}
  return {
   currencieApi:fetchCurrencies,
   currenciesData: currencies,
   convertionApi: convertCurrencies,
   amountEntry: amount,
   convertingData: converting,
   convertedData: convertedAmount,
   toCurrencyData: toCurrency,
   fromCurrencyData: fromCurrency,
   errorData: error,
   setAmountFunc: setAmount,
   setToCurrencyFunc: setToCurrency,
   setFromCurrencyFunc: setFromCurrency,
   rateFetch: fetchFxRate,
   rates: fxRates,
   base: baseRates,
   rateErr: rateError,
  }
}
