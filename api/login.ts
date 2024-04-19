// Login implementation
export async function login(formData: any) {
    const url = 'https://web-based-internship-management-system-3.onrender.com/auth/login';
    console.log("Isayas:", formData);
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