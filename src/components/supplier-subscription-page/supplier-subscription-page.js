import React from 'react';
import {Card, Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import Button from "react-bootstrap/Button";


function SupplierSubscriptionPage() {
    const {t} = useTranslation();

    return (
        <div className="d-grid gap-3">
            <h1 className="text-center mt-3">{t('Subscription.subscription_title')}</h1>
            <Row className="justify-content-md-center">
                <Col className="text-center p-5">
                    <Card  className="ms-5 me-5 shadow">
                        <Card.Header className="shadow"><h2>{t('Subscription.standard_title')}</h2></Card.Header>
                        <Card.Body>
                            <Card.Title>{t('Subscription.couriers_title')}</Card.Title>
                            <Card.Text>
                                {t('Subscription.couriers_text_standard')}
                            </Card.Text>
                            <Card.Title>{t('Subscription.offers_history_title')}</Card.Title>
                            <Card.Text>
                                -
                            </Card.Text>
                            <Card.Title>{t('Subscription.top_search_title')}</Card.Title>
                            <Card.Text>
                                -
                            </Card.Text>
                            <Button variant="primary">{t('Subscription.set_standard')}</Button>
                        </Card.Body>
                        <Card.Footer>
                            {t('Subscription.prise_standard')}
                        </Card.Footer>
                    </Card>
                </Col>
                <Col className="text-center p-5">
                    <Card className="ms-5 me-5 shadow">
                        <Card.Header className="shadow"><h2>{t('Subscription.premium_title')}</h2></Card.Header>
                        <Card.Body>
                            <Card.Title>{t('Subscription.couriers_title')}</Card.Title>
                            <Card.Text>
                                {t('Subscription.couriers_text_premium')}
                            </Card.Text>
                            <Card.Title>{t('Subscription.offers_history_title')}</Card.Title>
                            <Card.Text>
                                +
                            </Card.Text>
                            <Card.Title>{t('Subscription.top_search_title')}</Card.Title>
                            <Card.Text>
                                +
                            </Card.Text>
                            <Button variant="primary">{t('Subscription.set_premium')}</Button>
                        </Card.Body>
                        <Card.Footer>
                            {t('Subscription.prise_premium')}
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default SupplierSubscriptionPage;