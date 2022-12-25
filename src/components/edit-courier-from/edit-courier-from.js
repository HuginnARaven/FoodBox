import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './edit-courier-from.css'
import {Col, Form, Row} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {editCourier} from "../../store/supplier/courieres/couriersAction";
import {useTranslation} from "react-i18next";

const EditCourierFrom = (props) => {
    const { t } = useTranslation();
    const {id, username, first_name, last_name, rfid} = props

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [new_first_name, setFirstName] = useState(first_name);
    const [new_last_name, setLastName] = useState(last_name);
    const [new_rfid, setRfid] = useState(rfid);

    const dispatch = useDispatch();

    let courierData = {
        id: id,
        first_name: new_first_name,
        last_name: new_last_name,
        rfid: new_rfid,
    }

    const handleEditCourierSubmit = (e) => {
        e.preventDefault();
        const res = dispatch(editCourier(courierData));
        res.then((value) => {
            if (value.error){
                let errorMsg = JSON.parse(value.payload)
                console.log(errorMsg)
            }else {
                handleClose();
            }
        });
    };

    return (
        <div className="editCourierFrom">
            <Button onClick={handleShow}>
                {t('Form.edit')}
            </Button>
            <Modal className="my-modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Form.edit_courier_title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="editCourierFrom" onSubmit={handleEditCourierSubmit}>
                        <Form.Group controlId="editCourierFromUsername">
                            <Row>
                                <Col><Form.Label>{t('Form.username')}:</Form.Label></Col>
                                <Col className="text-center"><Form.Label>{username}</Form.Label></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="editCourierFromFirstname">
                            <Row className="mt-3">
                                <Col><Form.Label>{t('Form.first_name')}:</Form.Label></Col>
                                <Col><Form.Control type="text" value={new_first_name} onChange={(e) => setFirstName(e.target.value)}/></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="editCourierFromLastname">
                            <Row className="mt-3">
                                <Col><Form.Label>{t('Form.last_name')}:</Form.Label></Col>
                                <Col><Form.Control type="text" value={new_last_name} onChange={(e) => setLastName(e.target.value)}/></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="editCourierFromRFID">
                            <Row className="mt-3">
                                <Col>
                                    <Form.Label>RFID</Form.Label>
                                </Col>
                                <Col>
                                    <Col><Form.Control type="number" value={new_rfid} onChange={(e) => setRfid(e.target.value)}/></Col>
                                    {/*<FloatingLabel*/}
                                    {/*    className="text-black"*/}
                                    {/*controlId="editCourierFromRFID"*/}
                                    {/*label="Select RFID">*/}
                                    {/*<Form.Select aria-label="Account type selector">*/}
                                    {/*    <option value="12345678">12345678</option>*/}
                                    {/*    <option value="11111111">11111111</option>*/}
                                    {/*    <option value="22222222">22222222</option>*/}
                                    {/*</Form.Select>*/}
                                    {/*</FloatingLabel>*/}
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="closeBtn" variant={"danger"} onClick={handleClose}>
                        {t('Form.close')}
                    </Button>
                    <Button className="saveBtn" type="submit" form="editCourierFrom">
                        {t('Form.save')}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default EditCourierFrom;