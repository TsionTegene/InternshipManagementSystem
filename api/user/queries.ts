export async function fetchUserWithRoleNull () {
    const url = "http://10.194.65.38:5000/users/role"

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}

export async function allRole() {
    const url = "http://10.194.65.38:5000/auth/roles"

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}

export async function allUniversityUser(id:string) {
    const url = `http://10.194.65.38:5000/users/university/${id}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}

