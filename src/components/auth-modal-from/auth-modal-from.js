import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './auth-modal-from.css'
import {NavLink} from "react-router-dom";
import LoginForm from "./login-from/login-from";
import RegisterForm from "./register-form/register-form";


const AuthModalFrom = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [modalType, setType] = useState("login");

    const setToLogin = () => setType("login");
    const setToRegister = () => setType("register");

    function modalOpen() {
        handleShow()
        setToLogin()
    }

    return (
        <div className="authModalFrom">
            <Button onClick={modalOpen}>
                Log in
            </Button>
            <Modal className="my-modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{modalType === "login" ? "Log-in form" : "Sing-up form"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {modalType === "login" ? <LoginForm handleClose = {handleClose}/> : <RegisterForm handleClose = {handleClose} setToLogin = {setToLogin}/>}
                </Modal.Body>
                <Modal.Footer>
                        {modalType === "login" ? <div className="registerUrl">
                            Haven`t join us yet?
                            <NavLink onClick={setToRegister}>Sing up now!</NavLink>
                        </div> : <div className="registerUrl">Happy registration :)</div>}
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default AuthModalFrom;