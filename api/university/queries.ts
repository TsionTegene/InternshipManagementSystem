import axios from "axios"
const api = process.env.NEXT_PUBLIC_API

export async function fetchUniversity () {

    const url = `${api}university`
    // const url = "http://localhost:5000/university"

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return response.json()
}

export async function fetchUniversitybyUserID(id:string) {

    const url = `${api}university/user/${id}`
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
    const url = `${api}university/${id}`
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
    const url = `${api}university/uncount/${id}`
    // const url = "http://localhost:5000/university"

    const response = await axios(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })
    return response.data

}
export async function fetchDepartment(id:string) {
    
    const url = `${api}department/un/${id}`
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
    const url = `${api}college`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}

export async function fetchCollegebyUnId (ID:any) {
    const url = `${api}college/${ID}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}


