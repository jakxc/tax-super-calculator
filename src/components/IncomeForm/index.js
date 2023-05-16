import './index.css';

const IncomeForm = ({ input, setInput, handleSubmit }) => {
    return ( 
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='income-container'>
                <span className="currency-code">$</span>
                <input 
                    className='input-income'
                    type='number' 
                    name='income'
                    value={input}
                    placeholder='Enter Annual Income Here'
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <button>Calculate</button>
        </form>
    )
}

export default IncomeForm;