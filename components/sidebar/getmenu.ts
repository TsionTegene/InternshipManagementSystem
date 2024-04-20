import { student, collegedean, hr, departmenthead, mentor,systemadmin, universityAdmin } from './constant';

export const getMenu = (role?: string | null) => {
    return role === 'COMPANY_HR'
        ? hr
        : role === 'student'
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
                    ? universityAdmin
                    : null;
};
