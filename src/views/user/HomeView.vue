<template>
  <div class="mx-auto py-8 bg-gradient-to-b from-blue-200 to-blue-100 min-h-screen">
    <div class="flex justify-end items-center mb-5 mr-6">
      <button @click="ProfileAdmin" class="p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-300">
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
      </button>
    </div>

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

    <div class="flex justify-center mt-8">
      <button @click="goToQuiz" class="p-2 mx-4 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-300">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
         <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
        </svg>


      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    ProfileAdmin() {
      this.$router.push('/profile');
    },
    goToQuiz() {
      this.$router.push('/kuis'); 
    }
  }
}
</script>

<style scoped>
/* Tambahkan gaya khusus di sini jika diperlukan */
</style>
