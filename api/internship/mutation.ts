import axios from "axios";

export async function registerInternship(formData: any) {
    console.log("Form values at api to be sent: ", formData)
    const url = 'http://localhost:5000/internship';
    // console.log("Form values at api to be sent: ", formData)

    const response = await axios.post(url, formData, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    });

    if (!(response.status >= 200 && response.status < 300)) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.data;
    // console.log(responseData)
    return responseData;
}