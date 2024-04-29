

const CurrencyConvert = () => {
    // https://api.frankfurter.app/currencies
    // https://api.frankfurter.app/latest?amount=1&from=USD$to=INR
  return (
    <div className=" max-w-xl m-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <h2 className=" mb-5 text-2xl font-semibold text-gray-700">Currency Converter</h2>
      <div>Dropdowns</div>
      <div className=" mt-4">
        <label
         htmlFor="amount"
         className=" block text-sm font-medium text-gray-700">Amount:</label>
        <input
         type="number"
         className=" w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500  mt-1"
         />
      </div>

      <div className=" flex justify-end mt-6">
        <button className=" px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Convert
        </button>
      </div>
      <div className=" mt-4 text-right font-medium text-lg text-green-600">
        Converted Amount: 69 USD
      </div>
    </div>
  )
}

export default CurrencyConvert
