export default interface  studentData {


    email: string;
    password: string;
    firstName: string;
    middleName: string;
    userName: string;
    profilePic?: string;
    imagePublicId?: string;
    phoneNum: string;
    verified?: boolean;
    universityName?: string;
    departmentName?: string;
    year: number;
    gpa: number;
    skills: string[];
    resumeUrl?: string;
    resumePublicId?: string;

}