"use client"

import { CompanyForm } from '@/components/signup/company-form'
import { StudentForm } from '@/components/signup/student-form';
import { UniversityForm } from '@/components/signup/university-form';
import React from 'react'


const SignupForm = ({ params }) => {
  console.log(params.id);


  return (
    <div>
      {params.id === 'company' && <CompanyForm />}
      {params.id === 'student' && <StudentForm />}
      {params.id === 'university' && <UniversityForm />}

    </div>
  )
}

export default SignupForm