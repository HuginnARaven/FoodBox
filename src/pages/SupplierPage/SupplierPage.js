import React from 'react';
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

    return (
        <div className="supplierPage">
            <Container>
                <Tabs defaultActiveKey="profile" id="justify-tab-example"
                      className="mt-3" onSelect={(e) => console.log(e)}>
                    <Tab eventKey="profile" title={t('SupplierPage.profile')}>
                        <SupplierProfilePage/>
                    </Tab>
                    <Tab eventKey="couriers" title={t('SupplierPage.couriers')}>
                        <SupplierCouriersPage/>
                    </Tab>
                    <Tab eventKey="contracts" title={t('SupplierPage.contracts')}>
                        <SupplierContractsPage/>
                    </Tab>
                    <Tab eventKey="menus" title={t('SupplierPage.menus')}>
                        <SupplierMenusPage/>
                    </Tab>
                </Tabs>
            </Container>
        </div>
    );
}

export default SupplierPage;