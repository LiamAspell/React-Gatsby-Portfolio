import React from 'react'
import Card from 'react-bootstrap/Card'
import Certificate from '../assets/images/Selenium.png'

const Certification = (props) => (
        <div className="inner">
                <Card className="bg-dark text-white">
                        <Card.Img src={Certificate} height='500px' alt="Card image" />
                        <Card.ImgOverlay>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.


                                        This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.This is a wider card with supporting text below as a natural lead-in to
                                        additional content. This content is a little bit longer.
                                </Card.Text>
                        </Card.ImgOverlay>
                </Card>

        </div>

)

export default Certification
