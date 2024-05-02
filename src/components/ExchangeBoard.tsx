import { useEffect } from "react";
import { CurrenciesApi } from "./api/currencies-api"
import FxItems from "./FxItems";
const ExchangeBoard = () => {

  const {rateFetch: fetchFxRates, rates} = CurrenciesApi();
  
  useEffect(() => {
   fetchFxRates()
  }, [])
  return (
    <div>
      <h1>Exchangerate Here</h1>
      {
        Object.keys(rates).map(() => (
          <FxItems fxRates={} fxSymbol={} />
        ))
      }
    </div>
  )
}

export default ExchangeBoard
