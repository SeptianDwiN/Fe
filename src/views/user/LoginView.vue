<template>
  <div class="flex flex-wrap justify-center py-12 bg-gradient-to-r from-blue-400 to-purple-500">
    <div class="flex flex-col w-full md:w-5/12 lg:w-4/12 bg-white rounded-lg shadow-lg">
      <div class="lg:w-72 mx-auto my-auto pt-8 md:pt-0 md:px-6">
        <p class="text-3xl font-bold text-center md:text-left text-gray-900">Welcome.</p>
        <form @submit.prevent="loginUsers" class="flex flex-col pt-3 md:pt-8">
          <div class="flex flex-col pt-4">
            <div class="focus-within:border-b-2 focus-within:border-blue-500 relative flex overflow-hidden border-b-2 transition">
              <input type="text" v-model="form.username" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Username" />
            </div>
          </div>
          <div class="mb-12 flex flex-col pt-4">
            <div class="focus-within:border-b-2 focus-within:border-blue-500 relative flex overflow-hidden border-b-2 transition">
              <input type="password" v-model="form.password" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
            </div>
          </div>
          <button type="submit" class="w-full rounded-lg bg-blue-500 hover:bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Login</button>
        </form>
        <div class="py-8 text-center">
          <p class="text-gray-600">
            Don't have an account?
            <router-link to="/register" class="underline-offset-4 font-semibold text-gray-900 underline">Sign up for free.</router-link>
          </p>
        </div>
      </div>
    </div>
    
    <div class="hidden md:flex md:w-5/12 lg:w-6/12">
      <div class="relative w-full h-screen">
        <img class="absolute top-0 h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      }
    };
  },
  methods: {
    ...mapActions('auth', ['login']),
    async loginUsers() {
      try {
        const response = await this.login(this.form);
        
        if (response && response.token && response.role) {
          const { token, role } = response;
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);

          if (role === "user") {
            this.$router.push("/home");
          } else if (role === "admin") {
            this.$router.push("/admin");
          } else {
            throw new Error("Invalid role received from server");
          }
        } else {
          throw new Error("Invalid response from server");
        }
      } catch (error) {
        let errorMessage = "An error occurred during login";
        if (error.response && error.response.status === 401) {
          errorMessage = error.response.data.msg;
        }
        console.error(errorMessage);
      }
    }
  }
};
</script>
