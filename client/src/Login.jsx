import Axios from 'axios';
import React, { useState } from 'react'
import "./components/Topbar/bootstrap.css";
import { useDispatch } from 'react-redux'
import { setUser } from './UserStore'
import { NavLink, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Home from "./3984185.jpg"
export default function Login() {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const login = () => {
    
    Axios.post('/login', {
      email,
      password,
    })
      .then(response => {
        navigate('/products');
        setError([])
        dispatch(setUser(response.data.data.user))
      })
      .catch(err => {
        console.log(err);
        const response = err.response.data.validationError[0];
        if (response) {
          setError(` ${response.message}`)
        }
      });
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage:`url(${Home})`,backgroundSize:'cover'}}>      
      <Form>
        <div className="form-group" style={{ border: "1px solid ",borderRadius:"10px", padding: "20px",backgroundColor:"#fff"  }}>
          <div className="inputs">
            <div className='text-left font-weight-bold text-danger'>
              {error}
            </div>
            <h3>Username:</h3>
            <input type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email" /><br />
            <h3>Password:</h3>
            <input type="password" onChange={(e) => { setPass(e.target.value) }} name="password" /><br /><br />

            <Button variant='outline-secondary' onClick={() => login()} >Login</Button>
            <br /> <br />
            <NavLink to="/Register"> Register </NavLink>
            
          </div><NavLink to="/change-password"> Forgot Password  </NavLink>
        </div>
      </Form>
    </div>
  );
}