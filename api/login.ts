// Login implementation
export async function login(formData: FormData) {
    const url = 'http://localhost:5000/auth/login';
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