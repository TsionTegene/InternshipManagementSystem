// Implementing the mutations for the company entity using axios
import axios, { AxiosResponse } from 'axios';
import { ICompanyRegistrationForm } from "./type";
import Router from 'next/router';

export async function registerCompany(formData: FormData) {
    // const url = 'https://web-based-internship-management-system-5.onrender.com/auth/register/company';
    const url = 'http://localhost:5000/auth/register/company';

    await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.status === 403) {
          Router.push("/403"); // Assuming you have a route set up for this page
        } else if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

}