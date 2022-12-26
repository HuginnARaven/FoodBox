import React from 'react';
import './SubscriptionPage.css';
import Container from "react-bootstrap/Container";
import {Card, Col, Row} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import Button from "react-bootstrap/Button";


function SubscriptionPage() {
    const { t } = useTranslation();

    return (
        <div className="subscriptionPage">
            <Container>
                <div className="subscriptionPageContent mt-5">
                    <Container>
                        <div className="d-grid gap-3">
                            <Row className="justify-content-md-center">
                                <Col className="text-center p-5">
                                    <Card  className="ms-5 me-5 shadow">
                                        <Card.Header className="shadow"><h2>Standard</h2></Card.Header>
                                        <Card.Body>
                                            <Card.Title>Workers</Card.Title>
                                            <Card.Text>
                                                max 20 workers account(+3 for each box)
                                            </Card.Text>
                                            <Card.Title>Contracts</Card.Title>
                                            <Card.Text>
                                                max 5 unapproved contracts
                                            </Card.Text>
                                            <Card.Title>Box statistic</Card.Title>
                                            <Card.Text>
                                                -
                                            </Card.Text>
                                            <Button variant="primary">Set to standard</Button>
                                        </Card.Body>
                                        <Card.Footer>
                                            free
                                        </Card.Footer>
                                    </Card>
                                </Col>
                                <Col className="text-center p-5">
                                    <Card className="ms-5 me-5 shadow">
                                        <Card.Header className="shadow"><h2>Premium</h2></Card.Header>
                                        <Card.Body>
                                            <Card.Title>Workers</Card.Title>
                                            <Card.Text>
                                                unlimited workers account
                                            </Card.Text>
                                            <Card.Title>Contracts</Card.Title>
                                            <Card.Text>
                                                max 15 unapproved contracts
                                            </Card.Text>
                                            <Card.Title>Box statistic</Card.Title>
                                            <Card.Text>
                                                +
                                            </Card.Text>
                                            <Card.Title>Extra bonus</Card.Title>
                                            <Card.Text>
                                                5% off for 3 orders per month
                                            </Card.Text>
                                            <Button variant="primary">Set to premium</Button>
                                        </Card.Body>
                                        <Card.Footer>
                                            10$/month
                                        </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                </div>
            </Container>
        </div>
    );
}

export default SubscriptionPage;