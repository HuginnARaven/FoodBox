import React, {useEffect} from "react";
import './supplier-contracts-page.css'
import Container from "react-bootstrap/Container";
import SupplierContactListItem from "../supplier-contract-list-item/supplier-contract-list-item";
import {useDispatch, useSelector} from "react-redux";
import {getSupplierContacts} from "../../store/supplier/contracts/contractsAction";
import {Spinner} from "react-bootstrap";
import {useTranslation} from "react-i18next";


const SupplierContractsPage = () => {
    const dispatch = useDispatch();
    const token = localStorage.getItem('access_token')

    useEffect(() => {
        dispatch(getSupplierContacts(token));
    }, [])

    const contacts = useSelector((state) => state.supplierContracts.list);
    const is_loading = useSelector((state) => state.supplierContracts.is_loading);

    return (
        <div className="supplierContractsPage">
            <Container>
                <div className="d-grid gap-3">
                    {is_loading ? <Spinner animation="border" variant="warning" /> :
                        contacts.map((c) => <SupplierContactListItem {...c}/>)}
                </div>
            </Container>
        </div>
    )
}

export default SupplierContractsPage;