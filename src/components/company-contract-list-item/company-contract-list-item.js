import React from "react";
import './company-contract-list-item.css'
import {Card, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CompanyContractSupplierInfo from "../company-contract-suppplier-info/company-contract-suppplier-info";
import {deleteContact} from "../../store/company/contracts/contractsAction";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";


const CompanyContactListItem = (props) => {
    const { t } = useTranslation();

    const {id, supplier_id, supplier_name, is_approved} = props
    const dispatch = useDispatch();

    return (
            <Row className="justify-content-center p-2" id={id}>
                <Card className="companyContactListItem shadow">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col className="ms-5">
                                <label className="form-label">{supplier_name}</label>
                            </Col>
                            <Col>
                                <label className="me-5 form-label">{t('Contracts.is_approved')}</label>
                                <label className="form-label">{is_approved ? t('Form.yes') : t('Form.no')}</label>
                            </Col>
                                <Col md="auto">
                                    <CompanyContractSupplierInfo supplier_id = {supplier_id}/>
                            </Col>
                            <Col md="auto">
                                <Button variant={"danger"} onClick={() => dispatch(deleteContact(id))}>{t('Form.delete')}</Button>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
    )
}

export default CompanyContactListItem;