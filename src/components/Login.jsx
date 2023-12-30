
import React,{useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import LoginImage from '../assets/loginImage.png'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'

export default function Login({setUser}) {
   let [email,setEmail]=useState('');
   let navigate=useNavigate()
    return (
        <div>
            <Row style={{ backgroundColor: "#216ad9",padding:'5rem' }}>
                <Col style={{ padding: "6rem" }}>
                    <div style={{ color: 'white' }}>
                        <h1 style={{fontSize:'4rem'}}>InstaBuy!</h1>
                        <h5 style={{margin:'1.5rem 0'}}>One place for all your needs</h5>
                        <Form>
                            <div>
                                <div style={{display:'flex',justifyContent:'space-between',width:'90%',margin:'1rem 0'}}>

                                    <Form.Group style={{width:'47%'}}  className="mb-3" controlId="formBasicEmail">
                                        <Form.Control  onChange={(e)=>setEmail(e.currentTarget.value)} type="email" placeholder="Enter email" />
                                    </Form.Group>

                                    <Form.Group style={{width:'47%'}}  className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>

                                </div>
                                <Button  onClick={()=>{
                                    localStorage.setItem('userEmail',email)
                                    setUser(email)
                                    navigate('/')
                                }}  style={{width:'90%',border:'2px solid white',backgroundColor:'#216ad9'}} variant="primary" type="submit">
                                Start Shopping here
                            </Button>
                            <div style={{marginTop:'1rem',textAlign:'center'}}>
                                Join our club here,<a href="/signup"  style={{color:'white'}}> click here</a>
                            </div>
                            </div>
                           
                        </Form>
                    </div>
                </Col>
                <Col>
                    <img src={LoginImage} alt='' style={{ height: '40rem' }} />
                </Col>
            </Row>
        </div>
    )
}