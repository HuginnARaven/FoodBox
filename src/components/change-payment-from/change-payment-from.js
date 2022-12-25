import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './change-payment-from.css'
import {useTranslation} from "react-i18next";

const ChangePaymentForm = () => {
    const { t } = useTranslation();

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <div className="changePaymentForm">
            <Button onClick={handleShow}>
                {t('Form.change_payment')}
            </Button>

            <Modal className="my-modal" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
                   centered size="lg">
                <Modal.Header closeButton>
                    <Modal.Title>{t('Form.change_payment_title')}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p className="fw-bold mb-4">Add new card:</p>

                    <div className="row mb-4">
                        <div className="col-7">
                            <div className="form-outline">
                                <input type="text" id="formControlLgXM"
                                       className="form-control form-control-lg"
                                       value="1234 5678 1234 5678"/>
                                <label className="form-label" htmlFor="formControlLgXM">Card
                                    Number</label>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="form-outline">
                                <input type="password" id="formControlLgExpk"
                                       className="form-control form-control-lg"
                                       placeholder="MM/YYYY"/>
                                <label className="form-label"
                                       htmlFor="formControlLgExpk">Expire</label>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="form-outline">
                                <input type="password" id="formControlLgcvv"
                                       className="form-control form-control-lg"
                                       placeholder="Cvv"/>
                                <label className="form-label" htmlFor="formControlLgcvv">Cvv</label>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="closeBtn" variant={"danger"} onClick={handleClose}>
                        Close
                    </Button>
                    <Button className="saveBtn" onClick={handleClose}>
                        Add card
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}


export default ChangePaymentForm;