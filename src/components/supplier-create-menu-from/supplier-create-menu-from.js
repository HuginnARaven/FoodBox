import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './supplier-create-menu-from.css'
import {Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {createMenu} from "../../store/supplier/menus/menusAction";
import {useTranslation} from "react-i18next";

const SupplierCreateMenuFrom = () => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState('');
    const dispatch = useDispatch();

    let menuData = {
        name: name,
        description: description,
    }

    const handleMenuFromSubmit = (e) => {
        e.preventDefault();
        const res = dispatch(createMenu(menuData));
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
        <div className="createMenuFrom">
            <Button onClick={handleShow}>
                {t('Menu.create_menu_btn')}
            </Button>
            <Modal className="my-modal createMenuFrom" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Menu.menu_create_form')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="justify-content-center" id="createMenuFrom" onSubmit={handleMenuFromSubmit}>
                        <Form.Group className="mb-3" controlId="createMenuFromName">
                            <Form.Label>{t('Menu.menu_name')}</Form.Label>
                            <Form.Control type="text" placeholder="Best menu" value={name} onChange={(e)=> setName(e.target.value)}/>
                            {errors.name ?<Form.Text className="text-muted">{errors.name[0]}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="createMenuFromDescription">
                            <Form.Label>{t('Menu.menu_description')}</Form.Label>
                            <Form.Control as={"textarea"} type="text" placeholder="It`s very tasty menu" value={description} onChange={(e)=> setDescription(e.target.value)}/>
                            {errors.description ?<Form.Text className="text-muted">{errors.description[0]}</Form.Text> : null}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="saveBtn" type="submit" form="createMenuFrom">
                        {t('Menu.create_menu_btn')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default SupplierCreateMenuFrom;