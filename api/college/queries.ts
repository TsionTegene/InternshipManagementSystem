import useParameter from "@/stores/parameter"

//@ts-ignore
const Id  = useParameter((state)=>state.Id)

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

export async function fetchCollegebyUnId (id : any) {
    const url = `http://localhost:5000/college/un/${Id}`

    const response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    })

    return response.json()

}