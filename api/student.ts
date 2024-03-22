import { Mutation, useMutation } from '@tanstack/react-query';
import studentData from './studentdata'; // Assuming studentData contains registration details

async function registerStudent(data: studentData) {
  const url = 'http://localhost:5000/auth/register/student'; // Replace with your actual API endpoint

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

function useStudentSignup() {
  const mutation = useMutation(  
    {
    mutationFn :registerStudent,
    onSuccess: (data: { token: string; }) => {
      localStorage.setItem('token', data.token); // Store the token in local storage
      console.log('Registration successful!', data);
      // Handle successful registration (e.g., redirect to login)
    },
    onError: (error: any) => {
      console.error('Registration error:', error);
      // Handle registration errors (e.g., display error message to user)
    },
  });

  return mutation;
}

export default useStudentSignup;
