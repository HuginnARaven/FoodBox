import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './login-from.css'
import {Form, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../store/auth/authAction";
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useTranslation} from "react-i18next";

const LoginModal = () => {
    const { t } = useTranslation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    const dispatch = useDispatch();

    let userData = {
        username: username,
        password: password,
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = dispatch(login(userData));
        res.then((value) => {
            if (value.error){
                let errorMsg = JSON.parse(value.payload)
                setErrors(errorMsg)
                console.log(errors)
            }else {
                handleClose();
            }
        });
    };

    const is_loading = useSelector((state) => state.auth.isLoading);

    return (
        <div className="loginFrom">
            <NavDropdown.Item onClick={handleShow}>
                {t('NavHeader.login')}
            </NavDropdown.Item>
            <Modal className="my-modal loginFrom" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Form.login_form')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="justify-content-center" onSubmit={handleSubmit} id="loginFrom">
                        <Form.Group className="mb-3" controlId="loginFromUsername">
                            <Form.Label>{t('Form.username')}</Form.Label>
                            <Form.Control type="text" placeholder={t('Form.enter_username')} value={username} onChange={(e) => setUsername(e.target.value)}/>
                            {errors.username ?<Form.Text className="text-muted">{errors.username[0]}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="loginFromPassword">
                            <Form.Label>{t('Form.password')}</Form.Label>
                            <Form.Control type="password" placeholder={t('Form.enter_password')} value={password} onChange={(e) => setPassword(e.target.value)}/>
                            {errors.password ?<Form.Text className="text-muted">{errors.password[0]}</Form.Text> : null}
                            {errors.non_field_errors ?<Form.Text className="text-muted">{errors.non_field_errors[0]}</Form.Text> : null}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="singupBtn" disabled={is_loading} type="submit" form="loginFrom">
                        {is_loading ? <Spinner animation="border" variant="light" size="sm"/> : null}
                        {t('Form.login')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default LoginModal;