import React from "react";
import './supplier-offer-list-item.css'
import {Card, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SupplierMenuProducts from "../supplier-menu-products/supplier-menu-products";
import {useDispatch} from "react-redux";
import {deleteMenu} from "../../store/supplier/menus/menusAction";
import SupplierEditMenuFrom from "../supplier-edit-menu-from/supplier-edit-menu-from";
import {useTranslation} from "react-i18next";
import SupplierOfferAcceptFrom from "../supplier-offer-accept-from/supplier-offer-accept-from";
import {declineOffer} from "../../store/supplier/offers/offersAction";
import SupplierOfferInfoFrom from "../supplier-offer-info-from/supplier-offer-info-from";


const SupplierOfferListItem = (props) => {
    const {t} = useTranslation();

    const {id, courier, courier_info, status, product, rating, address, worker} = props

    const dispatch = useDispatch();

    return (
        <Row className="justify-content-center p-2 mt-2" id={id}>
            <Card className="supplierContactListItem shadow">
                <Card.Body>
                    <Row className="align-items-center">
                        <Col className="ms-md-3" md="1">
                            <label className="form-label">Id: {id}</label>
                        </Col>
                        <Col className="ms-md-3" md="2">
                            <label className="form-label">
                                {t('Offers.status_title')}:
                                {status === "S" ? t('Offers.status_sent') :
                                (status === "A") ? t('Offers.status_accepted') :
                                    (status === "D") ? t('Offers.status_delivered') :
                                        (status === "G") ? t('Offers.status_got') :
                                            "Error😧!"}
                            </label>
                        </Col>
                        <Col className="ms-md-3">
                            <label className="form-label">{t('Offers.deliver_title')}: {address}</label>
                        </Col>
                        {status !== "S" ?
                            <Col className="ms-md-3">
                                <label className="form-label">
                                    {t('Offers.courier_title')}: {`${courier_info.first_name} ${courier_info.last_name}`}
                                </label>
                            </Col>
                            : null}
                        <Col md="auto" className="me-3 mt-1">
                            {status !== "S" ? <SupplierOfferInfoFrom {...props}/> :
                                <SupplierOfferAcceptFrom {...props}/>}
                        </Col>
                        <Col md="auto" className="me-3 mt-1">
                            {status === "S" ?
                                <Button variant={"danger"} onClick={() => dispatch(declineOffer(id))}>
                                    {t('Offers.decline_btn')}
                                </Button>
                                : null}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        </Row>
    )
}

export default SupplierOfferListItem;