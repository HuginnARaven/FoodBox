import React from 'react';
import './StartPage.css';
import {Col, Image, Row} from "react-bootstrap";
import Container from "react-bootstrap/Container";
import stolova from "../../assets/stolova_food.jpg"
import zamovlennya from "../../assets/zamovlennya_food.jpg"
import {useTranslation} from "react-i18next";

function StartPage() {
    const { t } = useTranslation();

    return (
        <div className="startPage mt-5">
            <Container fluid>
                <Row className="mb-3 mt-3 p-4">
                    <Col className="text-center"><h2>{t('StartPage.important_title')}</h2></Col>
                    <Col className="nullSpase"><h2></h2></Col>
                </Row>
                <Row className="mb-3 mt-3">
                    <Col className="">
                        <h4>{t('StartPage.important_text')}</h4>
                    </Col>
                    <Col className="aboutImg"><Image rounded={true} className="shadow" src={stolova}/></Col>
                </Row>
                <Row className="mb-3 mt-3 p-4">
                    <Col className="nullSpase"><h2></h2></Col>
                    <Col className="text-center"><h2>{t('StartPage.side_title')}</h2></Col>
                </Row>
                <Row className="mb-3 mt-3">
                    <Col className="aboutImg"><Image rounded={true} className="shadow" src={zamovlennya}/></Col>
                    <Col>
                        <h4>{t('StartPage.side_text')}
                        </h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default StartPage;