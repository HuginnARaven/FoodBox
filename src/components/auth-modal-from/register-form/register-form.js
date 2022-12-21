import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import "./register-form.css"
import {login, register} from "../../../store/auth/authAction";
import {useDispatch} from "react-redux";


const RegisterForm = (props) => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [accountType, setAccountType] = useState('');
    const [address, setAddress] = useState('');

    const dispatch = useDispatch();
    const close = () => props.handleClose

    let userData = {
        username: username,
        email: email,
        password: password1,
        password2: password2,
        description: description,
        name: name,
        role: accountType,
        address: address
    }

    const dispatchRegister = (userData) => {
        dispatch(register(userData))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`The name you entered was: ${name}`)
    }

    return (
        <div className="registerForm">
            <Form className="justify-content-center" onSubmit={handleSubmit} id="registerForm">
                <Form.Group className="mb-3" controlId="registerFormUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerFormEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="example@test.ua" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerFormPassword1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password1} onChange={(e) => setPassword1(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerFormPassword2">
                    <Form.Label>Repeat password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerFormName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerFormDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="registerFormAccountType">
                    <Form.Label>Account type</Form.Label>
                    <Form.Select aria-label="Account type selector"
                                 as="select"
                                 value={accountType}
                                 onChange={e => {setAccountType(e.target.value);
                                 }}>
                        <option value="C">Company</option>
                        <option value="S">Supplier</option>
                    </Form.Select>
                </Form.Group>
                {accountType === "S" ?
                    <Form.Group className="mb-3" controlId="registerFormAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Input your address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                    </Form.Group> : null}
                <Form.Group className="mb-3 text-center" controlId="registerFormValidationError">
                    <Form.Label>Username or password incorrect!</Form.Label>
                </Form.Group>
                <Row className="justify-content-md-center">
                    <Col md="auto" className="mb-3">
                        <Button className="singupBtn" type="submit" form="registerForm">
                            Sing up
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default RegisterForm;