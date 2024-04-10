export async function fetchDepartment() {
    const url = "http://localhost:5000/department"

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()
}