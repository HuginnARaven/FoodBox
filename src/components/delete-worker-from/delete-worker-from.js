import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './delete-worker-from.css'
import {Col, Form, Row} from "react-bootstrap";
import {deleteWorker} from "../../store/company/workers/workersAction";
import {useDispatch} from "react-redux";
import {useTranslation} from "react-i18next";

const DeleteWorkerFrom = (props) => {
    const { t } = useTranslation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [sure, setSure] = useState(false);

    const handleSureFalse = () => setSure(false);
    const handleSureTrue = () => setSure(true);

    const [compareUsername, setUsername] = useState('');
    const [errors, setErrors] = useState('');

    // const props = {
    //     id: 1,
    //     first_name: "Adam",
    //     last_name: "Smith",
    //     username: "Worker1"
    // }

    const dispatch = useDispatch();

    function start(){
        handleSureFalse()
        handleShow()
        setUsername('')
    }

    const handleDeleteWorkerFromSubmit = (e) => {
        e.preventDefault();
        const res = dispatch(deleteWorker(props.id));
        handleClose();
        // res.then((value) => {
        //     if (value.error){
        //         let errorMsg = JSON.parse(value.payload)
        //         setErrors(errorMsg)
        //         console.log(errors)
        //     }else {
        //         handleClose();
        //     }
        // });
    };

    return (
        <div className="deleteWorkerFrom">
            <Button variant={"danger"} onClick={start} >
                {t('Form.delete')}
            </Button>
            <Modal className="my-modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('Form.delete_form_title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form id="deleteWorkerFrom" onSubmit={handleDeleteWorkerFromSubmit}>
                        <Form.Group controlId="deleteWorkerFromUsername">
                            <Row className="mb-3">
                                <Col className="text-center"><Form.Label>{t('Form.delete_form_text_part_1')}{props.first_name}{t('Form.delete_form_text_part_2')}</Form.Label></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="deleteWorkerFromUsername">
                            <Row className="mt-3 mb-3">
                                <Col className="text-center"><Form.Label>{t('Form.delete_form_text_part_3')}</Form.Label></Col>
                            </Row>
                        </Form.Group>
                        <Form.Group controlId="deleteWorkerFromUsername">
                            <Row className="mt-3 mb-3">
                                <Col md={"auto"}><Form.Label>{t('Form.username')}:</Form.Label></Col>
                                <Col><Form.Control type="text" value={compareUsername} onChange={e => setUsername(e.target.value)}/></Col>
                                <Col md={"auto"}>
                                    <Button className="closeBtn" variant={"danger"} onClick={props.username === compareUsername ? handleSureTrue: null}>
                                        {t('Form.delete')}
                                    </Button>
                                </Col>
                            </Row>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                {sure ? <Modal.Footer>
                    <Form.Label>{t('Form.delete_form_sure_text')}</Form.Label>
                    <Button className="btnDelete" type="submit" form="deleteWorkerFrom" variant={"danger"}>
                        {t('Form.delete_form_sure_dtn_text')}
                    </Button>
                </Modal.Footer> : null}
            </Modal>
        </div>
    )
}


export default DeleteWorkerFrom;