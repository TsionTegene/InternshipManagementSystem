import { student, collegedean, hr, departmenthead } from './constant';

export const getMenu = (role?: string | null) => {
    return role === 'hr'
        ? hr
        : role === 'student'
            ? student
            : role === 'collegedean'
                ? collegedean
                : role === 'departmenthead'
                    ? departmenthead
                    : null;
};
