import { useState } from 'react'
import React from 'react'
import './App.css'
import { InputBox } from '../Components'
import useCurrencyInfo from '../hooks/useCurrencyInfo'


function App() {
  const allCurrencyData = useCurrencyInfo()
  const currencyOption1 = Object.keys(allCurrencyData)
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("USD")
  const [to, setTo] = useState("INR")
  const preConvertedAmount = (amount/allCurrencyData[from] * allCurrencyData[to])
  const [convertedAmount, setConvertedAmount] = useState(preConvertedAmount)

  
  const swap = () => {
    setFrom(to)
    setTo(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }
  const convert = () => { setConvertedAmount(amount/allCurrencyData[from] * allCurrencyData[to]) }
  const BackgroundImage = "https://t3.ftcdn.net/jpg/04/34/58/54/360_F_434585463_zpdtTpTEbqQFfsp6RVEW6IIxEM9dHf86.jpg"

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat ' style={{ backgroundImage: `url('${BackgroundImage}')`, }} >
        <div className=''>
          <div className='w-full max-w-wid mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30 pt-4 '>
          <h1 className='text-white text-center py-2 text-2xl pb-3'>CURRENCY CONVERTOR</h1>
            <form onSubmit={
              (e)=>{e.preventDefault();
                convert()}
            }>
              <div className='w-xl mb-1'>
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOption={currencyOption1}
                  onCurrencyChange={(currency) => setFrom(currency)}
                  onAmountChange={(amount)=>setAmount(amount)}
                  selectCurrency={from}
                  disabled={false}

                  
                />
              </div>

              <div className='relative w-full h-0.5'>
                <button onClick={swap} type='button' className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white bg-blue-500 rounded-md text-white px-2 py-0.5 cursor-pointer'>Swap</button>
              </div>
              <div className='w-xl mb-4 mt-2'>
              <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOption={currencyOption1}
                  onCurrencyChange={(currency) => setTo(currency)}
                  // onAmountChange={(convertedAmountamount)=>setAmount(convertedAmount)}
                  selectCurrency={to}
                  disabled={true}
                  
                />
              </div>

              <button type='submit' className='w-full bg-blue-500 text-white px-4 py-3 rounded-md border-white cursor-pointer border-2'>
                Convert: {from} to {to}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
