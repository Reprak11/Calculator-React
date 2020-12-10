import React from 'react'
import {useCalculator} from '../hooks/calculatorContext'

const Display = () => {
    const displayValue = useCalculator()
    return(<div>
        <p>{displayValue.disValue}</p>
        <p>{displayValue.disNumber}</p>
    </div>)
}

export default Display