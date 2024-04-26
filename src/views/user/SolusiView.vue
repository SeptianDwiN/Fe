<template>
  <div class="mx-auto py-8 bg-gradient-to-b from-blue-200 to-blue-100 min-h-screen">
    <div class="mt-8 text-center">
      <h1 class="text-3xl font-bold mb-4">Solusi untuk Mengatasi Stres</h1>
      <p class="text-lg text-gray-700 mb-8">Berikut adalah beberapa solusi untuk membantu Anda mengatasi stres.</p>

      <!-- Tampilkan solusi berdasarkan skor kuis -->
      <div  class="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 class="text-xl font-semibold mb-2">Solusi stress.</h2>
        <p class="text-gray-700">Solusi:</p>
        <ul v-for="solusi in getSolusi" class="list-disc ml-6">
          <li>{{ solusi.Solusi_Stress }}</li>
      
        </ul>
      </div>

      <div class="bg-white p-4 rounded-lg shadow-md mb-4">
        <h2 class="text-xl font-semibold mb-2">Anda memiliki tingkat stres yang masih dapat diatasi.</h2>
        <p class="text-gray-700">Solusi:</p>
        <ul class="list-disc ml-6">
          <li>Lakukan aktivitas yang menyenangkan seperti mendengarkan musik atau menonton film.</li>
          <li>Cari teman atau keluarga untuk berbicara dan mencurahkan perasaan Anda.</li>
          <li>Lakukan pernapasan dalam atau teknik relaksasi lainnya.</li>
        </ul>
      </div>

      <router-link to="/home" class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring transition duration-300">Kembali ke Halaman Utama</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'; 

export default {
  data() {
    return {
      selectedAnswers: {} // Menyimpan jawaban yang dipilih oleh pengguna
    };
  },
  computed: {
    ...mapGetters('solusi', ['getSolusi']),
  },
  methods: {
    ...mapActions('solusi', ['fetchSolusi']),
  },
  created() {
    this.fetchSolusi().then(() => {
    console.log(this.getSolusi); 
  });
  },
}
</script>

<style scoped>
/* Gaya khusus jika diperlukan */
</style>
