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
        setDisplayValue(eval(displayValue).toFixed(8))
        setDisplayNumber(eval(displayValue).toFixed(8))
    }

    const buttons = [
        {name: 'AC',
        styleNames:"col-span-2 btn-red",
        clickFunction:() => addDisplay('AC')
        },
        {name: '/',
        styleNames:"btn-blue",
        clickFunction:() => addOperator('/')
        },
        {name: 'x',
        styleNames:"btn-blue",
        clickFunction:() => addOperator('*')
        },
        {name: '7',
        styleNames:"btn-darkblue",
        clickFunction:() => addDisplay(7)
        },
        {name: '8',
        styleNames:"btn-darkblue",
        clickFunction:() => addDisplay(8)
        },
        {name: '9',
        styleNames:"btn-darkblue",
        clickFunction:() => addDisplay(9)
        },
        {name: '-',
        styleNames:"btn-blue",
        clickFunction:() => addOperator('-')
        },
        {name: '4',
        styleNames:"btn-darkblue",
        clickFunction:() => addDisplay(4)
        },
        {name: '5',
        styleNames:"btn-darkblue",
        clickFunction:() => addDisplay(5)
        },
        {name: '6',
        styleNames:"btn-darkblue",
        clickFunction:() => addDisplay(6)
        },
        {name: '+',
        styleNames:"btn-blue",
        clickFunction:() => addOperator('+')
        },
        {name: '1',
        styleNames:"btn-darkblue",
        clickFunction:() => addDisplay(1)
        },
        {name: '2',
        styleNames:"btn-darkblue",
        clickFunction:() => addDisplay(2)
        },
        {name: '3',
        styleNames:"btn-darkblue",
        clickFunction:() => addDisplay(3)
        },
        {name: '=',
        styleNames:"row-span-2 btn-red",
        clickFunction:() => result()
        },
        {name: '0',
        styleNames:"col-span-2 btn-darkblue",
        clickFunction:() => addDisplay(0)
        },
        {name: '.',
        styleNames:"btn-darkblue",
        clickFunction:() => addPoint()
        }
    ]

    const store = {
        disValue: displayValue, 
        disNumber: displayNumber,
        buttons: buttons,
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