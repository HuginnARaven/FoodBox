import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './supplier-contract-company-info.css'
import {Card, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

const SupplierContractCompanyInfo = (props) => {
    const { t } = useTranslation();
    const {id, name, description} = props
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="contractCompanyInfoFrom" id={id}>
            <Button className="showBtn" onClick={handleShow}>
                {t('Form.company_info')}
            </Button>
            <Modal className="my-modal contractCompanyInfoFrom" show={show} onHide={handleClose}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Form.company_info')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Col>
                            {t('Form.company_name')}
                        </Col>
                        <Col>
                            {name}
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            {t('Form.description')}
                        </Col>
                        <Col>
                            <Card className="contractCompanyDescription">
                                <Card.Body>
                                    {description}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleClose} className="showBtn">{t('Form.close')}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default SupplierContractCompanyInfo;