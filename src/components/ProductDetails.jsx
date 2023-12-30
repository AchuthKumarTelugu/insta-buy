
import React,{useEffect, useState} from 'react'
import {Row,Col,Card} from 'react-bootstrap'
import {useLocation,useNavigate} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
export default function ProductDetails ({handleItemsToCart,cartItems}) {
    let location = useLocation()
    let {title,price,images,description,category,id}=location.state
    console.log(location.state)
    let [otherProducts,setOtherProducts]=useState([])
    useEffect(()=>{
       async function getData () {
          let response=await axios.get(`https://api.escuelajs.co/api/v1/categories/${category.id || 1}/products?limit=23&offset=0`)
          response=response.data
          console.log(response)
          setOtherProducts(response)
       }
         getData()
    },[])
    let navigate=useNavigate()
    return (
        <div style={{padding:'4rem 2rem'}}>
            <Row>
                <Col lg={2}>
                    <div>
                        {
                            images.map((image,index)=>{
                                return (
                                    <img key={index} src={image} style={{width:'9rem',marginBottom:'1rem',borderRadius:'0.4rem'}} />
                                )
                            })
                        }
                    </div>
                </Col>
                <Col lg={4}>
                    <img src={images[0]} style={{width:'19rem',borderRadius:'0.3rem',marginBottom:'1rem'}}/>
                     <h4>{title}</h4>
                     <h6>{description}</h6>
                     <div style={{color:'#216ad9',margin:'1rem 0'}}>${price}</div>
                     <Button onClick={()=>{
                        if(id in cartItems){
                             let currentItem=cartItems[id]
                             handleItemsToCart({[id]:{title,price,quantity:currentItem.quantity+1}})
                        }else{
                            handleItemsToCart({[id]:{title,price,quantity:1}})
                        }
                      

                     }}>Add To Cart</Button>
                </Col>
                <Col >
                    <h3>Other related products</h3>
                    <div style={{display:'flex',flexWrap:'wrap'}}>
                    {
                    otherProducts.map((product) => {
                        if(product.id == id) return
                        return (
                            <Card key={product.id} style={{ width: '9rem',margin:'1rem' }}>
                                <Card.Img variant="top" src={product.images[0]} />
                                <Card.Body>
                                    <Card.Title style={{fontSize:'1rem'}}>{product.title }</Card.Title>
                                    <Card.Text>${product.price}</Card.Text>
                                    <Button variant="primary" onClick={()=>{
                                          navigate(`/productDetail`,{state:product})
                                    }}>View item</Button>
                                </Card.Body>
                            </Card>
                        )
                    })
                }
                    </div>
                </Col>
            </Row>
            
        </div>
    )
}