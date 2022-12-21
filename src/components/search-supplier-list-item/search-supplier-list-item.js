import React from "react";
import './search-supplier-list-item.css'
import {Card, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import CompanyContractSupplierInfo from "../company-contract-suppplier-info/company-contract-suppplier-info";
import {useDispatch} from "react-redux";
import {createContact} from "../../store/company/searchContracts/searchContractsAction";
import {useTranslation} from "react-i18next";


const SearchSupplierListItem = (props) => {
    const { t } = useTranslation();
    console.log(props)
    const {id, name, address, description, have_contact} = props
    const dispatch = useDispatch();

    return (
        <Row className="justify-content-center p-2" id={id}>
            <Card className="companyContactListItem shadow">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col className="ms-5">
                            <label className="form-label">{name}</label>
                        </Col>
                        <Col md="auto">
                            {!have_contact ? <Button variant="success" onClick={() => dispatch(createContact(id))}>{t('Contracts.send')}</Button> : null}
                        </Col>
                        <Col md="auto">
                            <CompanyContractSupplierInfo supplier_id={id}/>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default SearchSupplierListItem;