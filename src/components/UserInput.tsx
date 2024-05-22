

type changeProp = {
  onChangeInput: (inputId: string, newValue: number) => void
  userInput:{
    initialInvestment: number
    annualInvestment: number
    expectedReturn: number
    duration: number
  }
}
const  UserInput = ({onChangeInput, userInput}: changeProp) => {
   
   
  return (
    <section className=" text-[#fff] max-w-[32rem] p-4 rounded mt-8 mb-8 ml-auto mr-auto bg-gradient-to-r from-teal-500 to-green-500">
    <div className=" flex flex-col justify-evenly gap-5">
      <div className=" sm:flex gap-10">
        <div>
        <label className=" block mb-1 text-sm font-bold uppercase">initial investment</label>
        <input value={userInput.initialInvestment} onChange={(event) => onChangeInput("initialInvestment", parseFloat(event.target.value) )} required min={0} className=" bg-inherit border-[#c2e9e0] border-2 rounded focus:outline-none p-2" type="number"/>
        </div>
        <div>
        <label className=" block mb-1 text-sm font-bold uppercase">annual investment</label>
        <input value={userInput.annualInvestment} onChange={(event) => onChangeInput("annualInvestment", parseFloat(event.target.value))} required min={0} className=" bg-inherit border-[#c2e9e0] border-2 rounded focus:outline-none p-2" type="number"/>
        </div>
      </div>
      
      <div className=" sm:flex gap-10">
        <div>
        <label className=" block mb-1 text-sm font-bold uppercase">expected return</label>
        <input value={userInput.expectedReturn} onChange={(event)=> onChangeInput("expectedReturn", parseFloat(event.target.value))} required min={0} className=" bg-inherit border-[#c2e9e0] border-2 rounded focus:outline-none p-2" type="number"/>
        </div>
        <div>
        <label className=" block mb-1 text-sm font-bold uppercase">durationn</label>
        <input value={userInput.duration} onChange={(event) => onChangeInput("duration", parseFloat(event.target.value))} required min={0} className=" bg-inherit border-[#c2e9e0] border-2 rounded focus:outline-none p-2" type="number"/>
        </div>
      </div>
     
     
    </div>
   </section>
  )
}

export default UserInput
