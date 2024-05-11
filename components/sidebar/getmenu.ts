import {
  advisor,
  student,
  collegedean,
  hr,
  departmenthead,
  mentor,
  systemadmin,
  UniversityAdmin,
} from "./constant";

export const getMenu = (role?: string | null) => {
  return role === "COMPANY_HR"
    ? hr
    : role === "STUDENT"
    ? student
    : role === "COLLEGE_DEAN"
    ? collegedean
    : role === "ADVISOR"
    ? advisor
    : role === "MENTOR"
    ? mentor
    : role === "SYSTME_ADMIN"
    ? systemadmin
    : role === "DEPARTMENT_HEAD"
    ? departmenthead
    : role === "UNIVERSITY_ADMIN"
    ? UniversityAdmin
    : null;
};
