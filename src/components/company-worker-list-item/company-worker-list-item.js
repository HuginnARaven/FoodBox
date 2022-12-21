import React from "react";
import './company-worker-list-item.css'
import {Card, Col, Row} from "react-bootstrap";
import EditWorkerFrom from "../edit-worker-from/edit-worker-from";
import DeleteWorkerFrom from "../delete-worker-from/delete-worker-from";
import {useTranslation} from "react-i18next";


const CompanyWorkersListItem = (props) => {
    const { t } = useTranslation();
    const {id, username, first_name, last_name, rfid} = props

    return (
            <Row className="justify-content-center p-2" id={id}>
                <Card className="shadow">
                    <Card.Body>
                        <Row className="align-items-center">
                            <Col>
                                <label className="form-label">{`${first_name} ${last_name}`}</label>
                            </Col>
                            <Col>
                                <label className="form-label">{t('Form.username')}:</label>
                                <label className="form-label">{` ${username}`}</label>
                            </Col>
                            <Col md="auto">
                                <EditWorkerFrom {...props}/>
                            </Col>
                            <Col md="auto">
                                <DeleteWorkerFrom {...props}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
    )
}

export default CompanyWorkersListItem;