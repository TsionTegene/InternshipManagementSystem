// Login implementation
export async function login(formData: any) {
    // const url = 'https://web-based-internship-management-system-5.onrender.com/auth/login';
    const url = 'http://localhost:5000/auth/login';
    // console.log("Form values at api to be sent: ", formData)

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
    // console.log(responseData)
    return responseData;
}

export async function refreshToken(refreshToken: string) {
    const url = 'https://web-based-internship-management-system-5.onrender.com/auth/refresh';
    // const url = 'http://localhost:5000/auth/refresh';

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ refreshToken })
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData)
    return responseData;
}