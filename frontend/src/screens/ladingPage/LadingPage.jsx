import {Container, Row, Button} from 'react-bootstrap'
import React from 'react'
import './LandingPage.css'
import { Link } from 'react-router-dom'

const LadingPage = () => {
  return (
    <div className='main'>
      <Container>
        <Row>
            <div className='intro-text'>
                <div>
                    <h1 className='title'>Welcome to Note Zipper</h1>
                    <p className='subtitle'>One safe place for all your notes.</p>
                </div>
                <div className='buttonContainer'>
                <Link className='/login' to='/login'><Button size='lg' className='landingButton'>Login</Button></Link>

                <a href='/register'><Button size='lg' className='landingButton' variant='outline-primary'>Register</Button></a>
                </div>
            </div>
        </Row>
      </Container>
    </div>
  )
}

export default LadingPage
