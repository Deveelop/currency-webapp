import { useEffect } from "react";
import { CurrenciesApi } from "./api/currencies-api";
import FxItems from "./FxItems";

function ExchangeBoard() {
  const { rateFetch: fetchFxRate, rates, base, rateErr, } = CurrenciesApi();

  useEffect(() => {
    fetchFxRate();
  }, []);

    const isContain = () => rates.length > 1


  return (
    <>
      <div className=" mt-10 p-5">
        <h1 className=" font-bold text-2xl mb-5  text-white">
          Exchange Rate - Today
        </h1>
        
       { isContain() ? "" : <p className=" text-[red]">{rateErr}</p>}
        <div className=" md:grid grid-cols-4 gap-3 space-y-3 md:space-y-0">
          {Object.keys(rates).map((key: any) => {
           
            return <FxItems
              key={key}
              fxRates={String(rates[key as keyof typeof rates])}
              fxSymbol={key}
              baseRates={base}
              rateIcons={
                parseFloat(rates[key]) > 5 ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                    <path fill="#1EB589" fillRule="evenodd" d="M0 4l4-4 4 4z" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="8" height="4">
                    <path fill="#DC414C" fillRule="evenodd" d="M0 0l4 4 4-4z" />
                  </svg>
                )
              }
            />
})}
        </div>
      </div>
    </>
  );
}

export default ExchangeBoard;
