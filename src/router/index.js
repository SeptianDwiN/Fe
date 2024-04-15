import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/user/LoginView.vue';
import RegisterView from '../views/user/RegisterView.vue';
import HomeView from '../views/user/HomeView.vue';
import KuisView from '../views/user/KuisView.vue';
import SolusiView from '../views/user/SolusiView.vue';
import ProfileView from '../views/ProfileView.vue';
import AdminView from '../views/AdminView.vue';
import KelolaKuis from '../views/KelolaKuis.vue';
import EditKuis from '../views/EditKuis.vue';



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Login",
      component: LoginView,
      meta: {
        title: "Auth login",
      },
      // beforeEnter: (to, from, next) => {
      //   const isAuthenticated = store.getters["auth/isAuthenticated"];
      //   if (isAuthenticated) {
      //     // Jika pengguna sudah login, arahkan ke halaman yang sesuai dengan rolenya
      //     const role = localStorage.getItem("role");
      //     if (role === "user") {
      //       next("/");
      //     } else {
      //       next("/");
      //     }
      //   } else {
      //     // Menampilkan halaman loading selama 1 detik sebelum masuk ke komponen
      //     setTimeout(() => {
      //       next();
      //     }, 1000);
      //   }
      // },
   
    },
    {
      path : '/register',
      name : 'register',
      component : RegisterView
    },
    {
      path : '/home',
      name : 'Home',
      component : HomeView
    },
    {
      path : '/kuis',
      name : 'Kuis',
      component : KuisView
    },
    {
      path : '/solusi',
      name : 'Solusi',
      component : SolusiView,
      props: true
    },
    {
      path : '/profile',
      name : 'Profile',
      component : ProfileView,
    },

    {
      path : '/admin',
      name : 'AdminView',
      component : AdminView,
    },
    {
      path : '/kelolakuis',
      name : 'KelolaKuis',
      component : KelolaKuis,
    },
    {
      path : '/editkuis',
      name : 'EditKuis',
      component : EditKuis,
    },
   
  ]
})

export default router