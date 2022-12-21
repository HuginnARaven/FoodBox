import React, {useEffect, useState} from 'react';
import './SupplierInfoPage.css';
import Container from "react-bootstrap/Container";
import {Card, Col, Row} from "react-bootstrap";
import SupplierMenuInfo from "../../components/supplier-menu-info/supplier-menu-info";
import {useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getSuppInfo} from "../../store/company/contracts/contractsAction";
import {useTranslation} from "react-i18next";

function SupplierMenuCard() {
    return (
        <Card className="mt-3" onClick={"asd"}>
            <h4 className="p-2 text-center">Morning menu</h4>
        </Card>
    )
}


function SupplierInfoPage() {
    const { t } = useTranslation();

    const {state} = useLocation();
    const { id } = state;

    const [suppInfo, setSuppInfo] = useState({id: 0, name: "", address: "", description: "", menus:[]});
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSuppInfo(id)).then((value) => setSuppInfo(value.payload));
    }, [])

    return (
        <div className="supplierInfoPage">
            <Container>
                <div className="supplierInfoPageContent mt-5">
                    <Container>
                        <div className="d-grid gap-3">
                            <Row>
                                <Col className="text-center">
                                    <Row className="mt-5">
                                        <h3>{suppInfo.name}</h3>
                                    </Row>
                                    <Row className="mt-5">
                                        <h4>{t('Form.description')}</h4>
                                    </Row>
                                    <Row className="mt-5 ms-1 me-1">
                                        <h5>
                                            {suppInfo.description}
                                        </h5>
                                    </Row>
                                    <Row className="mt-5">
                                        <Col>
                                            <h5>{t('Form.address')}</h5>
                                        </Col>
                                        <Col>
                                            <h5>{suppInfo.address}</h5>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="p-5">
                                    <Card className="supplierInfoMenusPage">
                                        <Card.Title><h3 className="text-center mt-3">{t('Form.menus')}</h3></Card.Title>
                                        <Card.Body>
                                            {suppInfo.menus.map((m) => <SupplierMenuInfo menue = {m}/>)}
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </Container>
        </div>
    );
}

export default SupplierInfoPage;