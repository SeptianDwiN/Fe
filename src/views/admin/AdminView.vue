<template>
  <div class="mx-auto py-8 ml-72 mt-10 mr-1 bg-gradient-to-b from-blue-200 to-blue-100 min-h-screen">
    <!-- Ikon Profile dan Opsi Menu -->
    <div class="flex justify-between items-center px-4">
      <!-- Opsi Menu -->
      <div class="relative">  
</div>

      <!-- <button @click="ProfileAdmin" class="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-300">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      </button> -->
    </div>

    <div class="mt-20 text-center">
      <h1 class="text-3xl font-bold mb-4">Selamat Datang di Tampilan Admin</h1>
      <p class="text-lg text-gray-700 mb-8">Temukan cara untuk mengatasi stres dan meningkatkan kesejahteraan mental Anda.</p>

      <!-- <div class="grid grid-cols-1 gap-4 mb-8">
        <div class="col-span-3 md:col-span-1 flex items-center justify-center">
          <div class="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
            <iframe class="w-full h-full" src="https://www.youtube.com/embed/xkuhZY2dOAk?si=rLaRDqiNT3_JivcA" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div> -->
    </div>
  
    <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="p-4 bg-white rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-2">Latihan Meditasi</h2>
        <p class="text-gray-700">Praktik meditasi untuk menenangkan pikiran dan tubuh Anda.</p>
      </div>
      <div class="p-4 bg-white                                                                                                                 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-2">Musik Relaksasi</h2>
        <p class="text-gray-700">Dengarkan musik relaksasi untuk mengurangi ketegangan dan stres.</p>
      </div>
      <div class="p-4 bg-white rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-2">Tips Mengelola Stres</h2>
        <p class="text-gray-700">Dapatkan tips dan trik untuk mengatasi stres sehari-hari.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sidebarOpen: false
    };
  },
  methods: {
    ProfileAdmin() {
      this.$router.push('/profile');
    },
    goToManageQuiz() {
      this.$router.push('/kelolakuis');
    },
    EditKuis() {
      this.$router.push('/editkuis');
    },
    kelolasolusi() {
      this.$router.push('/kelolasolusi');
    },
    editsolusi() {
      this.$router.push('/editsolusi');
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    }
  }
};
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika diperlukan */
</style>
