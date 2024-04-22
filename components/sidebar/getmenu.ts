import { student, collegedean, hr, departmenthead, mentor,systemadmin, UniversityAdmin } from './constant';

export const getMenu = (role?: string | null) => {
    return role === 'COMPANY_HR'
        ? hr
        : role === 'STUDENT'
            ? student
            : role === 'collegedean'
                ? collegedean
                :role==='mentor'
                ?mentor
                :role==='systemadmin'
                ? systemadmin
                : role === 'departmenthead'
                ? departmenthead
                : role === 'UNIVERSITY_ADMIN'
                    ? UniversityAdmin
                    : null;
};
