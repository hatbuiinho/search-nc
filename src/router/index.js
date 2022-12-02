
import MainLayout from "~/components/containers/layouts/MainLayout";
import NotFound from "~/components/NotFound";
import MoralClass from "~/pages/MoralClass";
import SearchDepartmentAssignment from "~/pages/SearchDepartmentAssignment";
import SearchRegister from "~/pages/SearchRegister";
import { AppRoute } from "./AppRoute";

const ROUTES = [
  {
    key: "register",
    path: "/",
    exact: true,
    component: SearchRegister,
    layout: MainLayout,
    title: 'Đăng ký Đại lễ'
  },
  {
    key: "assignDepartment",
    path: "/department-assignment",
    exact: true,
    component: SearchDepartmentAssignment,
    layout: MainLayout,
    title: 'Thông tin phân ban'
  },
  {
    key: "moralClass",
    path: "/moral-class",
    exact: true,
    component: MoralClass,
    layout: MainLayout,
    title: 'Lớp học Đạo Đức'
  },
  {
    key: "NOT_FOUND",
    component: NotFound,
    layout: MainLayout,
  },
];

export { ROUTES, AppRoute };
