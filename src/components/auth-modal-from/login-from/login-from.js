import {Col, Form, Row, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";
import "./login-from.css"
import {useDispatch, useSelector} from "react-redux";
import {auth} from "../../../store/auth/authSlice";
import store from "../../../store/store";
import {login} from "../../../store/auth/authAction";

const LoginForm = (props) => {

    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const isError = useSelector(state => state.auth.error);
    const close = () => props.handleClose
    const dispatchLogin = (username, password) => {
        const userData = {
            username: username,
            password: password
        }
        dispatch(login(userData))
    }
    const is_loading = useSelector((state) => state.auth.isLoading);
    return (
        <div className="loginForm">
            <Form className="justify-content-center">
                <Form.Group className="mb-3" controlId="loginFormUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="loginFormPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3 text-center" controlId="loginFormValidationError">
                    {isError ? <Form.Label>Username or password incorrect!</Form.Label> : null}
                </Form.Group>
                <Row className="justify-content-md-center">
                    <Col md="auto" className="mb-3">
                        <Button className="loginBtn" disabled={is_loading} type="submit" onClick={() => {dispatchLogin(username, password); close()}}>
                            {is_loading ? <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            /> : null}
                            Log in
                        </Button>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}

export default LoginForm;