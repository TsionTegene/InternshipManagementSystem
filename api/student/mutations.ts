import axios from 'axios';

export async function registerStudent(formData: FormData) {
  // const url = 'https://web-based-internship-management-system-3.onrender.com/auth/register/student';
  const url = 'http:/localhost:5000/auth/register/student'; 

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

