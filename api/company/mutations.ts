// Implementing the mutations for the company entity using axios
import { ICompanyRegistrationForm } from "./type";
import Router from 'next/router';
import axios from 'axios';
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

export async function assignMentor(mentorId: string, studentId: string) {
  const url = `${api}company/assign_mentor/${mentorId}/${studentId}`;

  try {
    const response = await axios.patch(url, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // You can check additional info if needed
      throw new Error(`HTTP error! status: ${error.response?.status}, message: ${error.message}`);
    } else {
      // Handle unexpected errors
      throw new Error('An unexpected error occurred');
    }
  }
}
export async function addCompany(depid: string,compid:string) {
  const url = `${api}head/connect/${depid}/${compid}`;

  const response = await axios.post(url, {
    headers: { 'Content-Type': 'application/json' },
  });




  const responseData = await response.data;
  return responseData;
}

export async function removeCompany(depid: string, compid: string) {
  const url = `${api}head/disconnect/${depid}/${compid}`;

  const response = await axios.delete(url, {
    headers: { 'Content-Type': 'application/json' },
  });




  const responseData = await response.data;
  return responseData;
}