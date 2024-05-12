import axios from "axios";
const api = process.env.NEXT_PUBLIC_API;

console.log(api);
export async function registerStudent(formData: FormData) {
  console.log("student data: ", formData);
  // const url = 'https://web-based-internship-management-system-5.onrender.com/auth/register/student';
  const url = `${api}auth/register/student`;

  await fetch(url, {
    method: "POST",
    body: formData,
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // or .text() if the response is plain text
    })
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

export async function updateStudent(id: string, data: any) {
  const url = `${api}student/${id}`;

  if (typeof window !== "undefined") {
    const accessToken = localStorage.getItem("access_token");
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  }
}

export async function approveStudent(id: string) {
  const url = `${api}head/${id}/approve`;

  const response = await axios.post(url, {
    headers: { 'Content-Type': 'application/json' },
  });




  const responseData = await response.data;
  return responseData;
}

export async function rejectStudent(id: string) {
  const url = `${api}head/${id}/reject`;

  const response = await axios.post(url, {
    headers: { 'Content-Type': 'application/json' },
  });




  const responseData = await response.data;
  return responseData;
}

export async function evaluateStudentByMentor(id: string, point:string) {
  const url = `${api}student/evaluateByMentor/${id}/${point}`;

  const response = await axios.patch(url, {
    headers: { 'Content-Type': 'application/json' },
  });




  const responseData = await response.data;
  return responseData;
}

export async function evaluateStudentByAdvisor(id: string, point: string) {
  const url = `${api}student/evaluateByAdvisor/${id}/${point}`;

  const response = await axios.patch(url, {
    headers: { 'Content-Type': 'application/json' },
  });




  const responseData = await response.data;
  return responseData;
}

//Students Function

export async function submiteApplication(formData: FormData) {
  const url = `${api}apply`;

  const response = await axios.post(url, formData,{
    headers: { 'Content-Type': 'application/json' },
  });

  const responseData = await response.data;
  return responseData;
}

