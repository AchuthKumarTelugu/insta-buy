
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import carouselOne from '../assets/carouselOne.png'
import carouselTwo from '../assets/carouselTwo.png'
import carouselThree from '../assets/carouselThree.png'
import company1 from '../assets/company1.png'
import company2 from '../assets/company2.png'
import company3 from '../assets/company3.png'
import company4 from '../assets/company4.png'
import company5 from '../assets/company5.png'
import company6 from '../assets/company6.png'
import {useNavigate} from 'react-router-dom'
export default function Home({user}) {
    let navigate=useNavigate();
    const handleCTA = () => {
        console.log('entered cta')
        if(user) {
              //navigate to products page
              navigate('/productsGallery')
        } else {
            navigate('/login')
        }
    }
   
    return (
        <div className='home-container'>
            <Carousel>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{ padding: "8rem" }}>
                                <h3 style={{ fontWeight: "bold", fontSize: "2.2rem",color:'black'    }} > <i> SHOP WITH UTMOST</i> </h3>
                                <h2 style={{ color: "#216ad9", fontWeight: "bold", fontSize: "2rem" }}> <i>STYLE</i> </h2>
                                <h5 style={{marginBottom:"2rem"}}>Shop with latest products at affordable prices and discounts</h5>
                                <div>
                                    <Button style={{padding:'1rem'}} onClick={handleCTA}>Browse Products</Button>
                                </div>
                                <div style={{ marginTop: "4rem" }}>
                                    <h3>Products Available from :</h3>
                                    <div className="companiesList">
                                        <img src={company1} alt="" className="companyItem" />
                                        <img src={company2} alt="" className="companyItem" />
                                        <img src={company3} alt="" className="companyItem" />
                                        <img src={company4} alt="" className="companyItem" />
                                        <img src={company5} alt="" className="companyItem" />
                                        <img src={company6} alt="" className="companyItem" />
                                    </div>
                                </div>
                            </div>

                        </Col>
                        <Col>
                            <img src={carouselOne} alt='' style={{ height: "80vh" ,width:"45vw" }} />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{ padding: "8rem" }}>
                                <h3 style={{ fontWeight: "bold", fontSize: "2.2rem" ,color:'black' }} > <i> SHOP WITH UTMOST</i> </h3>
                                <h2 style={{ color: "#216ad9", fontWeight: "bold", fontSize: "2rem"  }}> <i>DISCOUNT</i> </h2>
                                <h5 style={{marginBottom:"2rem"}}>Shop with latest products at affordable prices and discounts</h5>
                                <div>
                                    <Button style={{padding:'1rem'}} onClick={handleCTA}>Browse Products</Button>
                                </div>
                                <div style={{ marginTop: "4rem" }}>
                                    <h3>Products Available from :</h3>
                                    <div className="companiesList">
                                        <img src={company1} alt="" className="companyItem" />
                                        <img src={company2} alt="" className="companyItem" />
                                        <img src={company3} alt="" className="companyItem" />
                                        <img src={company4} alt="" className="companyItem" />
                                        <img src={company5} alt="" className="companyItem" />
                                        <img src={company6} alt="" className="companyItem" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <img src={carouselTwo} alt='' style={{ height: "80vh" ,width:"45vw" }} />
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col>
                            <div style={{ padding: "8rem" }}>
                                <h3 style={{ fontWeight: "bold", fontSize: "2.2rem",color:'black'   }} > <i> SHOP WITH UTMOST</i> </h3>
                                <h2 style={{ color: "#216ad9", fontWeight: "bold", fontSize: "2rem" }}> <i>VARIETIES</i> </h2>
                                <h5 style={{marginBottom:"2rem"}}>Shop with latest products at affordable prices and discounts</h5>
                                <div>
                                    <Button style={{padding:'1rem'}} onClick={handleCTA}>Browse Products</Button>
                                </div>
                                <div style={{ marginTop: "4rem" }}>
                                    <h3>Products Available from :</h3>
                                    <div className="companiesList">
                                        <img src={company1} alt="" className="companyItem" />
                                        <img src={company2} alt="" className="companyItem" />
                                        <img src={company3} alt="" className="companyItem" />
                                        <img src={company4} alt="" className="companyItem" />
                                        <img src={company5} alt="" className="companyItem" />
                                        <img src={company6} alt="" className="companyItem" />
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <img src={carouselThree} alt='' style={{ height: "80vh" ,width:"45vw" }} />
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}