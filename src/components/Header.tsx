import {FaBars} from "react-icons/fa"
import { Link } from "react-router-dom";
const  Header = () => {
  return (
    <header className=" bg-[#323544] text-[#ccc]">
      <div className=" hidden sm:flex justify-evenly text-sm leading-[67px]" >
        <span>Currencywise</span>
        <nav>
            <ul className=" flex space-x-6  ">
            <Link to="/" className=" cursor-pointer hover:text-[#fff]  max-h-14 hover:border-b-2 transition-all "> Currency Converter</Link>
            <Link to="/exchangerates"  className=" cursor-pointer hover:text-[#fff]  max-h-14 hover:border-b-2 transition-all"> Exchange Rate </Link>
            <Link to="/investment-calculator"  className=" cursor-pointer hover:text-[#fff]  max-h-14 hover:border-b-2 transition-all">Investment Calculator</Link>
            </ul>
        </nav>
      </div>
        <div className=" sm:hidden cursor-pointer flex p-5 hover:text-[#fff]">
          <FaBars/>

          
        </div>
    </header>
  )
}
export default Header;
