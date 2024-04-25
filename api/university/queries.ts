import axios from "axios"

export async function fetchUniversity () {

    const url = "http://10.194.65.38:5000/university"
    // const url = "http://localhost:5000/university"

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return response.json()
}

export async function fetchUniversityById(id: string) {
    const url = `http://10.194.65.38:5000/university/${id}`
    // const url = "http://localhost:5000/university"

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}

export async function fetchCountUniversityStaffById(id: string) {
    const url = `http://localhost:5000/university/uncount/${id}`
    // const url = "http://localhost:5000/university"

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}
export async function fetchDepartment(id:string) {
    
    const url = `http://10.194.65.38:5000/department/un/${id}`
    console.log("api -----")
    const response = await axios(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return response.data
}


export async function fetchallCollege () {
    const url = "http://10.194.65.38:5000/college"

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}

export async function fetchCollegebyUnId (ID:any) {
    const url = `http://10.194.65.38:5000/college/${ID}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}


