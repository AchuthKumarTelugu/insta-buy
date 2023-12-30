
import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom'
import { Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import signupImage from '../assets/signupImage.png'

export default function Signup({setUser}) {
    let [email,setEmail]=useState('')
     let navigate=useNavigate()
    return (
        <div>
            <Row style={{padding:'4rem' ,backgroundColor:'#216ad9',color:'white' ,marginTop:'1rem'}}> 
               
                <Col style={{padding:'5rem 4rem'}}>
                <h1 style={{fontSize:'4rem'}}>InstaBuy!</h1>
                <h5 style={{margin:'2rem 0'}}>One Place where brands come together from all across the world</h5>
                <Form>
                <div>
                    <div style={{display:'flex',justifyContent:'space-between',width:'90%'}}>
                    <Form.Group className="mb-3" style={{width:'47%'}} controlId="formBasicEmail">
                    
                    <Form.Control type="email" placeholder="Enter username" />
                    
                </Form.Group>

                <Form.Group className="mb-3" style={{width:'47%'}} controlId="formBasicPassword">
                   
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                    </div>
               
                
                <Form.Group className="mb-3" controlId="formBasicEmail" style={{margin:'1rem 0'}} >
                    
                    <Form.Control onChange={(e)=>setEmail(e.currentTarget.value)} type="email" style={{padding:'0.7rem',width:'90%'}} placeholder="Enter email" />
                    
                </Form.Group>
                
                <Button  onClick={()=>{
                    localStorage.setItem('userEmail',email)
                    setUser(email)
                    navigate('/')
                }} variant="primary" type="submit" style={{margin:'2rem 0',border:'2px solid white',backgroundColor:'#216ad9',padding:'0.7rem',width:'90%'}}>
                    Join the club
                </Button>
                <div style={{textAlign:'center'}}>
                    Already a member? <a href='/login'  style={{color:'white'}}>Click here</a>
                </div>
                </div>

                
            </Form>
                </Col>
                <Col>
                <img src={signupImage} alt='' style={{width:'40rem'}} className='signup-image'/>
                </Col>
            </Row>
           
        </div>
    )
}