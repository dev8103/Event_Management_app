// import Cookies from "js-cookie";
import { commonrequest } from "./commonRqst";
import { BACKEND_URL } from "./helper";

// const user = JSON.parse(Cookies.get('user') || null);

export const postRequest = async (endpoint, data, headers = {}, params = {}) => {

    try {
        const response = await commonrequest("POST", `${BACKEND_URL}/${endpoint}`, data, headers, params);
        return response;
    } catch (error) {
        throw new Error(`Error in POST request to ${endpoint}`);
    }
};

export const postRequestWithToken = async (endpoint, data, headers = {}, params = {}) => {
    const token = JSON.parse(localStorage.getItem('user') || "");
    if (!token) {
        throw new Error('No token found');
    }
    headers['Authorization '] = `Bearer ${token}`;
    // headers['Content-Type'] = 'application/json';

    try {
        const response = await commonrequest("POST", `${BACKEND_URL}/${endpoint}`, data, headers, params);
        return response;
    } catch (error) {
        throw new Error(`Error in POST request to ${endpoint}`);
    }
}

// export const isLogged = async (usrType) => {
//     if(!user) {
//         alert('Please login to access this page hghfg');
//         window.location.href = `/home`;
//         return true;
//     }

//     if(user.type !== usrType) {
//         // Cookies.remove('user');
//         return false;
//     }

//     return true;
// }

export const getRequest = async (endpoint, data, headers = {}, params = {}) => {

    try {
        const response = await commonrequest("GET", `${BACKEND_URL}/${endpoint}`, data, headers, params);
        return response;
    } catch (error) {
        throw new Error(`Error in GET request to ${endpoint}`);
    }
};


export const getRequestWithToken = async (endpoint, params = {}) => {
    const token =  JSON.parse(localStorage.getItem('user') || "");
    if (!token) {
        alert('Please login to access this page');
        window.location.href = `/login`;
        throw new Error('No token found');
    }
    const headers = {};
    headers['Authorization '] =`Bearer ${token}` ;
    headers['Content-Type'] = 'application/json';

    try {
        const response = await commonrequest("GET", `${BACKEND_URL}/${endpoint}`, {}, headers, params);
        return response;
    } catch (error) {
        throw new Error(`Error in GET request to ${endpoint}`);
    }
};