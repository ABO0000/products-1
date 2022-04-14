import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import "./components/Topbar/bootstrap.css";
import { Button, Form } from 'react-bootstrap'
import Home from './3984185.jpg'
export default function Register() {
  const [name, setNewName] = useState('');
  const [surname, setSurname] = useState('');
  const [age, setNewage] = useState('');
  const [email, setNewuser] = useState('');
  const [password, setNewpass] = useState('');
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const register = () => {
    axios.post('/register', {
      name,
      surname,
      age,
      email,
      password,
    })
      .then(response => {
        navigate('/login')
        setError([])
        console.log(response)
      })
      .catch(err => {
        const response = err.response.data.validationError[0];
        if (response) {
          setError(`${response.field}: ${response.message}`)
        }
      });
  };


  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: `url(${Home})`, backgroundSize: 'cover' }}>


      <Form >
        <div className="form-group" style={{ border: "1px solid ", borderRadius: "10px", padding: "50px", backgroundColor: "#fff" }}>
          <div className='text-center font-weight-bold text-danger'>
            {error}
          </div>
          <h3>Name:</h3>
          <input type="text" onChange={(e) => { setNewName(e.target.value) }} name="name" /><br />

          <h3>Surname:</h3>
          <input type="text" onChange={(e) => { setSurname(e.target.value) }} name="surname" /><br />

          <h3>Age:</h3>
          <input type="date" onChange={(e) => { setNewage(e.target.value) }} name="age" /><br />

          <h3>Email:</h3>
          <input type="email" onChange={(e) => { setNewuser(e.target.value) }} name="email" /><br />

          <h3>Password:</h3>
          <input type="password" onChange={(e) => { setNewpass(e.target.value) }} name="password" required /><br />

          <div style={{ marginTop: "20px" }} >
            <Button onClick={register} variant="outline-secondary">Register</Button><br />
          </div>

          <Link to='/login'>Login</Link>
        </div>
      </Form >


    </div >
  )
}
