import React from 'react';
import './SubscriptionPage.css';
import Container from "react-bootstrap/Container";
import {useTranslation} from "react-i18next";
import CompanySubscriptionPage from "../../components/company-subscription-page/company-subscription-page";
import {Navigate} from "react-router-dom";
import SupplierSubscriptionPage from "../../components/supplier-subscription-page/supplier-subscription-page";


function SubscriptionPage(props) {
    const { t } = useTranslation();

    return (
        <div className="subscriptionPage">
            <Container>
                <div className="subscriptionPageContent mt-5">
                    <Container>
                        {props.userType === 'S' ?  <SupplierSubscriptionPage/> :
                            (props.userType === 'C') ? <CompanySubscriptionPage/> :
                                <Navigate to="/" replace />}
                    </Container>
                </div>
            </Container>
        </div>
    );
}

export default SubscriptionPage;