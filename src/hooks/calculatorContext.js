import React, {useContext, useState} from 'react';

const CalculatorContext = React.createContext();


export function useCalculator() {
    return useContext(CalculatorContext)
}

export function CalculatorProvider ({children}){
    const [displayValue, setDisplayValue] = useState('0')    
    
    const addDisplay = (value) => {
        
        (value == "AC") ? setDisplayValue(prevState => '0') : (displayValue == '0') ? setDisplayValue(prevState => value) : setDisplayValue(prevState => prevState+''+value)
    } 
    return (
        <CalculatorContext.Provider value = {{disValue:displayValue, addDisplay}}>
            {children}
        </CalculatorContext.Provider>
    )
}