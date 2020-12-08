import './App.css';
import Display from './components/Display';
import ButtonPad from './components/Buttonpad'
import {CalculatorProvider} from './hooks/calculatorContext'

function App() {
  return (
    <CalculatorProvider>
      <div>
        <h1>Hola Mundo</h1>
        <Display />
        <ButtonPad />
      </div>
    </CalculatorProvider>
  );
}

export default App;
