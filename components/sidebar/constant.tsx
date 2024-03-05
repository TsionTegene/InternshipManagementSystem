
import { LuLayoutDashboard } from "react-icons/lu";
import { FaLightbulb, FaTasks, FaUserSecret } from 'react-icons/fa';
import { FaWpforms } from "react-icons/fa6";
import { TfiUser } from 'react-icons/tfi';
import { PiStudentFill, PiUserListLight } from "react-icons/pi";
import { BiHeadphone } from 'react-icons/bi';
import { CgList } from 'react-icons/cg';
import { MdCalendarMonth, MdOutlineSupervisorAccount, MdFiberNew, MdApproval } from 'react-icons/md';
import { SlCalender, SlDocs } from 'react-icons/sl';
import { VscRequestChanges } from 'react-icons/vsc';
import { IconType } from "react-icons";
import { GiTeamIdea } from 'react-icons/gi';
import { GrInProgress } from 'react-icons/gr';
import { BsPersonFillGear } from "react-icons/bs";
import { TbReportAnalytics } from "react-icons/tb";

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
        path: '/newapplication',
        icon: <MdFiberNew />,
    },
    {
        title: 'Students',
        path: '/studentdetail',
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
export const collegedean = [
    {
        title: 'Department Head',
        path: '/dashboard',
        icon: <BsPersonFillGear />,
    },

    {
        title: 'Advisor',
        path: '/advisors',
        icon: <PiUserListLight />,
    },
    {
        title: 'Approval',
        path: '/approval',
        icon: <MdApproval />,
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
