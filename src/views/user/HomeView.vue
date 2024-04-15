<template>
  <div class="mx-auto py-8 bg-gradient-to-b from-blue-200 to-blue-100 min-h-screen">
    <!-- Ikon Profile di bagian kanan atas -->
    <div class="flex justify-end">
      <button @click="viewProfile" class="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12a8 8 0 11-16 0 8 8 0 0116 0zm-4 4c0 1.333-2.667 2-4 2s-4-.667-4-2"></path>
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

    <!-- Tombol untuk navigasi ke halaman kuis dan kembali ke tampilan home -->
    <div class="flex justify-center mt-8">
      <button @click="goToQuiz" class="p-2 mx-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-600 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
        </svg>
      </button>
      <button @click="goToHome" class="p-2 mx-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-600 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    viewProfile() {
      this.$router.push('/profile'); // Logika untuk melihat profil pengguna
    },
    goToQuiz() {
      this.$router.push('/kuis'); // Logika untuk pergi ke halaman kuis
    },
    goToHome() {
      this.$router.push('/home'); // Navigasi ke halaman home
    }
  }
}
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika diperlukan */
</style>
