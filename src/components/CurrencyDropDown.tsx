
import { HiOutlineStar } from 'react-icons/hi';


type CurrencyDropDownProps = {
  currencies: string[];
  currency?: string
  selectedCurrency?: string;
  setCurrency: (currency: string) => void;
  favorites?: string[];
  handleFavorites?: (currency:React.MouseEvent<HTMLButtonElement>) => void;
  title?: string;
}

const CurrencyDropDown= ({
  currencies,
  currency,
  selectedCurrency,
  setCurrency,
  favorites,
  handleFavorites,
  title = "",
}: CurrencyDropDownProps) => {
 

  return (
    <div>
      <label
        htmlFor={title}
        className="block text-sm font-medium text-gray-700"
      >
        {title}
      </label>
      <div className=" mt-1 relative">
        <select
        value={currency}
        onChange={(e) => setCurrency(e.target.value)}
         className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
         
          {currencies.map((curr) => (
            <option value={curr} key={curr}>
              {curr}
            </option>
          ))}
        </select>
        <button onClick={handleFavorites} className=' absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5'>
        <HiOutlineStar/>
        </button>
      </div>
    </div>
  );
};

export default CurrencyDropDown;
