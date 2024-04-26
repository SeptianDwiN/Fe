<template>
  <div class="flex flex-wrap justify-center py-12 bg-gradient-to-r from-blue-400 to-purple-500">
    <div class="hidden md:flex md:w-5/12 lg:w-6/12 mx-4 my-8 md:my-0 md:mx-0">
      <div class="relative w-full h-screen">
        <img class="absolute top-0 h-full w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1565301660306-29e08751cc53?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" />
      </div>
    </div>

    <div class="flex flex-col w-full md:w-5/12 lg:w-4/12 bg-white rounded-lg shadow-lg mx-4 my-8 md:my-0 md:mx-0">
      <div class="lg:w-72 mx-auto my-auto pt-8 md:pt-0 md:px-6">
        <p class="text-3xl font-bold text-center md:text-left text-gray-900">Register.</p>
        <form @submit.prevent="registerUser" class="flex flex-col pt-3 md:pt-8">
          <div class="flex flex-col pt-4">
            <div class="focus-within:border-b-2 focus-within:border-blue-500 relative flex overflow-hidden border-b-2 transition">
              <input type="text" id="username" v-model="form.username" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Username" />
            </div>
          </div>
          <div class="flex flex-col pt-4">
            <div class="focus-within:border-b-2 focus-within:border-blue-500 relative flex overflow-hidden border-b-2 transition">
              <input type="email" id="register-emai l" v-model="form.email" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Email" />
            </div>
          </div>
          <div class="mb-12 flex flex-col pt-4">
            <div class="focus-within:border-b-2 focus-within:border-blue-500 relative flex overflow-hidden border-b-2 transition">
              <input type="password" id="register-password" v-model="form.password" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Password" />
            </div>
          </div>
          <div class="mb-12 flex flex-col pt-4">
            <div class="focus-within:border-b-2 focus-within:border-blue-500 relative flex overflow-hidden border-b-2 transition">
              <input type="text" id="register-role" v-model="form.role" class="w-full flex-1 appearance-none border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Role" />
            </div>
          </div>
          <button type="submit" class="w-full rounded-lg bg-blue-500 hover:bg-blue-600 px-4 py-2 text-center text-base font-semibold text-white shadow-md ring-gray-500 ring-offset-2 transition focus:ring-2">Register</button>
        </form>
        <div class="py-8 text-center">
          <p class="text-gray-600">
            Do you have an account?
            <a href="/" class="underline-offset-4 font-semibold text-gray-900 underline">Log in.</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data() {
    return {
      form: {
        username: "",
        email: "",
        password: "",
        role: "",
      }
    };
  },
  computed: {
    ...mapGetters('auth', ['isAuthenticated']),
  },
  methods: {
    ...mapActions('auth', ['register']),
    async registerUser() {
      const credentials = {
        username: this.form.username,
        email: this.form.email,
        password: this.form.password,
        role: this.form.role,
      };

      const success = await this.register(credentials);

      if (success && this.isAuthenticated) {
        this.$router.push("/");
        alert("Registrasi Berhasil");
      } else {
        alert("Gagal registrasi")
      }
    }
  }
};
</script>