

const  Header = () => {
  return (
    <header className=" bg-[#323544] text-white leading-[59px]">
      <div className=" flex justify-evenly" >
        <span>Currencywise</span>
        <nav>
            <ul className=" flex space-x-6">
            <li> Currency Converter Calculator</li>
            <li> Exchange Rate </li>
            <li>Investment Calculator</li>
            </ul>
           
        </nav>
      </div>
    </header>
  )
}
export default Header;
