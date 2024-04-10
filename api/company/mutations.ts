// Implementing the mutations for the company entity using axios
import axios, { AxiosResponse } from 'axios';
import { ICompanyRegistrationForm } from "./type";

export async function registerCompany(formData: FormData) {
    const url = 'http://localhost:5000/auth/register/company';

    await fetch(url, {
        method: 'POST',
        body: formData,
    })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));

}