import axios from "axios"

const api = process.env.NEXT_PUBLIC_API
export const filterDepartment = async (id: string) => {
    const url = `${api}department/un/${id}`
    const response = await axios.get(url)
    console.log("department ", response.data)
    return response.data
}