
  import studentData from "./type";

export async function registerStudent(data: studentData) {
    const url = 'http://localhost:5000/auth/register/student'; // Replace with your actual API endpoint
  
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  
    const responseData = await response.json();
    return responseData; // The response should contain the token
  }