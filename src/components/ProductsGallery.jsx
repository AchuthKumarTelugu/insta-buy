

import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
export default function ProductsGallery() {
    let [products, setProducts] = useState([])
    useEffect(() => {
        async function getProducts() {
            let products = await axios.get('https://api.escuelajs.co/api/v1/products?offset=0&limit=20')
            console.log(products.data)
            setProducts(products.data)
        }
        getProducts()
    }, [])
    let navigate=useNavigate()
    return (

        <div style={{padding:'4rem'}}>
            <h3>Select the products from here</h3>
            <div style={{display:'flex',flexWrap:'wrap'}}>
                {
                    products.map((product) => {
                        return (
                            <Card key={product.id} style={{ width: '18rem',margin:'1rem' }}>
                                <Card.Img variant="top" src={product.images[0]} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
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
        </div>
    )
}