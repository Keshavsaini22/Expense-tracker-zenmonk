import React, { useEffect, useState } from 'react'
import validator from 'validator'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { signUpUser } from '../../Redux/Slice/SignUpSlice'
import './SignUp.css'
import { v4 as uuid } from "uuid";
import { useNavigate } from 'react-router-dom'
uuid()

function SignUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const success = useSelector(state => state.signup.success);
    const [input, setinput] = useState({
        name: "",
        email: "",
        expense: 0,
        income: 0,
        password: "",
    })
    const [errorMessage, setErrorMessage] = useState('')
    const getdata = (e) => {
        console.log(e.target.name);
        const { value, name } = e.target;
        setinput(() => {
            return { ...input, [name]: value }
        })

    }


    const addData = async (e) => {
        console.log("adddata")
        e.preventDefault();
        const { firstname, lastname, email, password } = input;
        const data = { ...input }
        console.log(data);

        if (validator.isStrongPassword(password, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            try {
                setErrorMessage('Is Strong Password')
                // const response = await axios.post('http://localhost:5000/signin', data);
                dispatch(signUpUser(data))
                // console.log("res", response);
                console.log("success", success)


            }
            catch (error) {
                alert(error)
                console.error('Error:', error);

            }

        } else {
            setErrorMessage('Is Not Strong Password')
        }
    }

    useEffect(() => {
        if (success === true) {
            alert('Successful SignIn')
            navigate('/login');
        }
    }, [success])
    return (
        <form action="" onSubmit={addData}>
            <div className="signup-container">
                <div className="register">
                    <div className="line1">Register</div>
                </div>
                <div className="your-info">
                    <div className="info-txt">Your Name</div>
                    <input type="text" placeholder='Name' required name='name' onChange={getdata} />
                </div>
                <div className="gender">
                    <h1>Gender</h1>
                    <div className="checkbox">
                        <input type="checkbox" name="male" id="male" /><label htmlFor="male">Male</label>
                        <input type="checkbox" name="male" id="female" /><label htmlFor="female">Female</label>
                        <input type="checkbox" name="male" id="other" /><label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="income">
                    <h1>Income</h1>
                    <input type="number" placeholder='Income' required name='income' onChange={getdata} />
                </div>
                <div className="expense">
                    <h1>Expense</h1>
                    <input type="number" placeholder='Expense' required name='expense' onChange={getdata} />
                </div>
                <div className="login-details">
                    <div className="log-txt">SignUp Details</div>
                    <input type="email" name="email" required id="" placeholder='Email' onChange={getdata} />
                    <div className="log-password">
                        <input type="password" name="password" required id="" placeholder='Password' onChange={getdata} />
                        {errorMessage === '' ? null :
                            <span style={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}>{errorMessage}</span>}
                        <div className="warning-txt">Minimum 8 characters with at least one uppercase, one lowercase, one special character and a number</div>
                    </div>
                </div>
                <div className="termsandc1">
                    <input type="checkbox" name="term1" id="term1" />
                    <label htmlFor="term1">By clicking 'Log In' you agree to our website KicksClub <span>Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.</span></label>
                </div>
                <div className="termsandc2">
                    <input type="checkbox" name="term2" id="term2" />
                    <label htmlFor="term2">Keep me logged in - applies to all log in options below. More info</label>
                </div>
                <button type="submit" className="register-btn">
                    <div className="register-btn-txt">Register</div>
                </button>
            </div>
        </form>
    )
}

export default SignUp