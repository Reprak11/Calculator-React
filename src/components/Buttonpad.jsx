import React from 'react'
import {useCalculator} from '../hooks/calculatorContext'

const ButtonPad = () => {
    const displayValue = useCalculator()
    const valores = [...Array(10).keys()]
    return(<div>
        <button onClick={() => displayValue.addDisplay('AC')}>AC</button>
        {valores.map(element => <button onClick={() => displayValue.addDisplay(element)}>{element}</button>)}
        <button onClick={() => displayValue.addDisplay('.')}>.</button>
    </div>)
}

export default ButtonPad