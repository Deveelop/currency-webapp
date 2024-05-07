import { ChangeEvent, useEffect, useState } from "react"
import CurrencyDropDown from "./CurrencyDropDown"
import { HiArrowsRightLeft } from "react-icons/hi2"
import { CurrenciesApi } from "./api/currencies-api"

const CurrencyConvert = () => {
    
  const {
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
    setFromCurrencyFunc: setFromCurrency} = CurrenciesApi()
   
    const favoritesFromLocalStorage = localStorage.getItem('favorites') as string;
    const initialFavorites: string[] = favoritesFromLocalStorage ? JSON.parse(favoritesFromLocalStorage) : [""];
    const [favorites, setFavorites] = useState<string[]>(initialFavorites);

    const onChangeHandle = (e: ChangeEvent<HTMLInputElement>) => {
        const valueAsNumber = parseFloat(e.target.value);
        setAmount(valueAsNumber);
    }

   

    useEffect(() => {
        fetchCurrencies()
    }, [])

   

    const handleFavorites = (currency: string) => {
        let updatedFavorites = [...favorites];

        if (favorites.includes(currency)) {
            updatedFavorites = updatedFavorites.filter((fav) => fav !== currency);
        } else {
            updatedFavorites.push(currency)
        }

        setFavorites(updatedFavorites)
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites))
    }

    const swapCurrencies = () => {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);
    }

    const isContain = () => convertedAmount.length > 1

    return (
        <div className="max-w-xl m-auto my-10 p-5 bg-white rounded-lg shadow-md">
            <h2 className="mb-5 text-2xl font-semibold text-gray-700">Currency Converter</h2>
            <div className="border-b-2 mb-2" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
                <CurrencyDropDown
                    favorites={favorites}
                    currencies={currencies}
                    title="From"
                    currency={fromCurrency}
                    setCurrency={setFromCurrency}
                    handleFavorites={handleFavorites}
                />
                <div className="flex justify-center -mb-5 sm:mb-0">
                    <button onClick={swapCurrencies} className="p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300">
                        <HiArrowsRightLeft className="text-xl text-gray-700" />
                    </button>
                    
                </div>
                <CurrencyDropDown
                    favorites={favorites}
                    currencies={currencies}
                    title="To"
                    currency={toCurrency}
                    setCurrency={setToCurrency}
                    handleFavorites={handleFavorites}
                />
            </div>
            {isContain() ? "" : <p className="text-red-500 animate-bounce">{error}</p>}
            <div className="mt-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">Amount:</label>
                <input
                    value={amount}
                    onChange={onChangeHandle}
                    type="number"
                    className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mt-1"
                />
            </div>
            <div className="flex justify-end mt-6">
                <button
                    onClick={convertCurrencies}
                    className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${converting ? "animate-pulse" : ""}`}
                >
                    Convert
                </button>
            </div>
            {
                convertedAmount && (
                    <div className="mt-4 text-right font-medium text-lg text-green-600">
                        Converted Amount: {convertedAmount}
                    </div>
                )
            }
        </div>
    )
}

export default CurrencyConvert;
