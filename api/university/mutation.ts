export async function registerUniversity(formData: FormData) {
  const url = 'https://web-based-internship-management-system-3.onrender.com/auth/register/university';
// const url = "http://localhost:5000/auth/register/university"
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

