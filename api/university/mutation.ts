import axios from 'axios';

export async function registerUniversity(formData: FormData) {
  // const url = 'https://web-based-internship-management-system-3.onrender.com/auth/register/university';
const url = "http://localhost:5000/auth/register/university"
  const response = await fetch(url, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  

  const responseData = await response.json();
  return responseData;
}

export async function registerDepartment(formData: FormData) {
  const url = "http://localhost:5000/auth/register/department"
  try {
    const response = await axios.post(url, formData, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.data) { // Assuming successful response has data
      throw new Error('Empty response from server');
    }

    return response.data;
  } catch (error) {
    console.error('Error creating college:', error);
    throw error; // Re-throw for potential handling in calling code
  }
}

export async function createCollege(formData: any) {
  //const url = 'https://web-based-internship-management-system-4.onrender.com/auth/create/college';
  const url = "http://localhost:5000/college/create"
  // Convert FormData to JSON (if backend expects JSON)
  

  try {
    const response = await axios.post(url, formData, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.data) { // Assuming successful response has data
      throw new Error('Empty response from server');
    }

    return response.data;
  } catch (error) {
    console.error('Error creating college:', error);
    throw error; // Re-throw for potential handling in calling code
  }
}

