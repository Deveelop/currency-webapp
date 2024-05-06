import { useState } from "react";

export const CurrenciesApi = () => {
  const [currencies, setCurrencies] = useState<string[]>([]);
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
  if (!amount) return;
  setConverting(true)
  try {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`);
      const data = await res.json();
      setConvertedAmount(data.rates[toCurrency] + " " + toCurrency)
  } catch (error) {
      setError("Please check your network!!");
  } finally {
      setConverting(false)
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
   setFromCurrencyFunc: setFromCurrency


  }
}
