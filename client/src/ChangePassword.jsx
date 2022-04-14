import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header'
import Axios from 'axios'
import "./components/Topbar/bootstrap.css";
import Home from './3984185.jpg'

const ChangePassword = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [user, setUser] = useState('')
    const navigate = useNavigate()

    const findUser = () => {
        Axios.post('/change-password', {
            email,
        })
            .then(response => {
                setUser(response.data.data.user);
                setError([])
            })
            .catch(err => {
                const response = err.response.data.validationError[0];
                console.log(err.response.data.validationError[0]);
                if (response) {
                    setError(`${response.message}`)
                }
            });
    };

    const updatePass = () => {
        let id = user.id
        if (password.length >= 4) {

            if (password === confirmPassword) {
                Axios.post('/update-password', {
                    id, password
                })
                    .then(
                        res => {
                            navigate('/login')
                        }
                    )
            }
            else {
                setError('Passwords do not match')
            }
        }
        else {
            setError('Password: Minimum 4 characters')
        }

    }
    return (

        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundImage: `url(${Home})`, backgroundSize: 'cover' }}>

            <div>
                <Form>
                    <div className="form-group" style={{ border: "1px solid #78c2ad", padding: "20px",height: '50vh', border: "1px solid ",borderRadius:"10px", padding: "20px",backgroundColor:"#fff"  }}>
                        <div className="inputs">
                            <div className='text-left font-weight-bold text-danger '>
                                {error}
                            </div>
                            <h3>Enter your username:</h3>
                            <input type="email" name="email" onChange={(e) => { setEmail(e.target.value) }} /><br /><br />
                            <Button variant='outline-secondary' type="button" onClick={() => findUser()} >Submit</Button><br /><br />
                            {Object.keys(user).length
                                ? <>
                                    <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} /><br /><br />
                                    <input type="password" name="confirmPassword" onChange={(e) => { setConfirmPassword(e.target.value) }} /><br /><br />
                                    <Button variant='outline-secondary' type="button" onClick={() => updatePass()} >Submit</Button>
                                </>

                                : <></>}
                            <br />
                            <Link to="/login" style={{marginTop:"150px",position:"fixed"}}> Log in </Link>
                        </div>
                    </div>
                </Form>
            </div>
        </div>

    )
}

export default ChangePassword