import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './supplier-edit-menu-from.css'
import {Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {editMenu} from "../../store/supplier/menus/menusAction";
import {useTranslation} from "react-i18next";

const SupplierEditMenuFrom = (props) => {
    const { t } = useTranslation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {id, name, description} = props

    const [new_name, setName] = useState(name);
    const [new_description, setDescription] = useState(description);
    const [errors, setErrors] = useState('');
    const dispatch = useDispatch();

    let menuData = {
        id: id,
        name: new_name,
        description: new_description,
    }

    const handleMenuFromSubmit = (e) => {
        e.preventDefault();
        const res = dispatch(editMenu(menuData));
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
        <div className="editMenuFrom" id={id}>
            <Button onClick={handleShow}>
                {t('Form.edit')}
            </Button>
            <Modal className="my-modal editMenuFrom" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Menu.menu_edit_form')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className="justify-content-center" id="editMenuFrom" onSubmit={handleMenuFromSubmit}>
                        <Form.Group className="mb-3" controlId="editMenuFromName">
                            <Form.Label>{t('Menu.menu_name')}</Form.Label>
                            <Form.Control type="text" placeholder="Best menu" value={new_name} onChange={(e)=> setName(e.target.value)}/>
                            {errors.name ?<Form.Text className="text-muted">{errors.name[0]}</Form.Text> : null}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="editMenuFromDescription">
                            <Form.Label>{t('Menu.menu_description')}</Form.Label>
                            <Form.Control as={"textarea"} type="text" placeholder="It`s very tasty menu" value={new_description} onChange={(e)=> setDescription(e.target.value)}/>
                            {errors.description ?<Form.Text className="text-muted">{errors.description[0]}</Form.Text> : null}
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="saveBtn" type="submit" form="editMenuFrom">
                        {t('Form.save')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default SupplierEditMenuFrom;