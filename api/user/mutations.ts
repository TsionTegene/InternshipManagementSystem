export async function registerUser(formData: FormData) {
    const url = 'https://web-based-internship-management-system-3.onrender.com/users';
  // const url = "http://localhost:5000/users"
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
  

  