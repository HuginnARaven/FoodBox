import React from "react";
import './supplier-contract-list-item.css'
import {Card, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SupplierContractCompanyInfo from "../supplier-contract-company-info/supplier-contract-company-info";
import {useDispatch} from "react-redux";
import {acceptSupplierContact, deleteSupplierContact} from "../../store/supplier/contracts/contractsAction";
import {useTranslation} from "react-i18next";


const SupplierContactListItem = (props) => {
    const { t } = useTranslation();

    const {id, is_approved, company_id,company_name,company_description} = props

    const companyData = {
        id: company_id,
        name: company_name,
        description: company_description,
    }

    const dispatch = useDispatch();

    return (
        <Row className="justify-content-center p-2" id={id}>
            <Card className="supplierContactListItem shadow">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col className="ms-5">
                            <label className="form-label">{company_name}</label>
                        </Col>
                        <Col>
                            <label className="me-5 form-label">{t('Contracts.is_approved')}</label>
                            <label className="form-label">{is_approved ? t('Form.yes') : t('Form.no')}</label>
                        </Col>
                        {!is_approved ?
                                <Col md="auto">
                                    <Button variant={"success"} onClick={() => dispatch(acceptSupplierContact(id))}>{t('Form.accept')}</Button>
                                </Col> : null
                        }
                        <Col md="auto">
                            <SupplierContractCompanyInfo {...companyData}/>
                        </Col>
                        <Col md="auto">
                            <Button variant={"danger"} onClick={() => dispatch(deleteSupplierContact(id))}>{t('Form.delete')}</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default SupplierContactListItem;