import React, {useRef} from 'react'
import {Form, Button, Card} from 'react-bootstrap'


function Signup() {
    const emailRef=useRef()
    const passwordRef=useRef()
    const passwordConfirmationRef=useRef()
    return (
        <div>
            <Card >
                <Card.Body>
                    <h2 className='text-center mb-4'>Sign Up</h2>
                    <Form>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required ></Form.Control>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required></Form.Control>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmationRef} required></Form.Control>
                        </Form.Group>
                        <Button className="w-100 mt-4" type="submit">Submit</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className='w-100 text-center mt-2'>
                Already Have an account? Log In
            </div>
    </div>
    )
}

export default Signup
