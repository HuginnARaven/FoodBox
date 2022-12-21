import React from "react";

import { Form } from "react-bootstrap";

const LoginFormTest = ({handleSubmit}) => {
    return (
        // Remember to pass an id that will be referenced on the submit button
        <Form onSubmit={handleSubmit} id="myForm">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
        </Form>
    )
}

export default LoginFormTest;