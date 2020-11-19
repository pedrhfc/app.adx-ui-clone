import Home from "@/views/Home";
import Work from "@/views/Work";
import Schedule from "@/views/Schedule";
import Grades from "@/views/Grades";
import Calendar from "@/views/Calendar";
import Access from "@/views/Access";
import FormAccess from "@/views/Access/form";
import NotFound from "@/views/Pages/notFound";

import AppLayout from "@/layouts/App";
import AuthLayout from "@/layouts/Auth";

const routes = [
  {
    path: "/",
    redirect: "/login",
    component: AuthLayout,
    children: [
      {
        path: "/login",
        name: "Login",
        component: () =>
          import(/* webpackChunkName: "login" */ "@/views/Login"),
      },
      {
        path: "/pedir-acesso",
        name: "NoAccess",
        component: () =>
          import(/* webpackChunkName: "no-access" */ "@/views/Pages/noAccess"),
      },
    ],
  },
  {
    path: "/logado",
    component: AppLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
      },
      {
        path: "gerir-acessos",
        name: "Access",
        component: Access,
      },
      {
        path: "gerir-acessos/:id/editar",
        name: "FormAccess",
        component: FormAccess,
      },
      {
        path: "home/:unidade/:matricula",
        component: Home,
      },
      {
        path: "proximos-trabalhos",
        component: Work,
      },
      {
        path: "grade-horaria",
        component: Schedule,
      },
      {
        path: "notas",
        component: Grades,
      },
      {
        path: "calendario",
        component: Calendar,
      },
      {
        path: "financeiro",
        component: Home,
      },
    ],
  },
  {
    path: "*",
    component: NotFound,
  },
];

export default routes;
