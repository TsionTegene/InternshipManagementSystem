export async function registerUser(formData: FormData) {
    // const url = 'https://web-based-internship-management-system-3.onrender.com/users';
    console.log(formData)
  const url = "http://localhost:5000/users"
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

  export async function fetchCollegebyUnId (User_ID:any,Role_Name:any) {
    const url = `http://localhost:5000/users/${User_ID}/assign/${Role_Name}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}
  

  