
import { HiOutlineStar, HiStar } from 'react-icons/hi';


type CurrencyDropDownProps = {
  currencies: string[];
  currency: string
  selectedCurrency?: string;
  setCurrency: (currency: string) => void;
  favorites: string[];
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
 
  const isFavorites = (curr:string) => favorites.includes(curr)

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
          {/* remember to work on errors here */}
          {/* also remember to add tooltip to the favorites button */}
         {favorites?.map((fav) => (
          
        <option className=' bg-yellow-600 text-white ' value={fav} key={fav}>
          {fav}
        </option>
         ))}
          {currencies.filter((c) => !favorites?.includes(c)).map((curr) => (
            <option value={curr} key={curr}>
              {curr}
            </option>
          ))}
        </select>
        <button onClick={handleFavorites} className=' absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5'>
        {isFavorites(currency) ? <HiStar className=' text-yellow-600'/> :  <HiOutlineStar/> }
        
       
        </button>
      </div>
    </div>
  );
};

export default CurrencyDropDown;
