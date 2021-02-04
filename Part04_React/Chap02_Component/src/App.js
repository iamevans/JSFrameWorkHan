
import CurrencyClass from './components/A01.CurrencyClass';
import CurrencyFn from './components/A02.CurrencyFn';
import RefComponent from './components/A03.RefComponent';
import LifyCycle from './components/A04.LifyCycleClass';
import Controlled from './components/A05.ControlledComponent';

function App() {
  return (
    <div className="card-body">
      <Controlled></Controlled>
      <LifyCycle color="orange"></LifyCycle>
      <RefComponent name="BangJa">
        <div>This is App Component Content.</div>
      </RefComponent>
      <CurrencyFn title="Currency Function Component"></CurrencyFn>
      <CurrencyClass title="Currency Class Component"/>
    </div>
  );
}

export default App;
