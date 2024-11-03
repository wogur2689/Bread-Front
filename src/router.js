import { createWebHistory, createRouter } from "vue-router";

import MainLayout from "@/components/layout/MainLayout";

const routes = [
  {
    /// 화면에 표시되는 url
    path: "/",
    name: "Main",
    component: MainLayout,
    /// 컴포넌트 호출 시 아래와 같이 호출해야 각 페이지마다 호출이기 때문에 로딩 속도가 빠름
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/components/layout/LoginLayout")
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () => import("@/components/layout/signUpLayout")
  },
  {
    path: "/market",
    name: "market",
    component: MainLayout,
    childeren: [
      { path: "", redirect: "/market" },
      {
        path: "dashboard",
        component: () => import("@/components/layout/DashboardLayout"),
      },
    ],
  },
  {
    path: "/talk",
    name: "talk",
    component: MainLayout,
    childeren: [
      { path: "", redirect: "/talk" },
      {
        path: "dashboard",
        component: () => import("@/components/layout/DashboardLayout"),
      },
    ],
  },
  // {
  //   path: "/recruit",
  //   name: "MainRecruit",
  //   component: MainLayout,
  //   children: [
  //     { path: "", redirect: "/recruit/manage" },
  //     { path: "main", component: () => import("@/components/menu/RecruitGnb") },
  //     {
  //       path: "manage",
  //       component: () => import("@/components/recruit/ManageLnb"),
  //     },
  //   ],
  // },
  {
    /// 404 에러
    path: "/:pathMatch(.*)",
    component: () => import("@/components/layout/NotFoundComponent"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  /// 페이지 이동 시 스크롤 맨 위로
  scrollBehavior() {
    return { top: 0 };
  },
  routes,
});

export default router;
