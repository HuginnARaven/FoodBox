import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './supplier-offer-accept-from.css'
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {Card, Col, Form, Image, Row} from "react-bootstrap";
import {acceptOffer} from "../../store/supplier/offers/offersAction";


function OfferProduct(props) {
    const {t} = useTranslation();

    const {name, description, picture} = props.product
    return (
        <Card className="productCard mt-3 mb-3">
            <Card.Body>
                <Row>
                    <Col className="text-start"><Image height={50} width={50} src={picture}/></Col>
                    <Col className="text-center">{description}</Col>
                    <Col className="text-end">{name}</Col>
                </Row>
            </Card.Body>
            <Card.Footer><Row>
                <Col className="text-start">{t('Menu.product_price')}:</Col>
                <Col className="text-end">100$</Col>
            </Row></Card.Footer>
        </Card>
    )
}


const SupplierOfferAcceptFrom = (props) => {
    const {t} = useTranslation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();

    const [optionCouriers, setOptionCouriers] = useState([]);
    const [selectedCourier, selectCourier] = useState(0);
    const [errors, setErrors] = useState([]);

    const wildCouriers = useSelector((state) => state.couriers.list)

    useEffect(() => {
        setOptionCouriers(wildCouriers);
        if (Array.isArray(wildCouriers) && wildCouriers.length) {
            selectCourier(wildCouriers[0].id)
        }
    }, [])


    const handleAcceptOfferFromSubmit = (e) => {
        e.preventDefault();
        const offerData = {
            offerId: props.id,
            courierId: selectedCourier
        }
        const res = dispatch(acceptOffer(offerData));
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
        <div className="acceptOfferFrom" id={props.id}>
            <Button variant={"success"} onClick={handleShow}>
                {t('Offers.accept_btn')}
            </Button>
            <Modal className="my-modal acceptOfferFrom" show={show} onHide={handleClose}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Offers.accept_form_title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="p-2">
                        <Card className="shadow p-0">
                            <Card.Header>{t('Offers.sender_title')}</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>{t('Form.username')}:</Col>
                                    <Col>{props.worker.username}</Col>
                                </Row>
                                <Row>
                                    <Col>{t('Form.first_name')}:</Col>
                                    <Col>{props.worker.first_name}</Col>
                                </Row>
                                <Row>
                                    <Col>{t('Form.last_name')}:</Col>
                                    <Col>{props.worker.last_name}</Col>
                                </Row><Row>
                                <Col>{t('Form.company_name')}:</Col>
                                <Col>{props.worker.company_name}</Col>
                            </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row className="p-2">
                        <Card className="shadow p-0">
                            <Card.Header>{t('Offers.content_title')}</Card.Header>
                            <Card.Body>
                                <div className="overflow-auto offerContent" style={{maxHeight: 305}}>
                                    {/*{products.map((p) => <MenuProduct product = {p}/>)} */}
                                    <OfferProduct product={props.product}/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row className="p-2">
                        <Col>{t('Form.address')}:</Col>
                        <Col>{props.address}</Col>
                    </Row>
                    <Row className="p-2">
                        <Col>{t('Offers.total_cost_title')}:</Col>
                        <Col>100$</Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col>
                            <Form id="acceptOfferFrom" onSubmit={handleAcceptOfferFromSubmit}>
                                <Form.Select aria-label="Account type selector" value={selectedCourier}
                                             onChange={(e) => selectCourier(e.target.value)}>
                                    {optionCouriers.map((c) => <option value={c.id}>{c.username}</option>)}
                                </Form.Select>
                            </Form>
                        </Col>
                        <Col>
                            <Button className="saveBtn" type="submit" form="acceptOfferFrom">
                                {t('Offers.accept_btn')}
                            </Button>
                        </Col>
                    </Row>
                    {errors !== [] ? <Row><Col>{errors.ValidationError}</Col></Row> : null}
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default SupplierOfferAcceptFrom;