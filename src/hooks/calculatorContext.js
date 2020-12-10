import React, {useContext, useState} from 'react';

const CalculatorContext = React.createContext();


export function useCalculator() {
    return useContext(CalculatorContext)
}

export function CalculatorProvider ({children}){
    const [displayValue, setDisplayValue] = useState('0');
    const [displayNumber, setDisplayNumber] = useState('0')
    const [dotUse, setDotUse] = useState(false);    
    
    const addPoint = () => {
        if (dotUse === false){
            setDisplayValue(prevState => prevState+'.')
            setDisplayNumber(prevState=>prevState+'.')
            setDotUse(true)
        }
    }

    const addOperator = (value) => {
        setDisplayValue(prevState=> prevState+''+value)
        setDisplayNumber("0")
        setDotUse(false)
    }

    const restart = () =>{
        setDisplayValue('0')
        setDisplayNumber('0')
        setDotUse(false)
    }

    const addDisplay = (value) => {
        if(value == "AC"){
            restart()
        } else if (displayValue == '0'){
            setDisplayValue(value)
            setDisplayNumber(value)
        } else {
            setDisplayValue(prevState => prevState+''+value)
            if (displayNumber =='0'){
                setDisplayNumber(value)
            } else{
                setDisplayNumber(prevState => prevState+''+value)
            }
        } 
    } 

    const result = () => {
        setDisplayValue(eval(displayValue))
        setDisplayNumber(eval(displayValue))
    }

    const store = {
        disValue: displayValue, 
        disNumber: displayNumber,
        addDisplay,
        addPoint,
        addOperator,
        result
    }

    return (
        <CalculatorContext.Provider value = {store}>
            {children}
        </CalculatorContext.Provider>
    )
}