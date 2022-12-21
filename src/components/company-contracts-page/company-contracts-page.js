import React, {useEffect, useState} from "react";
import './company-contracts-page.css'
import Container from "react-bootstrap/Container";
import CompanyContactListItem from "../company-contract-list-item/company-contract-list-item";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getContacts} from "../../store/company/contracts/contractsAction";
import {Spinner} from "react-bootstrap";
import {useTranslation} from "react-i18next";


const CompanyContractsPage = () => {
    const { t } = useTranslation();
   // const [contracts, setContracts] = useState([]);

    const dispatch = useDispatch();
    const token = localStorage.getItem('access_token')

    useEffect(() => {
        //dispatch(getContacts(token)).then((value) => setContracts(value.payload));
        dispatch(getContacts(token));
    }, [])

    const contracts = useSelector((state) => state.contracts.list);
    const is_loading = useSelector((state) => state.contracts.is_loading);

    return (
        <div className="companyContractsPage">
            <Container>
                <div className="d-grid gap-3">
                    <div className="p-2 text-center">
                        <Button as={Link} to='/company/search/supplier' className="mt-3">{t('Contracts.find_supp_btn')}</Button>
                    </div>
                    {is_loading ? <Spinner animation="border" variant="warning" /> :
                        contracts.map((c) => <CompanyContactListItem {...c}/>)}
                </div>
            </Container>
        </div>
    )
}

export default CompanyContractsPage;