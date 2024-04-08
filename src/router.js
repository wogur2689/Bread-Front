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
    /// 화면에 표시되는 url
    path: "/login",
    name: "login",
    /// 컴포넌트 호출 시 아래와 같이 호출해야 각 페이지마다 호출이기 때문에 로딩 속도가 빠름
    component: () => import("@/components/layout/LoginLayout")
  },
  {
    /// 화면에 표시되는 url
    path: "/signUp",
    name: "signUp",
    /// 컴포넌트 호출 시 아래와 같이 호출해야 각 페이지마다 호출이기 때문에 로딩 속도가 빠름
    component: () => import("@/components/layout/signUpLayout")
  },
  {
    path: "/Product",
    name: "Product",
    component: MainLayout,
    childeren: [
      { path: "", redirect: "/product" },
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
