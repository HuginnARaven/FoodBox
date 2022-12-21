import axios from "axios";

let baseApi2 = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
})

export let userAPI = {
    login(data) {
        return baseApi2.post(`login/`, data).then(res => res.data);
    },

    registerCompany(data) {
        return baseApi2.post(`singup/company/`, data).then(res => res.data);
    },

    registerSupplier(data) {
        return baseApi2.post(`singup/supplier/`, data).then(res => res.data);
    },

    getMe(token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.get(`profile/`, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    changePassword(data) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.put(`change_password/`, data,{
            headers: {
                Authorization: "Token " + userToken
            }
        }).then(res => res.data);
    },

    editMe(data) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.put(`profile/`, data,{
            headers: {
                Authorization: "Token " + userToken
            }
        }).then(res => res.data);
    },

    logout(token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.post(`logout/`, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },
}

export let companyAPI = {
    getCompanyWorkers(token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.get(`company/worker/`, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    editCompanyWorker(workerId, data) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.put(`company/worker/${workerId}/`, data,{
            headers: {
                Authorization: "Token " + userToken
            }
        }).then(res => res.data);
    },

    createCompanyWorker(data) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.post(`singup/worker/`, data,{
            headers: {
                Authorization: "Token " + userToken
            }
        }).then(res => res.data);
    },

    deleteCompanyWorker(workerId) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.delete(`company/worker/${workerId}/`,{
            headers: {
                Authorization: "Token " + userToken
            }
        }).then(res => res.data);
    },

    getCompanyBoxes(token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.get(`company/box/`, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    getBoxWorkers(boxId, token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.get(`company/${boxId}/box/addworker/`, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    deleteBoxWorker(boxId, dataId, token) {
        console.log(boxId)
        const userToken = localStorage.getItem('access_token')
        return baseApi2.delete(`company/${boxId}/box/addworker/${dataId}`, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    addBoxWorker(boxId, data, token) {
        console.log(boxId)
        const userToken = localStorage.getItem('access_token')
        return baseApi2.post(`company/${boxId}/box/addworker/`, data, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    createCompanyBox(data, token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.post(`company/createbox/`, data, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    disableCompanyBox(boxId, token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.put(`company/box/${boxId}/`, {is_active: false},{
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    getCompanyContracts(token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.get(`company/contracts/`, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    deleteCompanyContract(contractId ,token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.delete(`company/contracts/${contractId}/`, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    getSuppInfo(suppId, token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.get(`company/suppliers/${suppId}/`, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    getSuppSearch(token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.get(`company/suppliers/`, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    createContractRequest(suppId, token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.post(`company/makecontract/supplier/${suppId}/`, {}, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },
}

export let supplierAPI = {
    getSupplierCouriers(token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.get(`supplier/courier/`, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    editSupplierCourier(courierId, data) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.put(`supplier/courier/${courierId}/`, data, {
            headers: {
                Authorization: "Token " + userToken
            }
        }).then(res => res.data);
    },

    createSupplierCourier(data) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.post(`singup/currier/`, data, {
            headers: {
                Authorization: "Token " + userToken
            }
        }).then(res => res.data);
    },

    deleteSupplierCourier(courierId) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.delete(`supplier/courier/${courierId}/`, {
            headers: {
                Authorization: "Token " + userToken
            }
        }).then(res => res.data);
    },

    getSupplierContracts(token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.get(`supplier/contract/`, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    acceptSupplierContract(contractId, token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.put(`supplier/responsecontract/${contractId}/`, {},{
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    deleteSupplierContract(contractId, token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.delete(`supplier/responsecontract/${contractId}/`,{
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    getSupplierMenus(token) {
        const userToken = localStorage.getItem('access_token')
        return baseApi2.get(`supplier/menu/`, {
            headers: {
                Authorization: "Token " + token || userToken
            }
        }).then(res => res.data);
    },

    createSupplierMenu(data) { //WARNING: may create bugs
        const userToken = localStorage.getItem('access_token')
        return baseApi2.post(`supplier/menu/`, data,{
            headers: {
                Authorization: "Token " +  userToken
            }
        }).then(res => res.data);
    },

    editSupplierMenu(menuId, data) { //WARNING: may create bugs
        const userToken = localStorage.getItem('access_token')
        return baseApi2.put(`supplier/menu/${menuId}/`, data,{
            headers: {
                Authorization: "Token " +  userToken
            }
        }).then(res => res.data);
    },

    deleteSupplierMenu(menuId) { //WARNING: may create bugs
        const userToken = localStorage.getItem('access_token')
        return baseApi2.delete(`supplier/menu/${menuId}/`,{
            headers: {
                Authorization: "Token " +  userToken
            }
        }).then(res => res.data);
    },

    createSupplierMenuProduct(menuId, data) { //WARNING: may create bugs
        const userToken = localStorage.getItem('access_token')
        return baseApi2.post(`supplier/menu/${menuId}/createproduct/`, data,{
            headers: {
                Authorization: "Token " +  userToken
            }
        }).then(res => res.data);
    },

    editSupplierMenuProduct(productId, data) { //WARNING: may create bugs
        const userToken = localStorage.getItem('access_token')
        return baseApi2.put(`supplier/product/${productId}/`, data,{
            headers: {
                Authorization: "Token " +  userToken
            }
        }).then(res => res.data);
    },

    deleteSupplierMenuProduct(productId) { //WARNING: may create bugs
        const userToken = localStorage.getItem('access_token')
        return baseApi2.delete(`supplier/product/${productId}/`,{
            headers: {
                Authorization: "Token " +  userToken
            }
        }).then(res => res.data);
    },
}