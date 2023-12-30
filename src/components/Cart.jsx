
import React, { useEffect, useState } from 'react'
import cartImage from '../assets/cartImage.png'
import { Button, Col, Row, Table } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
export default function Cart ({cartItems,setCartItems}) {
    console.log(cartItems)
    let [totalPrice,setTotalPrice]=useState(0)
    let [totalQuantity,setTotalQuantity]=useState(0)
    useEffect(()=>{
      let tempPrice=0
      let tempQuantity=0
      Object.keys(cartItems).map((cartItemId)=>{
        let product=cartItems[cartItemId]
        tempQuantity+=product.quantity
        tempPrice+=product.price * product.quantity
      })
      setTotalPrice(tempPrice)
      setTotalQuantity(tempQuantity)

    },[])
    let navigate=useNavigate()
    return (
        <div>
           <Row style={{padding:'3rem'}}>
            <Col style={{padding:'2rem'}}>
            <h3>Your cart:</h3>
            <Table bordered style={{border:'2px solid black',marginTop:'3rem'}}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(cartItems).map((cartItemId)=>{
                            let cartItemDetail=cartItems[cartItemId]
                            return (
                                <tr>
                                    <td>{cartItemDetail.title}</td>
                                    <td>{cartItemDetail.price}</td>
                                    <td>{cartItemDetail.quantity}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td>Total</td>
                        <td>{totalPrice}</td>
                        <td>{totalQuantity}</td>
                    </tr>
                </tbody>
            </Table>
            <Button style={{margin:'2rem 0'}} onClick={()=>{
                navigate('/checkout')
                setCartItems([])
        }}>Checkout</Button>
            </Col>
            <Col style={{display:'flex',justifyContent:'center',alignContent:'center'}}>
            <img src={cartImage} alt='' style={{width:'40rem'}}/>
            </Col>
           </Row>

        </div>
    )
}