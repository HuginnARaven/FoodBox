import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './company-contract-suppplier-info.css'
import {Card, Col, FloatingLabel, Form, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {getSuppInfo} from "../../store/company/contracts/contractsAction";
import {useDispatch} from "react-redux";
import { useNavigate  } from "react-router-dom"
import {useTranslation} from "react-i18next";

const CompanyContractSupplierInfo = (props) => {
    const { t } = useTranslation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [suppInfo, setSuppInfo] = useState({id: 0, name: "", address: "", description: ""});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSuppInfo(props.supplier_id)).then((value) => setSuppInfo(value.payload));
    }, [])


    const navigate = useNavigate ()

    function handleMorInfo() {
        navigate('/company/supplier/info/', { state: { id: suppInfo.id} });
        handleClose()
    }

    return (
        <div className="contractSuppInfoFrom">
            <Button onClick={handleShow}>
                {t('Form.supplier_info')}
            </Button>
            <Modal className="my-modal contractSuppInfoFrom" show={show} onHide={handleClose}
                   aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Form.supplier_info')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row className="mb-3">
                        <Col>
                            {t('Form.supplier_name')}
                        </Col>
                        <Col>
                            {suppInfo.name}
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            {t('Form.description')}
                        </Col>
                        <Col>
                            <Card className="contractSuppDescription">
                                <Card.Body>
                                    {suppInfo.description}
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col>
                            {t('Form.address')}
                        </Col>
                        <Col>
                            {suppInfo.address}
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    {/*as={Link} to={`/company/supplier/info/${suppInfo.id}`}*/}
                    <Button onClick={handleClose}>{t('Form.close')}</Button>
                    <Button onClick={handleMorInfo}>{t('Form.get_more_info')}</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default CompanyContractSupplierInfo;