import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './company-buy-box.css'
import {Card, CardGroup, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import box_logo from "../../assets/FoodBox_logo.png"
import {register} from "../../store/auth/authAction";
import {useDispatch} from "react-redux";
import {createBox} from "../../store/company/boxes/boxesAction";
import {useTranslation} from "react-i18next";

const CompanyBuyBoxForm = () => {
    const { t } = useTranslation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [address, setAddress] = useState('');
    const [errors, setErrors] = useState('');

    const dispatch = useDispatch();

    const handleBuyBoxSubmit = (e) => {
        e.preventDefault();
        const res = dispatch(createBox(address));
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
        <div className="byBoxFrom">
            <Button onClick={handleShow}>
                {t('Box.buy_box_btn_title')}
            </Button>
            <Modal className="my-modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Box.buy_box_form_title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CardGroup>
                        <Card className="shadow" style={{width: '18rem'}}>
                            <Card.Img variant="top" src={box_logo}/>
                            <Card.Body>
                                <Card.Title>{t('Box.buy_standard_box_title')}</Card.Title>
                                <Card.Text>{t('Box.buy_standard_box_description')}</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Form id="createBoxForm" onSubmit={handleBuyBoxSubmit}>
                        <Form.Group>
                            <Form.Label>{t('Box.contact_text')}</Form.Label>
                            <Form.Control placeholder={"Address of future box"} value={address} onChange={(e) => setAddress(e.target.value)}></Form.Control>
                            {errors.address ? <Form.Text className="text-muted">{errors.address}</Form.Text> : null}
                        </Form.Group>
                    </Form>
                    <Button className="addWorkerDtn" type="submit" form="createBoxForm">
                        {t('Box.order_box_btn_title')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default CompanyBuyBoxForm;