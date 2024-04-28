export async function registerInternship(formData: any) {
    const url = 'http://localhost:5000/post-internship';
    // console.log("Form values at api to be sent: ", formData)

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Authorization: `Bearer ${localStorage.getItem('access_token')}`
        },
        body: JSON.stringify(formData)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    // console.log(responseData)
    return responseData;
}