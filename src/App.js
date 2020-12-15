import './App.css';
import Display from './components/Display';
import ButtonPad from './components/Buttonpad'
import {CalculatorProvider} from './hooks/calculatorContext'

function App() {
  return (
    <CalculatorProvider>
        <div className="bg-black h-screen flex flex-col items-center justify-center">
          <h1 className="text-gray-50 pb-12 text-4xl font-semibold">Calculadora con React Hooks</h1>
            <div className=" rounded-sm bg-gray-700 w-2/4 h-3/5">
              <Display />
              <ButtonPad />
            </div>
        </div>
    </CalculatorProvider>
  );
}

export default App;
