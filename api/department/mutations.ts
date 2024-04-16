export async function registerDepartment(formData: FormData) {
    const url = "http://localhost:5000/auth/register/department"
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