import axios from 'axios';
const api = process.env.NEXT_PUBLIC_API

export async function registerStudent(formData: FormData) {
  // const url = 'https://web-based-internship-management-system-5.onrender.com/auth/register/student';
  const url = `${api}auth/register/student`; 

  console.log('skills', formData.get('skills'))
  await fetch(url, {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json() // or .text() if the response is plain text
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });

}

export async function updateStudent(id: string, data: any) {
  const url = `${api}student/${id}`;

  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("access_token");
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const responseData = await response.json();
    return responseData;
  }
}

