import axios from "axios";
import studentData from "./type";
const api = process.env.NEXT_PUBLIC_API

export async function registerStudent(data: studentData) {
  const url = `${api}auth/register/student`; // Replace with your actual API endpoint

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData; // The response should contain the token
}

export async function fetchStudentsByCompanyId(id: string) {
  const url = `${api}company/${id}/students`;
  if (typeof window !== "undefined") {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();
    return responseData;
  }
}

export async function fetchStudentsByDepartmentId(id: string) {
  const url = `${api}student/dep/${id}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData;
}

export async function fetchStudentsByUniversityId(id: string) {
  const url = `${api}university/${id}/students`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData;
}

export async function fetchStudentById(id: string) {
  const url = `${api}student/${id}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData;
}

export async function fetchStudentsByInternshipId(id: string) {
  const url = `${api}internship/${id}/students`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData;
}

export async function updateStudent(id: string, data: studentData) {
  const url = `${api}student/${id}`;

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData;
    return responseData; // The response should contain the token
  }

export async function allStudentsInUniversity(id: string) {
  // to make it wait if the id is null, we can use the if statement
  if (!id) {
    return
  }
  const url = `${api}student/${id}`
  const response = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    }
  })

  return response

}