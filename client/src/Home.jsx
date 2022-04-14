import React from 'react'
import { Container, Row, Button } from 'react-bootstrap'
import './Home.css'
import Login from './Login'
import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className='home'>
            <Row >
                <Container className='container'>
                    <div className='text'>
                        <h1>𝕊𝕚𝕘𝕟 𝕚𝕟 𝕆ℝ 𝕊𝕚𝕘𝕟 𝕦𝕡</h1>
                        <div className='buttons'>
                            <NavLink to='/login'>

                                <Button size='lg' className='signin' variant='outline-secondary' onClick={() => <Login />}>
                                    Signin
                                </Button>

                            </NavLink>
                            <NavLink to='/register'>

                                <Button size='lg' className='signup' variant='outline-primary' >
                                    Signup
                                </Button>

                            </NavLink>
                        </div>
                    </div></Container>
            </Row>
        </div>
    )
}

export default Home