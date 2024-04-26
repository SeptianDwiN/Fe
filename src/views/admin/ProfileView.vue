<template>
  <div class="mt-28 ml-96 m-10 max-w-sm">
    <div class="rounded-lg border bg-white px-4 pt-8 pb-10 shadow-lg">
      <div class="relative mx-auto w-36 rounded-full">
        <img
          class="mx-auto h-auto w-full rounded-full"
          src="https://cdn.idntimes.com/content-images/post/20240207/33bac083ba44f180c1435fc41975bf36-ca73ec342155d955387493c4eb78c8bb.jpg"
          alt=""
        />
      </div>
      <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-3 text-gray-600 shadow-sm hover:text-gray-700 hover:shadow">
        <li class="flex items-center py-3 text-sm">
          <span>Username</span>
          <span class="ml-auto">{{ getUser.username }}</span> 
        </li>
        <li class="flex items-center py-3 text-sm">
          <span>Email</span>
          <span class="ml-auto">{{ getUser.email }}</span>
        </li>
        <li class="flex items-center py-3 text-sm">
          <span>Role</span>
          <span class="ml-auto">{{ getUser.role }}</span> 
        </li>
        <!-- <li class="flex items-center py-3 text-sm">
          <button @click="logoutUser()" class="flex items-center py-1 px-2 rounded bg-red-500 text-white hover:bg-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
            </svg>
            Logout
          </button>
        </li> -->
      </ul>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import router from "@/router"; 

export default {
  computed: {
    ...mapGetters("auth", ["getUser"]),
  },
  methods: {
    ...mapActions("auth", ["fetchMe", "logout"]),

    async logoutUser () {
      const deleteToken = await this.$store.dispatch("auth/logout");

      if (deleteToken) {
        this.$router.push("/"); 
      }

      return deleteToken;
    }
    
   
  },
  created() {
    this.fetchMe(); 
  },
};
</script>
