import './index.css'
import { useState } from "react";
import { Link } from "react-router-dom";

const OnboardingForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        dateOfBirth: "",
        streetAddress: "",
        suburb: "",
        city: "",
        state: "",
        zipcode: "",
        driversLicense: "",
        emergencyContact: "",
        relationship: "",
        emergencyContactPhone: "",
        bankName: "",
        accountNumber: "",
        bsb: "",
        startDate: ""
    });

    const styles = {
        color: 'rgb(133, 174, 244)'
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    };

    return (
        <>
            <header>
                <h1>Onboarding Form Design</h1>
                <Link to='/app' style={styles}>Go to Tax and Superannuation Calculator</Link>
            </header>
            <form className='form-container'>
                <div className='row-container'>
                    <div className='input-container'>
                        <label for="firstName">First Name</label>
                        <input
                            type="text" 
                            id="name" 
                            name="firstName" 
                            value={formData.firstName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-container'>
                        <label for="lastName">Last Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="lastName" 
                            value={formData.lastName}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                
                <div className='input-container'>
                    <label for="street-address">Address</label>
                    <input 
                        type="text" 
                        id="street-address" 
                        name="streeAddress" 
                        value={formData.streetAddress}
                        onChange={handleChange}
                    />
                </div>

                <div className='row-container'>
                    <div className='input-container'>
                        <label for="suburb">Suburb</label>
                        <input 
                            type="text" 
                            id="suburb" 
                            name="suburb" 
                            value={formData.suburb}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-container'>
                        <label for="city">City</label>
                        <input 
                            type="text" 
                            id="city" 
                            name="city" 
                            value={formData.city}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='row-container'>
                    <div className='input-container'>
                        <label for="state">State</label>
                        <input 
                            type="text" 
                            id="state" 
                            name="state" 
                            value={formData.state}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-container'>
                        <label for="zipcode">Zipcode</label>
                        <input 
                            type="text" 
                            id="zipcode" 
                            name="zipcode" 
                            value={formData.zipcode}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className='row-container'>
                    <div className='input-container'>
                        <label for="email">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-container'>
                        <label for="phone">Mobile</label>
                        <input 
                            type="tel" 
                            id="phone"
                            name="phone" 
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='input-container'>
                    <label for="date-of-birth">D.O.B</label>
                    <input 
                        type="date" 
                        id="date-of-birth" 
                        name="dateOfBirth" 
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                    />
                </div>
                <div className='input-container'>
                    <label for="driver-licence">Driver's Licence</label>
                    <input 
                        type="text" 
                        id="driver-licence" 
                        name="driverLicence" 
                        value={formData.driversLicense}
                        onChange={handleChange}
                    />
                </div>
                <div className='input-container'>
                    <label for="emergency-contact">Emergency Contact</label>
                    <input 
                        type="text" 
                        id="emergency-contact" 
                        name="emergencyContact" 
                        value={formData.emergencyContact}
                        onChange={handleChange}
                    />
                </div>
                <div className='row-container'>
                    <div className='input-container'>
                        <label for="relationship">Relationship</label>
                        <input 
                            type="text" 
                            id="relationship" 
                            name="relationship" 
                            value={formData.relationship}
                            onChange={handleChange}
                        />
                    </div>
                    <div className='input-container'>
                        <label for="emergency-contact-mobile">Mobile No</label>
                        <input 
                            type="tel" 
                            id="emergency-contact-mobile" 
                            name="emergencyContactPhone"
                            value={formData.emergencyContactPhone}
                            onChange={handleChange}/>
                    </div>
                </div>
                <div className='input-container'>
                    <label for="bank-name">Bank Name</label>
                    <input 
                        type="text" 
                        id="bank-name" 
                        name="bankName" 
                        value={formData.bankName}
                        onChange={handleChange}
                    />
                </div>
                <div className='row-container'>
                    <div className='input-container'>
                        <label for="account-number">Account No</label>
                        <input 
                            type="text" 
                            id="account-number" 
                            name="accountNumber" 
                            value={formData.accountNumber}
                            onChange={handleChange} 
                        />
                    </div>
                    <div className='input-container'>
                        <label for="bsb">BSB</label>
                        <input 
                            type="text" 
                            id="bsb" 
                            name="bsb" 
                            value={formData.bsb}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='input-container'>
                    <label for="start-date">Start Date</label>
                    <input 
                        type="date" 
                        id="start-date" 
                        name="startDate" 
                        value={formData.startDate}
                        onChange={handleChange}
                    />
                </div>
            </form>
        </>
    )
}

export default OnboardingForm;