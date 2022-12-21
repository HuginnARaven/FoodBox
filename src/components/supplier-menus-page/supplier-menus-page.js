import React, {useEffect} from "react";
import './supplier-menus-page.css'
import Container from "react-bootstrap/Container";
import SupplierMenuListItem from "../supplier-menu-list-item/supplier-menu-list-item";
import {useDispatch, useSelector} from "react-redux";
import {getMenus} from "../../store/supplier/menus/menusAction";
import {Spinner} from "react-bootstrap";
import SupplierCreateMenuFrom from "../supplier-create-menu-from/supplier-create-menu-from";


const SupplierMenusPage = () => {

    const dispatch = useDispatch();
    const token = localStorage.getItem('access_token')

    useEffect(() => {
        dispatch(getMenus(token));
    }, [])

    const menus = useSelector((state) => state.supplierMenus.list);
    const is_loading = useSelector((state) => state.supplierMenus.is_loading);

    return (
        <div className="supplierCouriersPage">
            <Container>
                <div className="d-grid gap-3">
                    <div className="p-2 text-center">
                        <SupplierCreateMenuFrom/>
                    </div>
                    {is_loading ? <Spinner animation="border" variant="warning" /> :
                        menus.map((m) => <SupplierMenuListItem {...m}/>)}
                </div>
            </Container>
        </div>
    )
}

export default SupplierMenusPage;