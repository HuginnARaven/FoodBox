import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './register-from.css'
import {Form, Spinner} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {register} from "../../store/auth/authAction";
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useTranslation} from "react-i18next";

const RegisterModal = () => {
    const { t } = useTranslation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [description, setDescription] = useState('');
    const [name, setName] = useState('');
    const [accountType, setAccountType] = useState('C');
    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState('');
    const dispatch = useDispatch();

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

    const handleSubmit = (e) => {
        e.preventDefault();
        const res = dispatch(register(userData));
        res.then((value) => {
            if (value.error){
                let errorMsg = JSON.parse(value.payload)
                setErrors(errorMsg)
            }else {
                handleClose();
            }
        });
    };

    const is_loading = useSelector((state) => state.auth.isLoading);;

    return (
        <div className="registerFrom">
            <NavDropdown.Item onClick={handleShow}>
                {t('NavHeader.singup')}
            </NavDropdown.Item>
            <Modal className="my-modal registerFrom" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Form.register_form')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="justify-content-center" onSubmit={handleSubmit} id="registerForm">
                        <Form.Group className="mb-3" controlId="registerFormUsername">
                            <Form.Label>{t('Form.username')}</Form.Label>
                            <Form.Control type="text" placeholder={t('Form.enter_username')} value={username} onChange={(e) => setUsername(e.target.value)}/>
                            {errors.username ?<Form.Text className="text-muted">{errors.username[0]}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="registerFormEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="example@test.ua" value={email} onChange={(e) => setEmail(e.target.value)}/>
                            {errors.email ?<Form.Text className="text-muted">{errors.email[0]}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="registerFormPassword1">
                            <Form.Label>{t('Form.password')}</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password1} onChange={(e) => setPassword1(e.target.value)}/>
                            {errors.password ?<Form.Text className="text-muted">{errors.password[0]}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="registerFormPassword2">
                            <Form.Label>{t('Form.password1')}</Form.Label>
                            <Form.Control type="password" placeholder={t('Form.enter_password')} value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                            {errors.password2 ?<Form.Text className="text-muted">{errors.password2[0]}</Form.Text> : null}
                            {userData.password !== userData.password2 ?<Form.Text className="text-muted">Passwords do not match</Form.Text> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="registerFormName">
                            <Form.Label>{accountType === "S" ? t('Form.supplier_name'): t('Form.company_name')}</Form.Label>
                            <Form.Control type="text" placeholder={t('Form.enter_name')} value={name} onChange={(e) => setName(e.target.value)}/>
                            {errors.name ?<Form.Text className="text-muted">{errors.name[0]}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="registerFormDescription">
                            <Form.Label>{t('Form.description')}</Form.Label>
                            <Form.Control as="textarea" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                            {errors.description ?<Form.Text className="text-muted">{errors.description[0]}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="registerFormAccountType">
                            <Form.Label>{t('Form.accounttype')}</Form.Label>
                            <Form.Select aria-label="Account type selector"
                                         as="select"
                                         value={accountType}
                                         onChange={e => {setAccountType(e.target.value);
                                         }}>
                                <option value="C">{t('Form.company')}</option>
                                <option value="S">{t('Form.supplier')}</option>
                            </Form.Select>
                        </Form.Group>
                        {accountType === "S" ?
                            <Form.Group className="mb-3" controlId="registerFormAddress">
                                <Form.Label>{t('Form.address')}</Form.Label>
                                <Form.Control type="text" placeholder={t('Form.enter_address')} value={address} onChange={(e) => setAddress(e.target.value)}/>
                                {errors.address ?<Form.Text className="text-muted">{errors.address[0]}</Form.Text> : null}
                            </Form.Group> : null}
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="singupBtn" disabled={is_loading} type="submit" form="registerForm">
                        {is_loading ? <Spinner animation="border" variant="light" size="sm"/> : null}
                        Sing up
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default RegisterModal;