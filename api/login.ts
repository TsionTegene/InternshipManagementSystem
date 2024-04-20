// Login implementation
export async function login(formData: any) {
    const url = 'https://web-based-internship-management-system-5.onrender.com/auth/login';
    // const url = 'http://localhost:5000/auth/login';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
}