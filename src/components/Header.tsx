

const  Header = () => {
  return (
    <header className=" bg-[#323544] text-white leading-[59px]">
      <div className=" flex justify-evenly" >
        <span>Currencywise</span>
        <nav>
            <ul className=" flex space-x-6">
            <li className=" cursor-pointer"> Currency Converter</li>
            <li  className=" cursor-pointer"> Exchange Rate </li>
            <li  className=" cursor-pointer">Investment Calculator</li>
            </ul>
           
        </nav>
      </div>
    </header>
  )
}
export default Header;
