import axios from "axios";

export async function registerUser(formData: FormData,id:string) {
    // const url = 'https://web-based-internship-management-system-3.onrender.com/users';
    console.log(formData)
  console.log(id)

  const url = `http://10.194.65.38:5000/users/${id}`
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
    const url = `http://10.194.65.38:5000/users/${User_ID}/assign/${Role_Name}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}
  
export async function updateUser(formData: FormData, id: string) {
  const url = `http://10.194.65.38:5000/users/${id}`
  try {
    const response = await axios.patch(url, formData, {
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.data) { // Assuming successful response has data
      throw new Error('Empty response from server');
    }

    return response.data;
  } catch (error) {
    console.error('Error updating user:', error);
    throw error; // Re-throw for potential handling in calling code
  }
}