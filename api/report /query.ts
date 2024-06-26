import axios from "axios";

const api = process.env.NEXT_PUBLIC_API

export async function getReportsById(id: string) {
    const url = `${api}report/mentor/${id}`;
    try {
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
            },
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

export async function getReportsByAdvisorId(id: string) {
    const url = `${api}report/reportadvisor/${id}`;
    try {
        const response = await axios.get(url, {
            headers: {
                "Content-Type": "application/json",
            },
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