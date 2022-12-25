import React, {useState} from 'react';
import './SupplierPage.css';
import Container from "react-bootstrap/Container";
import {Tab, Tabs} from "react-bootstrap";
import SupplierProfilePage from "../../components/supplier-profile-page/supplier-profile-page";
import SupplierCouriersPage from "../../components/supplier-couriers-page/supplier-couriers-page";
import SupplierContractsPage from "../../components/supplier-contracts-page/supplier-contracts-page";
import SupplierMenusPage from "../../components/supplier-menus-page/supplier-menus-page";
import {useTranslation} from "react-i18next";

function SupplierPage() {
    const { t } = useTranslation();

    const [renderPart, setPart] = useState("profile");

    return (
        <div className="supplierPage">
            <Container>
                <Tabs defaultActiveKey="profile" id="justify-tab-example"
                      className="mt-3" onSelect={(e) => setPart(e)}>
                    <Tab eventKey="profile" title={t('SupplierPage.profile')}>
                        {renderPart === "profile" ? <SupplierProfilePage/> : null}
                    </Tab>
                    <Tab eventKey="couriers" title={t('SupplierPage.couriers')}>
                        {renderPart === "couriers" ? <SupplierCouriersPage/> : null}
                    </Tab>
                    <Tab eventKey="contracts" title={t('SupplierPage.contracts')}>
                        {renderPart === "contracts" ? <SupplierContractsPage/> : null}
                    </Tab>
                    <Tab eventKey="menus" title={t('SupplierPage.menus')}>
                        {renderPart === "contracts" ? <SupplierMenusPage/> : null}
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
}

export default SupplierPage;