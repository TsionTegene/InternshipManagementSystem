"use client"

import Footer from '@/components/footer';
import Header from '@/components/page-header';
import { CompanyForm } from '@/components/signup/company-form'
import { StudentForm } from '@/components/signup/student-form';
import { UniversityForm } from '@/components/signup/university-form';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import React from 'react'


const SignupForm: React.FC<{ params: Params }> = ({ params }) => {
  console.log(params.id);

  return (
    <>
    <Header />
    <div>
      {params.id === "company" && <CompanyForm />}
      {params.id === "student" && <StudentForm />}
      {params.id === "university" && <UniversityForm />}
    </div>
    <Footer />
    </>
  );
};

export default SignupForm