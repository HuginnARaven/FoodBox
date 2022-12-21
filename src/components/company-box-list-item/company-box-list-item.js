import React from "react";
import './company-box-list-item.css'
import {Card, Col, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import BoxWorkers from "../company-box-workers/company-box-workers";
import {disableBox} from "../../store/company/boxes/boxesAction";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";


const CompanyBoxesListItem = (props) => {
    const { t } = useTranslation();

    const {id, address, is_active, last_activity, workers} = props
    const dispatch = useDispatch();

    return (
            <Row className="justify-content-center p-2" id={id}>
                <Card className="shadow">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col>
                                <label className="form-label">Id:</label>
                                <label className="form-label">{id}</label>
                            </Col>
                            <Col>
                                <label className="form-label">{t('Form.address')}:</label>
                                <label className="form-label">{address}</label>
                            </Col>
                            <Col>
                                <label className="form-label">{t('Form.status')}:</label>
                                <label className="form-label">{is_active ? " Active" : " Not active"}</label>
                            </Col>
                            <Col md="auto">
                                <BoxWorkers {...props}/>
                            </Col>
                            <Col md="auto">
                                {is_active ? <Button variant={"danger"} onClick={() => dispatch(disableBox(id))}>Disable</Button>: null}
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
    )
}

export default CompanyBoxesListItem;