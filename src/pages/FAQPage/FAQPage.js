import React from 'react';
import './FAQPage.css';
import Container from "react-bootstrap/Container";
import {useTranslation} from "react-i18next";
import {Accordion} from "react-bootstrap";

function FAQPage(props) {
    const { t } = useTranslation();

    return (
        <div className="questionPage">
            <Container>
                <div className="questionPageContent mt-5">
                    <Container>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>{t('StartPage.what_it_title')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('StartPage.what_it_text')}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>{t('StartPage.important_title')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('StartPage.important_text')}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>{t('StartPage.side_title')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('StartPage.side_text')}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header>{t('StartPage.why_title')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('StartPage.why_text')}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header>{t('StartPage.what_prise_title')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('StartPage.what_prise_text')}
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="5">
                                <Accordion.Header>{t('StartPage.who_clients_title')}</Accordion.Header>
                                <Accordion.Body>
                                    {t('StartPage.who_clients_text')}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Container>
                </div>
            </Container>
        </div>
    );
}

export default FAQPage;