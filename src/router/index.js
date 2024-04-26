import { createRouter, createWebHistory } from 'vue-router';
import store from '../store'; // Import your Vuex store instance

// Import your views
import LoginView from '../views/user/LoginView.vue';
import RegisterView from '../views/user/RegisterView.vue';
import HomeView from '../views/user/HomeView.vue';
import KuisView from '../views/user/KuisView.vue';
import SolusiView from '../views/user/SolusiView.vue';
import ProfileView from '../views/admin/ProfileView.vue';
import AdminView from '../views/admin/AdminView.vue';
import LayoutAdmin from '../Layout/LayoutAdmin.vue';
import KelolaKuis from '../views/admin/KelolaKuis.vue';
import EditKuis from '../views/admin/EditKuis.vue';
import KelolaSolusi from '../views/admin/KelolaSolusi.vue';
import EditSolusi from '../views/admin/EditSolusi.vue';
import EditSol from '../views/admin/EditSol.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: LoginView,
      meta: {
        title: "Login",
      },
      beforeEnter: (to, from, next) => {
        const isAuthenticated = store.getters["auth/isAuthenticated"];
        if (isAuthenticated) {
          const role = localStorage.getItem("role");
          if (role === "admin") {
            next("/admin");
          } else if (role === "user") {
            next("/home");
          }
        } else {
          next();
        }
      },
    },
    {
      path : '/register',
      name : 'register',
      component : RegisterView
    },
    {
      path : '/home',
      name : 'Home',
      component : HomeView,
      meta: {
        requiresAuth: true,
        requiresUser: true,
      },
    },
    {
      path : '/layoutadmin',
      name : 'LayoutAdmin',
      component : LayoutAdmin,
      meta: {
        requiresAuth: true,
        requiresAdmin: true,
      },
      children: [
        {
          path: "/admin",
          name: "AdminVIew",
          component: AdminView,
          meta: {
            title: "Admin",
            requiresAuth: true,
          },
        },
        {
          path: "kelolakuis",
          name: "KelolaKuis",
          component: KelolaKuis,
        },
        {
          path : 'profile',
          name : 'Profile',
          component : ProfileView,
          // meta: {
          //   requiresAuth: true,
          //   requiresAdmin: false,
          // },
        },
        {
          path: "editkuis",
          name: "EditKuis",
          component: EditKuis,
        },
        {
          path: "kelolasolusi",
          name: "KelolaSolusi",
          component: KelolaSolusi,
        },
        {
          path: "editsolusi",
          name: "EditSolusi",
          component: EditSolusi,
        },
        {
          path: "/editsol/:solusiId",
          name: "EditSol",
          component: EditSol,
        },
      ],
    },

    // {
    //   path : 'kelolakuis',
    //   name : 'KelolaKuis',
    //   component : KelolaKuis,
    //   meta: {
    //     requiresAuth: true,
    //     requiresAdmin: true,
    //   },
    // },
    {
      path : '/kuis',
      name : 'KuisView',
      component : KuisView,
      meta: {
        requiresAuth: true,
        requiresAdmin: false,
      },
    },
    {
      path : '/solusi',
      name : 'SolusiView',
      component : SolusiView,
      meta: {
        requiresAuth: true,
        requiresAdmin: false,
      },
    },
    
    // {
    //   path : 'editkuis',
    //   name : 'EditKuis',
    //   component : EditKuis,
    //   meta: {
    //     requiresAuth: true,
    //     requiresAdmin: true,
    //   },
    // },
    // {
    //   path : 'kelolasolusi',
    //   name : 'KelolaSolusi',
    //   component : KelolaSolusi,
    //   meta: {
    //     requiresAuth: true,
    //     requiresAdmin: true,
    //   },
    // },
    // {
    //   path : 'editsolusi',
    //   name : 'EditSolusi',
    //   component : EditSolusi,
    //   meta: {
    //     requiresAuth: true,
    //     requiresAdmin: true,
    //   },
    // },
   
  ],
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters["auth/isAuthenticated"];
  const requiresAuth = to.meta.requiresAuth;

  if (requiresAuth && !isAuthenticated) {
    return next({ name: "Login" });
  } else if (!requiresAuth && isAuthenticated) {
    // Jika pengguna sudah terotentikasi dan mencoba mengakses halaman tanpa memerlukan otentikasi, arahkan mereka ke halaman beranda
    return next({ name: "Home" });
  }

  const userRole = localStorage.getItem("role");

  // Jika route memerlukan akses admin dan pengguna tidak memiliki peran admin, arahkan mereka ke halaman beranda
  if (to.meta.requiresAdmin && userRole !== "admin") {
    return next({ name: "Home" });
  }

  // Jika route memerlukan akses user dan pengguna tidak memiliki peran user, arahkan mereka ke halaman beranda
  if (to.meta.requiresUser && userRole !== "user") {
    return next({ name: "Home" });
  }

  next();
});

// Add navigation guard to initialize authentication status when the application loads
router.beforeEach(async (to, from, next) => {
  await store.dispatch('auth/initAuth');
  next();
});

export default router;
