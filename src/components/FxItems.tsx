type FxProps = {
    fxSymbol: string
    fxRates: string
}

const FxItems = ({fxRates, fxSymbol}: FxProps) => {
  return (
    <div>
      <span>
        {fxSymbol}
      </span>
      <span>
        {fxRates}
      </span>
    </div>
  )
}

export default FxItems
