import './App.css';
import {Route, Routes, Navigate} from "react-router-dom";
import StartPage from "./pages/StartPage/StartPage";
import NavbarHeader from "./components/navbar-header/navbar-header";
import React, {useEffect} from "react";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import SupplierSearchPage from "./pages/SupplierSearchPage/SupplierSearchPage";
import SupplierInfoPage from "./pages/SupplierInfoPage/SupplierInfoPage";
import SupplierPage from "./pages/SupplierPage/SupplierPage";
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "./store/user/userAction";

function App() {
    const dispatch = useDispatch();
    const token = localStorage.getItem('access_token');
    useEffect(() => {
        dispatch(getUser(token))
    }, [])
    const userType = useSelector((state) => state.user.role)

    return (
        <div className="App">
            <NavbarHeader/>
            <Routes>
                <Route path="/" element={<StartPage/>}/>
                <Route path="/profile" element={userType == 'S' ?  <SupplierPage/> : (userType == 'C') ? <CompanyPage/> : <Navigate to="/" replace />}/>
                <Route path="/company/search/supplier" element={(userType == 'C') ? <SupplierSearchPage/> : <Navigate to="/" replace />}/>
                <Route path="/company/supplier/info" element={<SupplierInfoPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
