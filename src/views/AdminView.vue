<template>
    <div class="mx-auto py-8 bg-gradient-to-b from-blue-200 to-blue-100 min-h-screen">
      <!-- Ikon Profile dan Opsi Menu -->
      <div class="flex justify-between items-center px-4">
        <!-- Opsi Menu -->
        <div class="relative">
          <button @click="toggleSidebar" class="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-600 hover:text-gray-900" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M2 12a2 2 0 100-4 2 2 0 000 4zM18 10a2 2 0 11-4 0 2 2 0 014 0zm-7-2a2 2 0 11-4 0 2 2 0 014 0zm0 8a2 2 0 11-4 0 2 2 0 014 0z" clip-rule="evenodd" />
            </svg>
          </button>
          <!-- Sidebar -->
          <div v-if="sidebarOpen" class="absolute top-0 left-0 w-48 bg-gray-200 border-r border-gray-300 shadow-md z-10">
            <ul>
              <li @click="goToManageQuiz" class="p-4 cursor-pointer hover:bg-gray-300">Kelola Kuis</li>
              <li @click="goToManageSolutions" class="p-4 cursor-pointer hover:bg-gray-300">Kelola Solusi</li>
            </ul>
          </div>
        </div>
        <!-- Ikon Profile -->
        <button @click="viewProfile" class="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-600 hover:text-gray-900" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10 12a4 4 0 100-8 4 4 0 000 8z" />
            <path fill-rule="evenodd" d="M18 18a1 1 0 01-1 1H3a1 1 0 01-1-1v-1a7 7 0 1114 0v1zm-2 0H4v-1a5 5 0 0110 0v1z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
  
      <!-- Konten Halaman Home dengan Gambar 1 -->
      <div class="mt-8 text-center">
        <h1 class="text-3xl font-bold mb-4">Selamat Datang di Aplikasi Penyembuh Stres</h1>
        <p class="text-lg text-gray-700 mb-8">Temukan cara untuk mengatasi stres dan meningkatkan kesejahteraan mental Anda.</p>
  
        <div class="grid grid-cols-1 gap-4 mb-8">
          <div class="col-span-3 md:col-span-1 flex items-center justify-center">
            <div class="aspect-w-16 aspect-h-9">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/xkuhZY2dOAk?si=rLaRDqiNT3_JivcA" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Fitur-Fitur Utama -->
      <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-4 bg-white rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-2">Latihan Meditasi</h2>
          <p class="text-gray-700">Praktik meditasi untuk menenangkan pikiran dan tubuh Anda.</p>
        </div>
        <div class="p-4 bg-white rounded-lg shadow-md">
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
      viewProfile() {
        this.$router.push('/profile');
      },
      goToManageQuiz() {
        this.$router.push('/kelolakuis');
      },
      goToManageSolutions() {
        this.$router.push('/kelolasolusi');
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
  