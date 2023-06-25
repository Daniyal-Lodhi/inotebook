import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = (props) => {

    const {showAlert} = props
    const host = "http://localhost:5000";
    const navigate = useNavigate();
    
    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    } 

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(json)
        if(json.success){
            localStorage.setItem('token',json.authToken)
            navigate('/')
            showAlert('success',"Logged in Successfull")
            }
        else{
            showAlert('danger',json.error)

        }

    }


    return (

        <div className='container'>
            <form className='container'>
                <h1>Login to continue to iNotebook</h1>
                <div className="mb-3 ">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" value={credentials.email} autoComplete='current-email' className="form-control" onChange={onChange} id="email" name='email' aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={credentials.password} className="form-control" onChange={onChange} autoComplete='current-password' name='password' id="password" />
                </div>
                <button type="submit" className="btn btn-primary" disabled = {credentials.password===""} onClick={onSubmit}>Log In</button>
            </form>
        </div> 
    )
}

export default Login
