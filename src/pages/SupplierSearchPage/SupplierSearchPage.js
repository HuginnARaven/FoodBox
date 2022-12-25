import React from 'react';
import './SupplierSearchPage.css';
import Container from "react-bootstrap/Container";
import CompanySearchSupplierPage from "../../components/company-search-supplier-page/company-search-supplier-page";


function SupplierSearchPage() {

    return (
        <div className="supplierSearchPage">
            <Container>
                <CompanySearchSupplierPage/>
            </Container>
        </div>
    );
}

export default SupplierSearchPage;