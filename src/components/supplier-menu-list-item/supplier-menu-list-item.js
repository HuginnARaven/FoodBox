import React from "react";
import './supplier-menu-list-item.css'
import {Card, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SupplierMenuProducts from "../supplier-menu-products/supplier-menu-products";
import {useDispatch} from "react-redux";
import {deleteMenu} from "../../store/supplier/menus/menusAction";
import SupplierEditMenuFrom from "../supplier-edit-menu-from/supplier-edit-menu-from";
import {useTranslation} from "react-i18next";


const SupplierMenuListItem = (props) => {
    const { t } = useTranslation();

    const {id, name, description, products} = props

    const menuData = {
        id: id,
        name: name,
        description: description
    }

    const dispatch = useDispatch();

    return (
        <Row className="justify-content-center p-2" id={id}>
            <Card className="supplierContactListItem shadow">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col className="ms-5">
                            <label className="form-label">{name}</label>
                        </Col>
                        <Col md="auto">
                            <SupplierEditMenuFrom {...menuData}/>
                        </Col>
                        <Col md="auto">
                            <SupplierMenuProducts {...props}/>
                        </Col>
                        <Col md="auto">
                            <Button variant={"danger"} onClick={() => dispatch(deleteMenu(id))}>{t('Form.delete')}</Button>
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default SupplierMenuListItem;