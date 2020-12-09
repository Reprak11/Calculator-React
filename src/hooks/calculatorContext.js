import React, {useContext, useState} from 'react';

const CalculatorContext = React.createContext();


export function useCalculator() {
    return useContext(CalculatorContext)
}

export function CalculatorProvider ({children}){
    const [displayValue, setDisplayValue] = useState('0');
    const [dotUse, setDotUse] = useState(false);    
    
    const addPoint = () => {
        if (dotUse === false){
            setDisplayValue(prevState => prevState+'.')
            setDotUse(true)
        }
    }

    const addOperator = (value) => {
        setDisplayValue(prevState=> prevState+''+value)
        setDotUse(false)
    }

    const restart = () =>{
        setDisplayValue('0')
        setDotUse(false)
    }

    const addDisplay = (value) => {
        (value == "AC") ? restart() : (displayValue == '0') ? setDisplayValue(prevState => value) : setDisplayValue(prevState => prevState+''+value)
    } 

    return (
        <CalculatorContext.Provider value = {{disValue:displayValue, addDisplay, addPoint, addOperator}}>
            {children}
        </CalculatorContext.Provider>
    )
}