import React, {useEffect} from 'react';
import './company-search-supplier-page.css';
import Container from "react-bootstrap/Container";
import {Form, Spinner} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import SearchSupplierListItem from "../../components/search-supplier-list-item/search-supplier-list-item";
import {useDispatch, useSelector} from "react-redux";
import {searchSupp} from "../../store/company/searchContracts/searchContractsAction";
import {useTranslation} from "react-i18next";


function CompanySearchSupplierPage() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const token = localStorage.getItem('access_token')

    useEffect(() => {
        dispatch(searchSupp(token));
    }, [])

    const suppliers = useSelector((state) => state.searchContracts.list);
    const is_loading = useSelector((state) => state.searchContracts.is_loading);

    return (
        <div className="supplierSearchPageContent mt-5">
            <Container>
                <div className="d-grid gap-3">
                    <div className="p-2 mt-3 ms-5 me-5">
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder={t('Form.search')}
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-warning"> {t('Form.search')}</Button>
                        </Form>
                    </div>
                    {is_loading ? <Spinner animation="border" variant="warning"/> : null}
                    {suppliers.map((s) => <SearchSupplierListItem {...s}/>)}
                </div>
            </Container>
        </div>
    );
}

export default CompanySearchSupplierPage;