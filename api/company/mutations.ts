// Implementing the mutations for the company entity using axios
import axios, { AxiosResponse } from 'axios';
import { ICompanyRegistrationForm } from "./type";
const api = process.env.NEXT_PUBLIC_API

export async function registerCompany(formData: FormData) {
    // const url = 'https://web-based-internship-management-system-5.onrender.com/auth/register/company';
    const url = 'http://localhost:5000/auth/register/company';

    await fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.status === 403) {
          // Assuming you have a route set up for this page
        } else if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));

}

export async function addMentor(formValues: any) {
  const url = `${api}users/mentor`

  try {
    const response = await axios.post(url, formValues)
    return response.data
  } catch (error) {
    console.error(error)
  }
}