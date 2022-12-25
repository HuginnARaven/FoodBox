import React, {useState} from "react";
import './company-profile-page.css'
import ChangePasswordForm from "../change-password-from/change-password-from";
import ChangePaymentForm from "../change-payment-from/change-payment-from";
import {Col, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useDispatch, useSelector} from "react-redux";
import {editUser} from "../../store/user/userAction";
import {toast, ToastContainer} from "react-toastify";
import {useTranslation} from "react-i18next";

const CompanyProfilePage = () => {
    const { t } = useTranslation();
    const profileContent = useSelector((state) => state.user);

    const [name, setName] = useState(profileContent.name);
    const [description, setDescription] = useState(profileContent.description);
    const [errors, setError] = useState([]);

    const dispatch = useDispatch();
    const userData = {
        name: name,
        description: description
    }

    const handleCompanyProfileSubmit = (e) => {
        e.preventDefault();
        const res = dispatch(editUser(userData));
        const notify = () => toast.promise(res,{
            pending: 'Sending request...',
            success: 'Request sent 👌',
            error: 'Error, smth went wrong 🤯',
            rejected: "Hmm"
        },{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        notify()
        res.then((value) => {
            if (value.error){
                let errorMsg = JSON.parse(value.payload)
                setError(errorMsg)
            }else {
                setError([])
            }
        });
    };

    return (
        <div className="companyProfilePage d-flex align-items-center justify-content-md-center">
            <ToastContainer />
                <Form id="companyProfile" onSubmit={handleCompanyProfileSubmit}>
                    <Form.Group className="mb-3" controlId="username">
                        <Row>
                            <Col>
                                <Form.Label>{t('Form.username')}:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Label>{profileContent.username}</Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Row>
                            <Col>
                                <Form.Label>Email:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Label>{profileContent.email}</Form.Label>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="companyName">
                        <Row>
                            <Col>
                                <Form.Label>{t('Form.company_name')}:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                                {errors.name ?<Form.Text className="text-muted">{errors.name[0]}</Form.Text>: null}
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="companyDescription">
                        <Row>
                            <Col>
                                <Form.Label>{t('Form.description')}:</Form.Label>
                            </Col>
                            <Col>
                                <Form.Control as="textarea" type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                                {errors.description ?<Form.Text className="text-muted">{errors.description[0]}</Form.Text> : null}
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="companySubmission">
                        <Row>
                            <Col className={"text-center"}>
                                <Button variant="primary" type="submit" form="companyProfile">{t('Form.save')}</Button>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="companyPassword">
                        <Row>
                            <Col>
                                <Form.Label>{t('Form.password')}:</Form.Label>
                            </Col>
                            <Col>
                                <ChangePasswordForm/>
                            </Col>
                        </Row>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="companyPayment">
                        <Row>
                            <Col>
                                <Form.Label>{t('Form.payment')}:</Form.Label>
                            </Col>
                            <Col>
                                <ChangePaymentForm/>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
        </div>
    )
}

export default CompanyProfilePage;