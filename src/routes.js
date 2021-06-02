import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import ManageFiles from "views/examples/ManageFiles.js";
import EmployeeReg from "views/examples/EmployeeReg.js";
import EmployeeList from "views/examples/EmployeeList.js";
import AttendanceLogs from "views/examples/AttendanceLogs";
import LeavesMng from "views/examples/LeavesMng.js";
import ManageRec from "views/examples/ManageRec.js";
import MemoList from "views/examples/MemoList.js";
import AttendanceArchive from "views/examples/AttendanceArchive.js";
import UploadFiles from "views/examples/UploadFiles.js";
import GovDeduct from "views/examples/GovDeduct.js"
import EmpProfile from "views/examples/EmpProfile";
import EmpLeaves from "views/examples/EmpLeaves";
import EmpMemos from "views/examples/EmpMemos";
import EmpPayslip from "views/examples/EmpPayslip";
import EmpMessg from "views/examples/EmpMessg";
import EmpInbox from "views/examples/EmpInbox";
var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
  },
  {
    path: '/empProfile',
    name: 'Employee Profile',
    icon: "ni ni-tv-2 text-primary",
    component: EmpProfile,
    layout: '/admin',

  },
  {
    path: '/empLeaves',
    name: 'Leaves',
    icon: "ni ni-tv-2 text-primary",
    component: EmpLeaves,
    layout: '/admin',

  },
  {
    path: '/empMemos',
    name: 'Announcement & Memos',
    icon: "ni ni-tv-2 text-primary",
    component: EmpMemos,
    layout: '/admin',

  },
  {
    path: '/empPayslip',
    name: 'Payslip Records',
    icon: "ni ni-tv-2 text-primary",
    component: EmpPayslip,
    layout: '/admin',

  },
  {
    path: '/empMessg',
    name: 'Messages',
    icon: "ni ni-tv-2 text-primary",
    component: EmpMessg,
    layout: '/admin',

  },
  {
    path: '/empinbox',
    name: 'Messages > Survey',
    icon: "ni ni-tv-2 text-primary",
    component: EmpInbox,
    layout: '/admin',

  },

  {
    path: "/AttendanceArchive",
    name: "Attendance Logs Archive",
    icon: "ni ni-planet text-blue",
    component: AttendanceArchive,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "User Profile",
    icon: "ni ni-single-02 text-yellow",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
  },

  {
    path: "/managefiles",
    name: "Manage Files",
    component: ManageFiles,
    layout: "/admin",
  },
  {
    path: "/employeereg",
    name: "Employee Registration",
    component: EmployeeReg,
    layout: "/admin",
  },
  {
    path: "/employeelist",
    name: "Employee List",
    component: EmployeeList,
    layout: "/admin",
  },
  {
    path: "/attendancelogs",
    name: "Attendance Logs",
    component: AttendanceLogs,
    layout: "/admin",
  },
  {
    path: "/leavesmng",
    name: "Leaves Management",
    component: LeavesMng,
    layout: "/admin",
  },
  {
    path: "/managerec",
    name: "Manage Records",
    component: ManageRec,
    layout: "/admin",
  },
  {
    path: "/memolist",
    name: "Announcements and Memos",
    component: MemoList,
    layout: "/admin",
  },
  {
    path: "/UploadFiles",
    name: "Upload Files",
    component: UploadFiles,
    layout: "/admin",
  },
  {
    path: "/GovDeduct",
    name: "Government Deductions",
    component: GovDeduct,
    layout: "/admin",
  },
  

];
export default routes;
