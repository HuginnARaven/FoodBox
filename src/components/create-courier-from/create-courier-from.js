import {NavLink} from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './create-courier-from.css'
import {Col, Form, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {createWorker} from "../../store/company/workers/workersAction";
import {createCourier} from "../../store/supplier/courieres/couriersAction";
import {useTranslation} from "react-i18next";

const CreateCourierFrom = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [errors, setErrors] = useState('');
    const dispatch = useDispatch();

    let userData = {
        username: username,
        email: email,
        password: password1,
        password2: password2,
        first_name: first_name,
        last_name: last_name,
    }

    const handleStart = () =>{
        setUsername('')
    }

    const handleCourierFromSubmit = (e) => {
        e.preventDefault();
        const res = dispatch(createCourier(userData));
        res.then((value) => {
            if (value.error){
                let errorMsg = JSON.parse(value.payload)
                setErrors(errorMsg)
            }else {
                handleClose();
            }
        });
    };


    return (
        <div className="createCourierFrom">
            <Button onClick={handleShow}>
                {t('Form.create_courier')}
            </Button>
            <Modal className="my-modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Form.create_courier_title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="justify-content-center" id="createCourierFrom" onSubmit={handleCourierFromSubmit}>
                        <Form.Group className="mb-3" controlId="createCourierFromUsername">
                            <Form.Label>{t('Form.username')}</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" value={username} onChange={(e)=> setUsername(e.target.value)}/>
                            {errors.username ?<Form.Text className="text-muted">{errors.username[0]}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createCourierFromEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="example@test.ua" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                            {errors.email ?<Form.Text className="text-muted">{errors.email[0]}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createCourierFromPassword1">
                            <Form.Label>{t('Form.password')}</Form.Label>
                            <Form.Control type="password" value={password1} onChange={(e)=> setPassword1(e.target.value)}/>
                            {errors.password ?<Form.Text className="text-muted">{errors.password[0]}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createCourierFromPassword2">
                            <Form.Label>{t('Form.password1')}</Form.Label>
                            <Form.Control type="password" value={password2} onChange={(e)=> setPassword2(e.target.value)}/>
                            {errors.password2 ?<Form.Text className="text-muted">{errors.password2[0]}</Form.Text> : null}
                            {userData.password !== userData.password2 ?<Form.Text className="text-muted">Passwords do not match</Form.Text> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createCourierFromFirstname">
                            <Form.Label>{t('Form.first_name')}</Form.Label>
                            <Form.Control type="text" value={first_name} onChange={(e)=> setFirstName(e.target.value)}/>
                            {errors.first_name ?<Form.Text className="text-muted">{errors.first_name[0]}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createCourierFromLastname">
                            <Form.Label>{t('Form.last_name')}</Form.Label>
                            <Form.Control type="text" value={last_name} onChange={(e)=> setLastName(e.target.value)}/>
                            {errors.last_name ?<Form.Text className="text-muted">{errors.last_name[0]}</Form.Text> : null}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="closeBtn" variant={"danger"} onClick={handleClose}>
                        {t('Form.close')}
                    </Button>
                    <Button className="saveBtn" type="submit" form="createCourierFrom">
                        {t('Form.create')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default CreateCourierFrom;