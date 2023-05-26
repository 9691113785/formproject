import React, { useState } from 'react';
import './App.css'


const App = () => {
  const [inputvalue, setInputValue] = useState('');
  const [birthday, setBirthday] = useState('');
  const [age, setAge] = useState('');
  const [number, setNumber] = useState('');
  const [salary, setSalary] = useState('');
  const [textt, settextt] = useState('');
  const [fchange, setfchange] = useState('');
  const [selectoption, setselect] = useState('')






  const namechange = (e) => {
    const namvalue = /^[a-zA-Z\s]*$/;
    const value = e.target.value;
    if (namvalue.test(value)) {
      setInputValue(value)
    }
    else{
      setInputValue("Enter combination of alphabet and space")
    }
  }

  const birthdaychange = async (e) => {
    setBirthday(e.target.value);
    const today = new Date();
    const birthdate = new Date(birthday);
    const ageMilli = today - birthdate;
    const ageInYears = ageMilli / (365.25 * 24 * 60 * 60 * 1000);
    await setAge(Math.floor(ageInYears));
    console.log(age);

    if (age >= 18) {
setAge(age)    }
    

  }

  const numberchange = (e) => {
    setNumber(e.target.value)
    


  }
  const salarychange = (e) => {
    setSalary(e.target.value)

  }

  const textchange = (e) => {
    settextt(e.target.value)
  }

  const filechange = (e) => {
    const file = e.target.files[0];
    const allowedExtensions = ['.docx', '.pdf'];
    const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
    if (allowedExtensions.includes(fileExtension)) {
      setfchange(file)
    }
    else {
      setfchange(null)
    }
  }

  const optionchange = (e) => {
    setselect(e.target.value)
  }

  const handleclear = () => {
    setInputValue('');
    setBirthday('');
    setAge('');
    setNumber('');
    setSalary('');
    settextt('');
    setfchange('');
    setselect('');


  }
  const onsubmit = ()=>{
    // if (number.length < 10 && number.length > 15) {
    //   setNumber(number)

    // }
    // else{
    //   const value ="Enter Digit between 10 to 15 digit"
    //   setNumber(value)
    // }

  }

  return (
    <div>
      <h1 className='heading'>User Registration</h1>
      <form className='formdata'>
        <label htmlFor='name'>Name :</label>
        <input
          type='text'
          name='name'
          value={inputvalue}
          onChange={namechange}
          required
          placeholder='Enter the Name' />

        <br />

        <label htmlFor='dob'>DOB :</label>
        <input
          type='date'
          name='dob'
          value={birthday}
          required
          onChange={birthdaychange}
        />
        <br />
        {age}

        <label htmlFor='age'>Age :</label>
        <input
          type='number'
          name='age'
          value={age}
          required
        />
        
        <br />

        <label htmlFor='number'>Number :</label>
        <input
          type='number'
          name='number'
          value={number}
          required
          onChange={numberchange}

        />
        
        <br />

        <label htmlFor='salary'>Salary :</label>
        <input
          type='range'
          min='2000'
          max='10000'
          name='salary'
          value={salary}
          required
          step='1'
          onChange={salarychange}

        />
        <input type='text'
          value={salary} />
        <br />

        <label htmlFor='address'>Address :</label>
        <textarea
          name='address'
          value={textt}
          required
          onChange={textchange}

        />
        <br />

        <label htmlFor='gender'>Gender :</label>
        <br/>
        
          Male
          <input
            type='radio'
            name='gender'
            value='Male'

          />
        <br/>
          Female
          <input
            type='radio'
            name='gender'
            value='Female'

          />
        <br />

        <label htmlFor='country'>Country :</label>
        <br/>
        <select >
          <option value={selectoption} onChange={optionchange}>Select Country</option>
          <option value='India'>India</option>
          <option value='Australia'>Australia</option>
          <option value='Pakistan'>Pakistan</option>
          <option value='Bangladesh'>Bangladesh</option>
          <option value='Srilanka'>Srilanka</option>

        </select>

        <br />


        <label htmlFor='upload'>Upload :</label>
        <input
          type='file'
          name='upload'

          onChange={filechange}

        />
        {fchange && <span>{fchange.name}</span>}
        <br />

       

        <button onClick={onsubmit}>Save</button>
        <button onClick={handleclear}>Clear</button>






      </form>


    </div>
  )
}

export default App
