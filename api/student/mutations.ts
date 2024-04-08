import { IStudentSignup } from '@/types';

export async function registerStudent(formData: FormData) {
  const url = 'https://web-based-internship-management-system-2-y60l.onrender.com/auth/register/student'; // Replace with your actual API endpoint

  // const response = await fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(data),
  // });

  // if (!response.ok) {
  //   throw new Error(`HTTP error! status: ${response.status}`);
  // }

  // const responseData = await response.json();
  // return responseData; // The response should contain the token

  console.log("This is from the API: ", formData.get('resume'));
}

