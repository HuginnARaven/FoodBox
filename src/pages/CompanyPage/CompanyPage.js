import './CompanyPage.css';
import Container from "react-bootstrap/Container";
import {Tab, Tabs} from "react-bootstrap";
import CompanyWorkersPage from "../../components/company-workers-page/company-workers-page";
import CompanyProfilePage from "../../components/company-profile-page/company-profile-page";
import CompanyBoxesPage from "../../components/company-boxes-page/company-boxes-page";
import CompanyContractsPage from "../../components/company-contracts-page/company-contracts-page";
import {useTranslation} from "react-i18next";
import {useState} from "react";
function CompanyPage() {
    const { t } = useTranslation();

    const [renderPart, setPart] = useState("profile");

    return (
        <div className="companyPage">
            <Container>
                <Tabs defaultActiveKey="profile" id="justify-tab-example"
                      className="mt-3" onSelect={(e) => setPart(e)}>
                    <Tab eventKey="profile" title={t('CompanyPage.profile')}>
                        {renderPart === "profile" ? <CompanyProfilePage/> : null}
                    </Tab>
                    <Tab eventKey="workers" title={t('CompanyPage.workers')}>
                        {renderPart === "workers" ? <CompanyWorkersPage/> : null}
                    </Tab>
                    <Tab eventKey="boxes" title={t('CompanyPage.boxes')}>
                        {renderPart === "boxes" ? <CompanyBoxesPage/> : null}
                    </Tab>
                    <Tab eventKey="contracts" title={t('CompanyPage.contracts')}>
                        {renderPart === "contracts" ? <CompanyContractsPage/> : null}
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
}

export default CompanyPage;