import axios from "axios";

const api = process.env.NEXT_PUBLIC_API

export async function logout() {
    const url = `${api}auth/logout`;

    const response = await axios.post(url, {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
    });
    console.log("response: ", response)
    return response
}