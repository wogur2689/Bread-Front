import { createWebHistory, createRouter } from "vue-router";

import MainLayout from "@/components/layout/MainLayout";

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainLayout,
  },
  {
    path: "/home",
    name: "home",
    component: () => import("@/components/layout/MainLayout")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/components/layout/LoginLayout")
  },
  {
    path: "/signUp",
    name: "signUp",
    component: () => import("@/components/layout/SignUpLayout")
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
  {
    path: "/myPage",
    name: "MyPage",
    component: MainLayout,  
    children: [
      { path: "", redirect: "/mypage/profile" }, // 기본 리다이렉트 설정
      { path: "profile", component: () => import("@/components/user/MyPage") }
    ]
  },
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