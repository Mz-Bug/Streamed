const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Signin.vue") },
      { path: "/signin", component: () => import("pages/Signin.vue") },
      {
        path: "/verification",
        component: () => import("pages/Verification.vue"),
      },
    ],
  },

  {
    path: "/",
    component: () => import("layouts/HomeLayout.vue"),
    children: [
      { path: "/home", component: () => import("pages/HomePage.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
