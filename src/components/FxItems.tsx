type FxProps = {
    fxSymbol: string
    fxRates: string
    baseRates: string
    rateIcons: React.ReactNode
}

const FxItems = ({fxRates, fxSymbol, baseRates, rateIcons}: FxProps) => {
  return ( <div className=" bg-slate-900 w-[15.5rem] h-[8.5rem]  cursor-pointer rounded">
      <div className='  grid grid-cols-2 items-center justify-center place-items-center w-full h-full'>
            <h4 className='text-gray-400 font-bold'>{fxSymbol} / {baseRates}</h4>
           <span>{/*country flag*/}</span>
            <h4 className=' font-bold'>{/* mini rate chart */}</h4>
            <div className=' flex place-items-center text-xs'><span className=' px-2'>{rateIcons}</span><span className=" text-white">{fxRates}</span></div>
            </div>
            </div>
  )
}

export default FxItems
