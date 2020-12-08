import React from 'react'
import {useCalculator} from '../hooks/calculatorContext'

const Display = () => {
    const displayValue = useCalculator()
    return(<div>
        <h2>Resultado</h2>
        <p>{displayValue.disValue}</p>
    </div>)
}

export default Display