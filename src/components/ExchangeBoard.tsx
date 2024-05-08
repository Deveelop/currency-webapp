import { useEffect } from "react";
import { CurrenciesApi } from "./api/currencies-api"

const ExchangeBoard = () => {

  const {rateFetch: fetchFxRates} = CurrenciesApi();
  
  useEffect(() => {
   fetchFxRates()
  }, [])
  return (
    <div>
      <h1>Exchangerate Here</h1>
      
    </div>
  )
}

export default ExchangeBoard
