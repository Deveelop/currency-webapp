import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [nav, setnav] = useState(true);
  const handlenav = () => {
    setnav(!nav);
  };
  return (
    <header className=" relative bg-[#323544] text-[#ccc] z-40">
      <div className=" hidden sm:flex justify-evenly text-sm leading-[67px]">
        <span>Currencywise</span>
        <nav>
          <ul className=" flex space-x-6  ">
            <Link
              to="/"
              className=" cursor-pointer hover:text-[#fff]  max-h-14 hover:border-b-2 transition-all "
            >
              {" "}
              Currency Converter
            </Link>
            <Link
              to="/exchangerates"
              className=" cursor-pointer hover:text-[#fff]  max-h-14 hover:border-b-2 transition-all"
            >
              {" "}
              Exchange Rate{" "}
            </Link>
            <Link
              to="/investment-calculator"
              className=" cursor-pointer hover:text-[#fff]  max-h-14 hover:border-b-2 transition-all"
            >
              Investment Calculator
            </Link>
          </ul>
        </nav>
      </div>
      <div className=" sm:hidden cursor-pointer flex p-5 hover:text-[#fff]">
        <nav className=" justify-end w-full flex flex-wrap  place-items-center p-4 pt-3 sm:hidden text-black">
          <button
            onClick={handlenav}
            className="sm:hidden hover:text-[--col] zi-10"
          >
            {!nav ? "" : <FaBars />}
          </button>
        </nav>
      </div>
      <nav
        className={
          !nav
            ? "fixed left-0 top-0 w-full h-screen flex sm:hidden"
            : "fixed hidden sm:hidden "
        }
      >
        <figure className="w-[70%] h-full pb-4 bg-neutral-100 overflow-y-scroll">
          <div className="flex justify-between p-4 pl-3 mt-1 border-b-2 border-gray-400 text-yellow-950">
            <Link to="/" className=" bg-white rounded">
              <span>
              CurrenciWise
              </span>
            </Link>
            <button
              onClick={handlenav}
              className="sm:hidden hover:text-[--col] zi-10"
            >
              {!nav ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          <ul>
            <Link to="/" className="flex flex-col text-yellow-950">
              <p className="font-md text-[--col] p-3"> </p>
              <div className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
                <p className=" cursor-pointer ml-3 ">Currency Converter</p>
              </div>
            </Link>
            <Link to="/exchangerates" className="flex flex-col text-yellow-950">
              <div className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
                <p className=" cursor-pointer ml-3 ">Exchange Rate</p>
              </div>
            </Link>
            <Link to="/investment-calculator" className="flex flex-col text-yellow-950">
              <div className="flex place-items-center p-3 hover:bg-[#3f6eb1] border-b-[1px] font-thin">
                <p className=" cursor-pointer ml-3 ">Investment Calculator</p>
              </div>
            </Link>
          </ul>
        </figure>
        <figure className="w-[30%] h-full bg-black opacity-[0.6]"></figure>
      </nav>
    </header>
  );
};
export default Header;
