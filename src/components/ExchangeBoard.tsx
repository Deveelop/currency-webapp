import { useEffect } from "react"
import { CurrenciesApi } from "./api/currencies-api"
import FxItems from "./FxItems";
function ExchangeBoard() {
  const {rateFetch:fetchFxRate, rates, base} = CurrenciesApi();

  useEffect(() => {
    fetchFxRate()
   
  }, [])

  return (
    <div>
  
 

<div className=' lg:mt-40 mt-10'>
     <h1 className=' font-bold text-2xl mb-5 lg:ml-0 ml-10 text-white'>Exchange Rate - Today</h1>
     <div className=' grid lg:grid-cols-4 gap-5 place-items-center'>
     {
    Object.keys(rates).map((key) => (
    <FxItems key={key} fxRates={String(rates[key as keyof typeof rates])} fxSymbol={key} baseRates={base}  />
    
    ))
  }    
     </div>

     </div>

  
  
    </div>
  )
}

export default ExchangeBoard
