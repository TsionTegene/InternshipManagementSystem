// Login implementation
<<<<<<< HEAD
export async function login(formData: any) {
    const url = 'https://web-based-internship-management-system-5.onrender.com/auth/login';
    // const url = 'http://localhost:5000/auth/login';

=======
export async function login(formData: FormData) {
    
    const url = 'https://web-based-internship-management-system-3.onrender.com/auth/login';
>>>>>>> 77f54dd (Updated some parts in student form)
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