import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../../Redux/Slice/LoginSlice'
import './Login.css'

import { NavLink, useNavigate } from 'react-router-dom'
function Login() {

    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const getdata = (e) => {
        const { value, name } = e.target;
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })

    }
    const dispatch = useDispatch();
    const success = useSelector(state => state.login.success)


    const loginmUser = async (e) => {

        e.preventDefault();
        try {
            dispatch(loginUser(inpval))
            console.log("login success", success)
            if (success === true) {
                alert("Success login")
                navigate("/home")
            }
            // const response = await axios.post('http://localhost:5000/logininfo', inpval);
            // console.log("res", response);
            // if (response.status === 200) {
            //     console.log(response.data)
            //     localStorage.setItem('userInfo', JSON.stringify(response.data));
            //     navigate('/land');
            // }

            // else {
            //     alert(response.data)
            // }
        }
        catch (error) {

            alert('Error:', error);
        }
    }


    return (
        <div className="container">
            <div id='log-for'>
                <div className="log">Login / <NavLink to={'/signup'}>SignUp</NavLink></div>
                <div className="forget">Forget your password?</div>
            </div>
            <form action="" method="get" onSubmit={loginmUser}>
                <input type="email" name='email' required onChange={getdata} placeholder='Email' className='email' />
                <input type="password" className='password' required onChange={getdata} name="password" id="" placeholder='Password' />
                <div id="cont-text">
                    <input type="checkbox" name="" id="checkbox" />
                    <div className="typography">
                        <div className="textopt">Keep me logged in - applies to all log in options below. </div>
                        <div className="moreinfo">More info</div>
                    </div>
                </div>
                <div className="btn-container">
                    <button type='submit' >EMAIL LOGIN</button>
                </div>
            </form>
            <div className="typo-tems">By clicking 'Log In' you agree to our website Kicks<span className='inner-txt'>Club Terms & Conditions, Kicks Privacy Notice and Terms & Conditions.</span></div>
        </div>

    )
}

export default Login