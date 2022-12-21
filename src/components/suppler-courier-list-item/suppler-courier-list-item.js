import React from "react";
import './suppler-courier-list-item.css'
import {Card, Col, Row} from "react-bootstrap";
import EditCourierFrom from "../edit-courier-from/edit-courier-from";
import DeleteCourierFrom from "../delete-courier-from/delete-courier-from";
import {useTranslation} from "react-i18next";


const SupplerCourierListItem = (props) => {
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
                                <EditCourierFrom {...props}/>
                            </Col>
                            <Col md="auto">
                                <DeleteCourierFrom {...props}/>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            </Row>
    )
}

export default SupplerCourierListItem;