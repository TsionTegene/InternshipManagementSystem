import axios from 'axios';

const api = process.env.NEXT_PUBLIC_API;

export async function updateApplications(status: string, id: string) {
    const url = `${api}apply/${id}`;
    console.log(status, id)

    try {
        const response = await axios.patch(url, {
            Status: status
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
