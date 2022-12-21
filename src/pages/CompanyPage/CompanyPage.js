import React from 'react';
import './CompanyPage.css';
import Container from "react-bootstrap/Container";
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import CompanyWorkersPage from "../../components/company-workers-page/company-workers-page";
import CompanyProfilePage from "../../components/company-profile-page/company-profile-page";
import CompanyBoxesPage from "../../components/company-boxes-page/company-boxes-page";
import CompanyContractsPage from "../../components/company-contracts-page/company-contracts-page";
import {useTranslation} from "react-i18next";

function CompanyPage() {
    const { t } = useTranslation();

    return (
        <div className="companyPage">
            <Container>
                <Tabs defaultActiveKey="profile" id="justify-tab-example"
                      className="mt-3">
                    <Tab eventKey="profile" title={t('CompanyPage.profile')}>
                        <CompanyProfilePage/>
                    </Tab>
                    <Tab eventKey="workers" title={t('CompanyPage.workers')}>
                        <CompanyWorkersPage/>
                    </Tab>
                    <Tab eventKey="boxes" title={t('CompanyPage.boxes')}>
                        <CompanyBoxesPage/>
                    </Tab>
                    <Tab eventKey="contracts" title={t('CompanyPage.contracts')}>
                        <CompanyContractsPage/>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
}

export default CompanyPage;