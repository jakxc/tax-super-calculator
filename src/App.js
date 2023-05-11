import './App.css';
import { useState } from 'react';
import { calculateTax, calculateSuper } from './utils';

function App() {
  const [input, setInput] = useState('');
  const [tax, setTax] = useState(0);
  const [superAnn, setSuperAnn] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTax(calculateTax(input));
    setSuperAnn(calculateSuper(input));
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input 
          type='text' 
          name='income'
          value={input}
          placeholder='Enter Income Here'
          onChange={(e) => setInput(Number(e.target.value))}
          />
          <button>Submit</button>
      </form>
      <div>tax: {tax}, super: {superAnn}</div>
    </div>
  );
}

export default App;
