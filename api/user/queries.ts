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

