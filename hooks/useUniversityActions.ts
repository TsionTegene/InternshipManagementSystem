import { useUniversitySignup ,useUniversityData,useUnivesityAddCollage } from '@/queries/useUniversityQueries';

export const useUniversityActions = ()=> {

  const signupUniversity = useUniversitySignup();
  const universityData = useUniversityData();
  const addCollage  = useUnivesityAddCollage() ;


  return {
    signupUniversity,
    universityData,
    addCollage
  };
};