import React from 'react'
import {useCalculator} from '../hooks/calculatorContext'

const ButtonPad = () => {
    const displayValue = useCalculator()
    
    return(
    <div className="h-4/5 grid grid-cols-4 gap-0.5">
        {displayValue.buttons.map(element => <button className={`font-bold ${element.styleNames}`} onClick={element.clickFunction}>{element.name}</button>)}
    </div>
    )
}

export default ButtonPad