import React from 'react'
function InputBox({
    label,
    amount,
    currencyOption=[],
    onAmountChange,/*it's a method*/
    onCurrencyChange, /*it's a method*/
    selectCurrency='USD',
    disable}){
    


    return (
        <>
        <div className='bg-white p-3 rounded-lg text-sm flex'>
            <div className='w-1/2 '>
                <label className='text-black/40 px-2 mb-2 inline-block'>{label}</label>
                <input className='outline-none w-50  bg-gray-300 px-2 py-1.5 rounded-xl' disabled={disable} placeholder='Amount' type='number' value={amount} 
                onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))}/>
            </div>
            <div>
                <p className='text-black/40 px-2 mb-2 inline-block'>Currency Type</p>
                <select className='rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none' value={selectCurrency} 
                onChange={(e)=>{onCurrencyChange && onCurrencyChange(e.target.value)}}>
                    {currencyOption.map((Currency)=>(
                        <option key={Currency} value={Currency}>
                            {Currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
        </>
    )
}
export default InputBox