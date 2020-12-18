import './App.css';
import Display from './components/Display';
import ButtonPad from './components/Buttonpad'
import {CalculatorProvider} from './hooks/calculatorContext'

function App() {
  return (
    <CalculatorProvider>
        <div className="bg-black h-screen flex flex-col items-center justify-center">
          <h1 className="text-gray-50 pb-12 font-semibold text-3xl text-center md:text-4xl">Calculadora con React Hooks</h1>
            <div className="rounded-sm bg-gray-700 w-4/5 h-3/5 md:w-3/5 lg:w-2/4">
              <Display />
              <ButtonPad />
            </div>
        </div>
    </CalculatorProvider>
  );
}

export default App;
