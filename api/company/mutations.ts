// Implementing the mutations for the company entity using axios
import axios from 'axios';
import { ICompanyRegistrationForm } from "./type";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export function registerCompany(data: ICompanyRegistrationForm) {
    const endPoint = 'auth/register/company';
    const url = `${apiUrl}/${endPoint}`;

    const formData = new FormData();
    formData.append('HRUserName', data.HRUserName);
    formData.append('HREmail', data.HREmail);
    formData.append('HRPassword', data.HRPassword);
    formData.append('HRFirstName', data.HRFirstName);
    formData.append('HRMiddleName', data.HRMiddleName);
    formData.append('HRPhoneNumber', data.HRPhoneNumber);
    formData.append('companyName', data.companyName);
    formData.append('website', data.website);
    formData.append('companyEmail', data.companyEmail);
    formData.append('companyPhoneNum', data.companyPhoneNum);
    formData.append('industryType', data.industryType);
    formData.append('address', JSON.stringify(data.address));
    if (data.image) {
        formData.append('image', data.image);
    }
    if (data.logo) {
        formData.append('logo', data.logo);
    }

    return axios.post(url, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
}