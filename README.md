## Cloning and Running the Application in local

Clone the project into local

Install all the npm packages. Go into the project folder and type the following command to install all npm packages

```bash
npm install
```

In order to run the application, type the following command

```bash
npm start
```

In order to run the tests for the tax and superannuation calculator,  type the following command

```bash
npm run test
```

The Application Runs on **localhost:3000**


## Design Choices

The information included for the onboarding form are: 

    First Name,
    Last Name,
    Email,
    Phone,
    Date of birth,
    Street address,
    Suburb,
    City,
    State,
    Zipcode,
    Drivers license,
    Emergency contact,
    Relationship to Emergency contact,
    Emergency contact phone,
    Bank name,
    Account number,
    Bsb,
    Start date

This form is structured so that it places all personal details of the employee at the top such as name, address and phone. I included date of birth and driver licence in order to ensure the employee identity is verified. A section is included for emergency contact so in the event that accidents and medical emergencies happen in the workplace, there is an up-to-date emergency contact list/s. Another section is included for bank name, the account number and bsb number for payroll purposes.



## Assumptions

The assumptions made with the design of the onboarding form is that there will be additional forms that will have the employee supply details of tax file number. Thus, I did not include those fields in the design. 

The assumptions made with the tax and superannuation calculator is that Super is calculated by multiplying the gross salary and wages by **10.5%**.