export async function interns(params:any) {
    const url = 'https://web-based-internship-management-system-5.onrender.com'
    await fetch
    
}

export async function findCompanyByUserId(uId: string) {
    console.log(uId)
    const url = 'http://localhost:5000/company?userId=${uId}';
    const response = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('access_token')}`
        }
    });

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log("responseData: ", responseData[0]?.id)
    return responseData[0]?.id;
}