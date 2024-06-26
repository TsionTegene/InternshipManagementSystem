import axios from 'axios';

const api = process.env.NEXT_PUBLIC_API;

export async function findApplicationsByCompanyId(cId: string) {
    const params = "PENDING"
    const url = `${api}apply/applicationStatus/${cId}/${params}`;

    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json', 
            }
        });

        console.log(response.data); 
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            // You can check additional info if needed
            throw new Error(`HTTP error! status: ${error.response?.status}, message: ${error.message}`);
        } else {
            // Handle unexpected errors
            throw new Error('An unexpected error occurred');
        }
    }
}
