import { student, collegedean, hr, departmenthead, mentor, systemadmin, UniversityAdmin } from './constant';

export const getMenu = (role?: string | null) => {
    return role === 'COMPANY_HR'
        ? hr
        : role === 'STUDENT'
            ? student
            : role === 'COLLEGE_DEAN'
                ? collegedean
                : role === 'MENTOR'
                    ? mentor
                    : role === 'SYSTME_ADMIN'
                        ? systemadmin
                        : role === 'DEPATMENT_HEAD'
                            ? departmenthead
                            : role === 'UNIVERSITY_ADMIN'
                                ? UniversityAdmin
                                : null;
};
