import { student, collegedean, hr, departmenthead, mentor } from './constant';

export const getMenu = (role?: string | null) => {
    return role === 'hr'
        ? hr
        : role === 'student'
            ? student
            : role === 'collegedean'
                ? collegedean
                :role==='mentor'
                ?mentor
                : role === 'departmenthead'
                    ? departmenthead
                    : null;
};
