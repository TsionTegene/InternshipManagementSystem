import axios from "axios";

export async function filterInternships(query: any) {
    const url = `http://localhost:5000/internship/company/${query}`;
    const internships = await axios.get(url, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    });

    if (!(internships.status >= 200 && internships.status < 300)) {
        throw new Error(`HTTP error! status: ${internships.status}`);
    }

    const responseData = await internships.data;
    console.log("responseData internship: ", responseData) 
    return responseData;
}