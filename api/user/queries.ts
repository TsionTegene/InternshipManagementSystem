import axios from "axios";
const api = process.env.NEXT_PUBLIC_API

export async function fetchUserWithRoleNull (id:string) {
    const url = `${api}users/role/${id}`
    // const response = await fetch(url, {
    //     method: "GET",
    //     headers: {
    //         "Content-Type": "application/json",
    //     }
    // })
    const response = await axios.get(url, {
        headers: { 'Content-Type': 'application/json' },
    });
 console.log("returned users ",await response.data)
    return response.data

}

export async function allRole() {
    const url = `${api}auth/roles/admin`

    const response = await axios.get(url, {
        headers: { 'Content-Type': 'application/json' },
    });

    return  response.data

}

export async function allUniversityUser(id:string) {
    const url = `${api}users/university/${id}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}

export async function fetchAdvisor(id: string) {
    const url = `${api}head/advisor/${id}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}

export async function fetchMentor(id: string) {
    const url = `${api}users/mentor/${id}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    const responseData = await response.json();
    console.log("responseData: ", responseData[0]?.id)
    return responseData?.id;

}

export async function countAdvisor(id: string) {
    const url = `${api}head/countadvisor/${id}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}

//get the list of students assigned to the advisor with there report.
export async function advisorStudents(id: string) {
    const url = `${api}student/advisorstd/${id}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}

export async function advisorrepos(id: string) {
    const url = `${api}user/advisor/${id}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}


