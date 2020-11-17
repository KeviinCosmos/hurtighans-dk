import React from 'react'
import {navigate} from "gatsby"
import PrimaryLayout from "../layouts/PrimaryLayout"
import {Form, Button} from 'react-bootstrap'

const Conact = () => (
    <PrimaryLayout>
            <h1>Contact us today</h1>
            <p>Let's grab a coffee?</p>
            <Button onClick={()=>navigate("/")}>Navigate to Homepage</Button>

            <div className="col-8">
            <Form className="pt-5 pb-5">
                <Form.Group controlId="contactForm.Name">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="text" placeholder="Your name" />
                </Form.Group>
                <Form.Group controlId="contactForm.Email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="contactForm.Message">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="contactForm.submit">
                    <Button>Submit</Button>
                </Form.Group>
            </Form>
            </div>
        
        </PrimaryLayout>
    
)

export default Conact;