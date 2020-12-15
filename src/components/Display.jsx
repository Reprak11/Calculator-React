import React from 'react'
import {useCalculator} from '../hooks/calculatorContext'

const Display = () => {
    const displayValue = useCalculator()
    return(<div className="pt-5">
        <p className="truncate text-red-700 font-semibold text-2xl">{displayValue.disValue}</p>
        <p className="truncate text-gray-50 text-4xl">{displayValue.disNumber}</p>
    </div>)
}

export default Display