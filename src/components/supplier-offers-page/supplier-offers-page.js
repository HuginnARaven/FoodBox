import React, {useEffect} from "react";
import './supplier-offers-page.css'
import Container from "react-bootstrap/Container";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "react-bootstrap";
import SupplierOfferListItem from "../supplier-offer-list-item/supplier-offer-list-item";
import {getOffers} from "../../store/supplier/offers/offersAction";


const SupplierOffersPage = () => {

    const dispatch = useDispatch();
    const token = localStorage.getItem('access_token')

    useEffect(() => {
        dispatch(getOffers(token));
    }, [])

    const offers = useSelector((state) => state.supplierOffers.list);
    const is_loading = useSelector((state) => state.supplierOffers.is_loading);

    return (
        <div className="supplierOffersPage">
            <Container>
                <div className="d-grid gap-3">
                    {is_loading ? <Spinner animation="border" variant="warning" /> :
                        offers.map((o) => <SupplierOfferListItem {...o}/>)}
                </div>
            </Container>
        </div>
    )
}

export default SupplierOffersPage;