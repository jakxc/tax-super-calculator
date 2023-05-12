import './index.css'

const Results = ({ annualTax, annualSuper }) => {
    return (
        <div className='results-container'>
            <div className='result'>
            <h3>Calculated Annual Tax: </h3>
            <p>AU$ {annualTax}</p>
            </div>
            <div className='result'>
            <h3>Calculated Annual Superannuation: </h3>
            <p>AU$ {annualSuper}</p>
            </div>
        </div>
    )
}

export default Results;