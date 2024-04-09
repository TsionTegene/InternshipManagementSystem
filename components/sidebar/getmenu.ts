import { student, collegedean, hr, departmenthead, mentor,systemadmin } from './constant';

export const getMenu = (role?: string | null) => {
    return role === 'hr'
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
                    : null;
};
