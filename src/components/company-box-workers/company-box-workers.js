import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './company-box-workers.css'
import {Card, Col, Form, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {addBoxWorker, deleteBoxWorker} from "../../store/company/boxes/boxesAction";
import {useTranslation} from "react-i18next";

function BoxWorker(props) {
    const { t } = useTranslation();

    const dispatch = useDispatch();
    const {id, box_id, worker, worker_username} = props.w
    const Ids = {boxId: box_id, dataId: id}

    return (
        <Card className="workerCard mt-3 mb-3">
            <Card.Body>
                <Row>
                    <Col className="text-start">{worker_username}</Col>
                    <Col className="text-end"><Button variant={"danger"}
                                                      onClick={() => dispatch(deleteBoxWorker(Ids))}>{t('Form.delete')}</Button></Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

const BoxWorkers = (props) => {
    const { t } = useTranslation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    const token = localStorage.getItem('access_token')

    const [optionWorkers, setOptionWorkers] = useState([]);
    const [selectedWorker, selectWorker] = useState(0);
    const [errors, setErrors] = useState([]);

    const wildWorkers = useSelector((state) => state.workers.list)

    useEffect(() => {
        setOptionWorkers(wildWorkers);
        if (Array.isArray(wildWorkers) && wildWorkers.length){
            selectWorker(wildWorkers[0].id)
        }
    }, [])

    // const workers = useSelector((state) => state.boxes.list.workers);

    function handleAddWorker() {
        const data = {
            boxId: props.id,
            worker: selectedWorker
        }
        const res = dispatch(addBoxWorker(data, token));
        res.then((value) => {
            if (value.error) {
                let errorMsg = JSON.parse(value.payload)
                setErrors(errorMsg)
                console.log(errorMsg)
            }
        });
    }

    return (
        <div className="boxWorkerFrom">
            <Button onClick={handleShow}>
                {t('BoxWorkers.workers')}
            </Button>
            <Modal className="my-modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered>
                <Modal.Header closeButton>
                    <Modal.Title>{t('BoxWorkers.box_workers_form_title_part1')}{props.id} {t('BoxWorkers.box_workers_form_title_part2')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card className="workersCard">
                        <Card.Body>
                            {props.workers.map((w) => <BoxWorker w={w}/>)}
                        </Card.Body>
                    </Card>
                </Modal.Body>
                <Modal.Footer>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Select aria-label="Account type selector" value={selectedWorker}
                                             onChange={(e) => selectWorker(e.target.value)}>
                                    {optionWorkers.map((v) => <option value={v.id}>{v.username}</option>)}
                                </Form.Select>
                            </Form>
                        </Col>
                        <Col>
                            <Button className="addWorkerDtn" onClick={handleAddWorker}>
                                {t('BoxWorkers.box_add_worker_form_title')}
                            </Button>
                        </Col>
                    </Row>
                    {errors !== [] ? <Row><Col>{errors.ValidationError}</Col></Row>: null}
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default BoxWorkers;