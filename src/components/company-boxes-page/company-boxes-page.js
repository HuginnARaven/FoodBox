import React, {useEffect, useState} from "react";
import './company-boxes-page.css'
import Container from "react-bootstrap/Container";
import CompanyBoxesListItem from "../company-box-list-item/company-box-list-item";
import CompanyBuyBoxForm from "../company-buy-box/company-buy-box";
import {getBoxes} from "../../store/company/boxes/boxesAction";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "react-bootstrap";
import {getWorkers} from "../../store/company/workers/workersAction";


const CompanyBoxesPage = () => {

    const dispatch = useDispatch();
    const token = localStorage.getItem('access_token')
    const [errors, setError] = useState([]);

    useEffect(() => {
        const res = dispatch(getBoxes(token));
        const res2 = dispatch(getWorkers(token));
        res.then((value) => {
            if (value.error){
                let errorMsg = JSON.parse(value.payload)
                setError(errorMsg)
            }else {
                setError([])
            }
        });
        res2.then((value) => {
            if (value.error){
                let errorMsg = JSON.parse(value.payload)
                setError(errorMsg)
            }else {
                setError([])
            }
        });
    }, [])

    const boxes = useSelector((state) => state.boxes.list);
    const is_loading = useSelector((state) => state.boxes.is_loading);

    return (
        <div className="companyBoxesPage">
            <Container>
                <div className="d-grid gap-3">
                    <div className="p-2 text-center">
                        <CompanyBuyBoxForm/>
                    </div>
                    {is_loading ? <Spinner animation="border" variant="warning" /> :
                        boxes.map((b) => <CompanyBoxesListItem {...b}/>)}
                </div>
            </Container>
        </div>
    )
}

export default CompanyBoxesPage;