import './App.css';
import { useState } from 'react';
import { calculateTax, calculateSuper } from './utils';
import IncomeForm from './components/IncomeForm';
import Results from './components/Results';
import Footer from './components/Footer';

function App() {
  const [input, setInput] = useState('');
  const [annualTax, setAnnualTax] = useState(0);
  const [annualSuper, setAnnualSuper] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setAnnualTax(calculateTax(Number(input)));
    setAnnualSuper(calculateSuper(Number(input)));
  }

  return (
    <div className="App">
      <header>
        <h1>Tax and Superannuation Calculator</h1>
      </header>
      <IncomeForm 
        input={input}
        setInput={setInput}
        handleSubmit={handleSubmit}
      />
      <Results 
        annualTax={annualTax}
        annualSuper={annualSuper}  
      />
      <Footer />
    </div>
  );
}

export default App;
