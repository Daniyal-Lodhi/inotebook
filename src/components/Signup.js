import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
    // const host = "http://localhost:5000";
    const navigate = useNavigate();
    const {showAlert}  = props ;
    
    const [credentials, setCredentials] = useState({name:"", email: "", password: "" , cpassword: "" });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`https://inotebook-backend-rho.vercel.app/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name:credentials.name ,email: credentials.email, password: credentials.password })
            
        }
        );
        const json = await response.json()
        console.log(json)
        if(json.success){
            localStorage.setItem('token',json.authToken)
            navigate('/') 
            showAlert('success',"Sign up Successfull")
                }
        else{
            showAlert('danger', `invalid ${json.errors[0].param}`)

        }
        

    }


    return (

        <div className='container'>

            <form className='container'>
            <h1>New to iNotebook? lets make an account</h1>

                
                <div className="mb-3 ">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" value={credentials.name} className="form-control" onChange={onChange} id="name" name='name' aria-describedby="emailHelp" required/>
                </div>

                <div className="mb-3 ">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" value={credentials.email} className="form-control" onChange={onChange} id="email" name='email' aria-describedby="emailHelp" required />
                </div>


                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" value={credentials.password} className="form-control" onChange={onChange}  name='password' id="password" minLength={5} required />
                </div>

                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">Confirm password</label>
                    <input type="password" value={credentials.cpassword} className="form-control" onChange={onChange}  name='cpassword' id="cpassword" minLength={5} required />
                </div>

                <button  className="btn btn-primary" onClick={onSubmit} disabled = {credentials.password==="" || credentials.password!== credentials.cpassword} >Sign up</button>
            </form>
        </div>
    )
}

export default Signup
