
export async function registerUniversity(formData: FormData) {
  const url = 'https://web-based-internship-management-system-3.onrender.com/auth/register/university'; // Replace with your actual API endpoint

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData; // The response should contain the token

}

