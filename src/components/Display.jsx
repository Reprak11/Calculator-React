import React from 'react'
import {useCalculator} from '../hooks/calculatorContext'

const Display = () => {
    const displayValue = useCalculator()
    return(
    <div className="truncate h-1/5 w-full pt-2 md:pt-0 pr-2 flex flex-col items-end">
        <p className="text-red-700 font-semibold md:text-2xl">{displayValue.disValue}</p>
        <p className="text-gray-50 text-2xl md:text-4xl">{displayValue.disNumber}</p>
    </div>)
}

export default Display