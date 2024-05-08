import { useState } from "react";

export const CurrenciesApi = () => {
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [fxRates, setFxRates] = useState<string[]>([])
  const [amount, setAmount] = useState<number>(1);
  const [converting, setConverting] = useState<boolean>(false);
  const [convertedAmount, setConvertedAmount] = useState<string>("");
  const [toCurrency, setToCurrency] = useState<string>('');
  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [error, setError] = useState<string>("");
  const fetchCurrencies = async () => {
    try {
        const res = await fetch("https://api.frankfurter.app/currencies");
        const data = await res.json();
        setCurrencies(Object.keys(data));
    } catch (error) {
        console.error(error);
       
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
      console.log(error)
  } finally {
      setConverting(false)
  }
}

const fetchFxRate = async () => {
try{
  const res = await fetch('https://api.frankfurter.app/latest?amount=1&from=GBP');
  if(!res.ok){
    if(res.status === 404){
      console.log('something went wrong')
    }else{
      console.log('another thing went wrong')
    }
  }
  const data = await res.json();
  setFxRates(data.rates)
  console.log(data.rates)
} catch(err){
  console.log(err)
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
   rateFetch: fetchFxRate

  }
}
