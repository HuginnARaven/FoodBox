import React, {useEffect} from "react";
import './company-workers-page.css'
import CompanyWorkersListItem from "../company-worker-list-item/company-worker-list-item";
import CreateWorkerFrom from "../create-worker-from/create-worker-from";
import Container from "react-bootstrap/Container";
import {getWorkers} from "../../store/company/workers/workersAction";
import {useDispatch, useSelector} from "react-redux";
import {Spinner} from "react-bootstrap";


const CompanyWorkersPage = () => {
    //const [workers, setWorkers] = useState([]);

    const dispatch = useDispatch();
    const token = localStorage.getItem('access_token')

    useEffect(() => {
        dispatch(getWorkers(token));
        // dispatch(getWorkers(token)).then((value) => setWorkers(value.payload));
    }, [])

    const workers = useSelector((state) => state.workers.list);
    const is_loading = useSelector((state) => state.workers.is_loading);
    return (
        <div className="companyWorkersPage">
            <Container>
                <div className="d-grid gap-3">
                    <div className="p-2 text-center">
                        <CreateWorkerFrom/>
                    </div>
                    {is_loading ? <Spinner animation="border" variant="warning" /> :
                        workers.map((w) => <CompanyWorkersListItem {...w}/>)}
                </div>
            </Container>
        </div>
    )
}

export default CompanyWorkersPage;