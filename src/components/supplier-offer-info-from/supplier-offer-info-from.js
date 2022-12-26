import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './supplier-offer-info-from.css'
import {useTranslation} from "react-i18next";
import {Card, Col, Image, Row} from "react-bootstrap";


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


const SupplierOfferInfoFrom = (props) => {
    const {t} = useTranslation();

    const {id, courier, courier_info, status, product, rating, address, worker} = props

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="infoOfferFrom" id={id}>
            <Button onClick={handleShow}>
                {t('Offers.info_btn')}
            </Button>
            <Modal className="my-modal infoOfferFrom" show={show} onHide={handleClose}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Offers.info_form_title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="p-2">
                        <Col>{t('Offers.status_title')}:</Col>
                        <Col>
                            {status === "S" ? t('Offers.status_sent') :
                                (status === "A") ? t('Offers.status_accepted') :
                                    (status === "D") ? t('Offers.status_delivered') :
                                        (status === "G") ? t('Offers.status_got') :
                                            "Error😧!"}
                        </Col>
                    </Row>
                    <Row className="p-2">
                        <Card className="shadow p-0">
                            <Card.Header>{t('Offers.sender_title')}</Card.Header>
                            <Card.Body>
                                <Row>
                                    <Col>{t('Form.username')}:</Col>
                                    <Col>{worker.username}</Col>
                                </Row>
                                <Row>
                                    <Col>{t('Form.first_name')}:</Col>
                                    <Col>{worker.first_name}</Col>
                                </Row>
                                <Row>
                                    <Col>{t('Form.last_name')}:</Col>
                                    <Col>{worker.last_name}</Col>
                                </Row><Row>
                                <Col>{t('Form.company_name')}:</Col>
                                <Col>{worker.company_name}</Col>
                            </Row>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row className="p-2">
                        <Card className="shadow p-0">
                            <Card.Header>{t('Offers.content_title')}</Card.Header>
                            <Card.Body>
                                <div className="overflow-auto infoOfferContent" style={{maxHeight: 305}}>
                                    {/*{products.map((p) => <MenuProduct product = {p}/>)} */}
                                    <OfferProduct product={product}/>
                                </div>
                            </Card.Body>
                        </Card>
                    </Row>
                    <Row className="p-2">
                        <Col>{t('Offers.courier_title')}:</Col>
                        <Col>{`${courier_info.first_name} ${courier_info.last_name}`}</Col>
                    </Row>
                    <Row className="p-2">
                        <Col>{t('Form.address')}:</Col>
                        <Col>{address}</Col>
                    </Row>
                    <Row className="p-2">
                        <Col>{t('Offers.total_cost_title')}:</Col>
                        <Col>100$</Col>
                    </Row>
                    <Row className="p-2">
                        <Col>{t('Offers.rating_title')}:</Col>
                        <Col>{rating}</Col>
                    </Row>
                </Modal.Body>
            </Modal>
        </div>
    )
}


export default SupplierOfferInfoFrom;