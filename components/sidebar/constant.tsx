
import { LuLayoutDashboard } from "react-icons/lu";
import { FaLightbulb, FaTasks, FaUniversity, FaUserSecret } from 'react-icons/fa';
import { FaWpforms } from "react-icons/fa6";
import { TfiUser } from 'react-icons/tfi';
import { PiStudentFill, PiUserListLight } from "react-icons/pi";
import { BiHeadphone } from 'react-icons/bi';
import { CgList } from 'react-icons/cg';
import { MdCalendarMonth, MdOutlineSupervisorAccount, MdFiberNew, MdApproval, MdAddBox } from 'react-icons/md';
import { SlCalender, SlDocs } from 'react-icons/sl';
import { VscRequestChanges } from 'react-icons/vsc';
import { IconType } from "react-icons";
import { GiTeamIdea } from 'react-icons/gi';
import { GrInProgress } from 'react-icons/gr';
import { BsPersonFillGear } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";
import { RiDashboardFill } from "react-icons/ri";

interface ISideBarMenu {
    title: string,
    path: string,
    icon: IconType,
}

export const hr = [
    {
        title: 'Dashboard',
        path: '/hr/dashboard',
        icon: <LuLayoutDashboard />,
    },
    {
        title: 'Application',
        path: '/hr/application',
        icon: <FaWpforms />,
    },
    {
        title: 'New Application',
        path: '/hr/newapplication',
        icon: <MdFiberNew />,
    },
    {
        title: 'Students',
        path: '/hr/studentdetail',
        icon: <PiStudentFill />,
    },

    {
        title: 'Mentors',
        path: '/hr/mentordetail',
        icon: <GiTeamIdea />,
    },
];
export const student = [
    {
        title: "Internship Opportunities",
        path: "/student/internshipopportunities",
        icon: <FaLightbulb />,
    },
    {
        title: "My Internships",
        path: "/student/myinternships",
        icon: <FaTasks />
        ,
    },
    {
        title: "Application Status",
        path: "/student/applicationstatus",
        icon: <GrInProgress />,
    },
    {
        title: "My Mentor",
        path: "/student/mymentor",
        icon: <GiTeamIdea />,
    },
    {
        title: "My Advisor",
        path: "/student/myadvisor",
        icon: <MdOutlineSupervisorAccount />,
    },
    // {
    //     title: "Report to Advisor and Mentor",
    //     path: "/student/myadvisor",
    //     icon: <TbReportAnalytics />,
    // },
];
export const mentor = [
    {
        title: "Evaluate",
        path: "/mentor/evaluate",
        icon: <FaLightbulb />,
    },
    {
        title: "Report",
        path: "/mentor/report",
        icon: <FaTasks />
        ,
    },
    {
        title: 'Students',
        path: '/mentor/students',
        icon: <PiStudentFill />,
    },

];
export const systemadmin = [
    {
        title: "Dashboard",
        path: "/systemadmin/dashboard",
        icon:<RiDashboardFill />
,
    },
    {
        title: "Universities",
        path: "/systemadmin/universities",
        icon: <FaUniversity />
        ,
    },
{                                                                                                                                                                                                                                                                                                                                                                              
        title: "Companies",
        path: "/systemadmin/companies",
        icon: <FaUniversity />

        ,
    },
   {
        title: "Students",
        path: "/systemadmin/students",
        icon: <PiStudentFill />

        ,
    }, 

];
export const collegedean = [
    {
        title: 'Department Head',
        path: '/collegedean/dashboard',
        icon: <BsPersonFillGear />,
    },

    {
        title: 'Advisor',
        path: '/collegedean/advisors',
        icon: <PiUserListLight />,
    },
    {
        title: 'Form',
        path: '/collegedean/form',
        icon: <FaWpforms />
        ,
    },
];

export const departmenthead = [
    {
        title: 'Student',
        path: '/departmenthead/students',
        icon: <CgList />,
    },
    {
        title: 'Advisor',
        path: '/advisor',
        icon: <MdOutlineSupervisorAccount />,
    },
    {
        title: 'Approval',
        path: '/approval',
        icon: <MdApproval />,
    },
];


export const universityAdmin = [
    {
        title: 'College',
        path: '/UniversityAdmin/list_College',
        icon:  <FaUniversity />,
    },
    {
        title: 'Add College',
        path: '/UniversityAdmin/Add_Colleges',
        icon: <MdAddBox />,
    },
    {
        title: 'Student',
        path: '/UniversityAdmin/students',
        icon: <PiStudentFill />,
    },
];
