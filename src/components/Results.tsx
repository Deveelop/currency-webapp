import { calculateInvestmentResults, formatter } from "./Investment"

type ResultsProps = {
    userInput:{
        initialInvestment: number
        annualInvestment: number
        expectedReturn: number
        duration: number
      }
}

const Results = ({userInput}:ResultsProps) => {
    const resultsData = calculateInvestmentResults(userInput);
    const initialInvestment = resultsData[0].valueEndOfYear - resultsData[0].interest - resultsData[0].annualInvestment;

    return (
      <>
    <table className=" min-w-[50rem] mt-8 mb-8 ml-auto mr-auto p-4 hidden sm:table table-fixed border-spacing-4 text-right">
        <thead className=" text-sm text-[#83e6c0] ">
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
        </thead>
         <tbody className=" text-sm text-[#c2e9e0]">
            {resultsData.map( yearData => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
            })}
         </tbody>
    </table>
    <div>
      <div className=" flex sm:hidden flex-col justify-center">
      {resultsData.map( yearData => {
                const totalInterest = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment
                const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
                return <div className=" border-b-2 border-white mb-2" key={yearData.year}>
                  <div> <span className=" text-sm text-[#83e6c0] ">Year:</span>  <span className=" text-sm text-[#c2e9e0]" >{yearData.year}</span> </div>
                   <div> <span className=" text-sm text-[#83e6c0] ">Investment Value: </span> <span className=" text-sm text-[#c2e9e0]">{formatter.format(yearData.valueEndOfYear)}</span> </div>
                   <div> <span className=" text-sm text-[#83e6c0] ">Interest (Year):</span> <span className=" text-sm text-[#c2e9e0]">{formatter.format(yearData.interest)}</span> </div>
                   <div> <span className=" text-sm text-[#83e6c0] ">Total Interest:</span> <span className=" text-sm text-[#c2e9e0]">{formatter.format(totalInterest)}</span> </div>
                   <div> <span className=" text-sm text-[#83e6c0] ">Invested Capital:</span> <span className=" text-sm text-[#c2e9e0]">{formatter.format(totalAmountInvested)}</span> </div>
                </div>
            })}
      </div>
    </div>

    </>
  )
}

export default Results
