import React, {useEffect, useState} from "react";
import './supplier-couriers-page.css'
import CompanyWorkersListItem from "../company-worker-list-item/company-worker-list-item";
import Container from "react-bootstrap/Container";
import CreateCourierFrom from "../create-courier-from/create-courier-from";
import SupplerCourierListItem from "../suppler-courier-list-item/suppler-courier-list-item";
import {useDispatch, useSelector} from "react-redux";
import {getWorkers} from "../../store/company/workers/workersAction";
import {Spinner} from "react-bootstrap";
import {getCouriers} from "../../store/supplier/courieres/couriersAction";


const SupplierCouriersPage = () => {

    //const [workers, setWorkers] = useState([]);

    const dispatch = useDispatch();
    const token = localStorage.getItem('access_token')

    useEffect(() => {
        dispatch(getCouriers(token));
        // const couriers = useSelector((state) => state.couriers.list);
    }, [])

    const couriers = useSelector((state) => state.couriers.list);
    const is_loading = useSelector((state) => state.couriers.is_loading);

    return (
        <div className="supplierCouriersPage">
            <Container>
                <div className="d-grid gap-3">
                    <div className="p-2 text-center">
                        <CreateCourierFrom/>
                    </div>
                    {is_loading ? <Spinner animation="border" variant="warning" /> :
                        couriers.map((c) => <SupplerCourierListItem {...c}/>)}
                </div>
            </Container>
        </div>
    )
}

export default SupplierCouriersPage;