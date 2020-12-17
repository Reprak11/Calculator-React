import React from 'react'
import {useCalculator} from '../hooks/calculatorContext'

const Display = () => {
    const displayValue = useCalculator()
    return(
    <div className="truncate h-1/5 w-full pr-2 flex flex-col items-end">
        <p className="text-red-700 font-semibold text-2xl">{displayValue.disValue}</p>
        <p className="text-gray-50 text-4xl">{displayValue.disNumber}</p>
    </div>)
}

export default Display