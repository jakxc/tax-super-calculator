import './index.css';

const IncomeForm = ({ input, setInput, handleSubmit }) => {
    return ( 
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='input-container'>
                <span class="currency-code">$</span>
                <input 
                    type='number' 
                    name='income'
                    value={input}
                    placeholder='Enter Annual Income Here'
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
            <button>Submit</button>
        </form>
    )
}

export default IncomeForm;