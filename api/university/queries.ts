export async function fetchUniversity () {
    const url = "http://localhost:5000/university"

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}

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


export async function fetchallCollege () {
    const url = "http://localhost:5000/college"

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}

export async function fetchCollegebyUnId (ID:any) {
    const url = `http://localhost:5000/college/un/${ID}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}
