import React from 'react'
import {Container,Row} from 'react-bootstrap'
import './Header.css'

const Header = ({title,children}) => {
  return (
    <div className="header">
    <Container>
    <Row>
        <div className="titlecont">
        {
            title &&( <>
            <h1 className="title">{title}</h1>
            <hr className='hr'/></>
            )}
            {children}
        </div>


    </Row>
    </Container>
    </div>
  );
};

export default Header