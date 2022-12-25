import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './change-password-from.css'
import {useDispatch} from "react-redux";
import {changePassword} from "../../store/user/userAction";
import {Form, FormControl} from "react-bootstrap";
import {useTranslation} from "react-i18next";

const ChangePasswordForm = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [old_password, setOldPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [errors, setErrors] = useState('');

    const dispatch = useDispatch();

    let passwordData = {
        old_password: old_password,
        password: password1,
        password2: password2,
    }

    const handleChangePasswordSubmit = (e) => {
        e.preventDefault();
        const res = dispatch(changePassword(passwordData));
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


    return (
        <div className="changePasswordForm">
            <Button onClick={handleShow}>
                {t('Form.change_password')}
            </Button>
            <Modal className="my-modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Form.change_password_title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="changePasswordForm" onSubmit={handleChangePasswordSubmit}>
                        <Form.Group>
                            <Form.Label>{t('Form.old_password')}</Form.Label>
                            <FormControl type={"password"} value={old_password} onChange={(e) => setOldPassword(e.target.value)}></FormControl>
                            {errors.old_password ?<Form.Text className="text-muted">{errors.old_password[0]}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label  className="mt-3">{t('Form.password')}</Form.Label>
                            <FormControl type={"password"} value={password1} onChange={(e) => setPassword1(e.target.value)}></FormControl>
                            {errors.password ?<Form.Text className="text-muted">{errors.password[0]}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group>
                            <Form.Label  className="mt-3">{t('Form.password1')}</Form.Label>
                            <FormControl type={"password"} value={password2} onChange={(e) => setPassword2(e.target.value)}></FormControl>
                            {errors.password2 ?<Form.Text className="text-muted">{errors.password2[0]}</Form.Text> : null}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="saveBtn" type="submit" form="changePasswordForm">
                        {t('Form.change_password')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default ChangePasswordForm;