// Implementing the mutations for the company entity using axios
import axios, { AxiosResponse } from 'axios';
import { ICompanyRegistrationForm } from "./type";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function registerCompany(formData: FormData){
    const url = 'http://localhost:5000/auth/register/company';

    await fetch(url, {
        method: 'POST',
        body: formData,
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json() 
        })
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}