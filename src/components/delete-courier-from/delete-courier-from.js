import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './delete-courier-from.css'
import {Col, Form, Row} from "react-bootstrap";
import {deleteCourier} from "../../store/supplier/courieres/couriersAction";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

const DeleteCourierFrom = (props) => {
    const { t } = useTranslation();
    const {id, username, first_name, last_name, rfid} = props

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [sure, setSure] = useState(false);

    const handleSureFalse = () => setSure(false);
    const handleSureTrue = () => setSure(true);

    const [compareUsername, setUsername] = useState('');

    const [errors, setErrors] = useState('');
    const dispatch = useDispatch();

    function start(){
        handleSureFalse()
        handleShow()
        setUsername('')
    }

    const handleDeleteCourierFromSubmit = (e) => {
        e.preventDefault();
        const res = dispatch(deleteCourier(id));
        res.then((value) => {
            if (value.error){
                let errorMsg = JSON.parse(value.payload)
                setErrors(errorMsg)
                console.log(errors)
            }else {
                handleClose();
            }
        });
    };

    return (
        <div className="deleteCourierFrom">
            <Button variant={"danger"} onClick={start} >
                {t('Form.delete')}
            </Button>
            <Modal className="my-modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Form.delete_form_title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="deleteCourierFrom" onSubmit={handleDeleteCourierFromSubmit}>
                        <Form.Group controlId="editCourierFromUsername">
                            <Row className="mb-3">
                                <Col className="text-center"><Form.Label>{t('Form.delete_form_text_part_1')}{first_name}{t('Form.delete_form_text_part_2')}</Form.Label></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="editCourierFromUsername">
                            <Row className="mt-3 mb-3">
                                <Col className="text-center"><Form.Label>{t('Form.delete_form_text_part_3')}</Form.Label></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="editCourierFromUsername">
                            <Row className="mt-3 mb-3">
                                <Col md={"auto"}><Form.Label>{t('Form.username')}:</Form.Label></Col>
                                <Col><Form.Control type="text" value={compareUsername} onChange={e => setUsername(e.target.value)}/></Col>
                                <Col md={"auto"}>
                                    <Button className="closeBtn" variant={"danger"} onClick={username === compareUsername ? handleSureTrue: null}>
                                        {t('Form.delete')}
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                {sure ? <Modal.Footer>
                    <Form.Label>{t('Form.delete_form_sure_text')}</Form.Label>
                    <Button className="btnDelete" variant={"danger"} type={"submit"} form={"deleteCourierFrom"}>
                        {t('Form.delete_form_sure_dtn_text')}
                    </Button>
                </Modal.Footer> : null}
            </Modal>
        </div>
    )
}


export default DeleteCourierFrom;