import axios from "axios";
const api = process.env.NEXT_PUBLIC_API

export async function registerUser(formData: FormData,id:string) {
    // const url = 'https://web-based-internship-management-system-3.onrender.com/users';
    console.log(formData)
  console.log(id)

  const url = `${api}users/${id}`
  const response = await axios.post(url, formData, {
    headers: { 'Content-Type': 'application/json' },
  });


    
  
    const responseData = await response.data;
    return responseData;
  }

  export async function fetchCollegebyUnId (User_ID:any,Role_Name:any) {
    const url = `${api}users/${User_ID}/assign/${Role_Name}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}
  
export async function updateUser(formData: FormData, id: string) {
  const url = `${api}users/${id}`
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