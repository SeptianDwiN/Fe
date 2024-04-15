<template>
  <div v-if="getKuis == false"> </div>

  <div v-else>
    <div class="mx-auto py-8 bg-gradient-to-b from-blue-200 to-blue-100 min-h-screen">
      <!-- Isi Pertanyaan -->
      <div class="mt-8 text-center">
        <h1 class="text-3xl font-bold mb-4">Kuis Solusi Stres</h1>
        <p class="text-lg text-gray-700 mb-8">Silakan pilih jawaban yang menurut Anda benar.</p>
      </div>
      <div >
        <!-- Pertanyaan 1 -->
        <div v-for="kuis in getKuis" class="mb-8">
          <p class="text-xl font-semibold mb-2">Pertanyaan : {{ kuis.pertanyaan }}</p>
          <div class="flex flex-col items-center">
            <div class="mb-4">
              <input type="radio" id="optionA" v-model="selectedAnswers['answer1']" value="A" class="mr-2">
              <label for="optionA" class="ml-2">A. {{ kuis.jawaban_a }}</label>
            </div>
            <div class="mb-4">
              <input type="radio" id="optionB" v-model="selectedAnswers['answer1']" value="B" class="mr-2">
              <label for="optionB" class="ml-2">B. {{ kuis.jawaban_b }}</label>
            </div>
            <div class="mb-4">
              <input type="radio" id="optionC" v-model="selectedAnswers['answer1']" value="C" class="mr-2">
              <label for="optionC" class="ml-2">C. {{ kuis.jawaban_c }}</label>
            </div>
            <div>
              <input type="radio" id="optionD" v-model="selectedAnswers['answer1']" value="D" class="mr-2">
              <label for="optionD" class="ml-2">D. {{ kuis.jawaban_d }}</label>
            </div>
          </div>
        </div>
  
     

        <!-- Tombol Submit -->
        <div class="mt-8">
          <button @click="submitQuiz" class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring transition duration-300">Submit</button>
        </div>
      </div>
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
    ...mapGetters('kuis', ['getKuis']),
  },
  methods: {
    ...mapActions('kuis', ['fetchKuis']),
    submitQuiz() {
      const score = this.evaluateAnswers();
      this.showResult(score);
    },
    evaluateAnswers() {
      let score = 0;
      // Evaluasi jawaban untuk setiap pertanyaan di sini
      // Contoh logika sederhana: Pertanyaan 1
      // Anda perlu mengganti logika ini dengan logika yang sesuai untuk kuis Anda
      if (this.selectedAnswers['answer1'] === 'A') {
        score++;
      }
      // Lakukan hal yang sama untuk pertanyaan lainnya
      return score;
    },
    showResult(score) {
      // Navigasi ke halaman solusi dengan menyertakan skor sebagai parameter
      // Pastikan untuk mengganti 'Solusi' dengan nama komponen atau rute yang sesuai
      this.$router.push({ name: 'Solusi', params: { score: score } });
    }
  },
  created() {
    this.fetchKuis().then(() => {
    console.log(this.getKuis); // Periksa apakah data kuis berhasil dimuat
  });
  },
}
</script>

  <style scoped>
  /* Gaya khusus jika diperlukan */
  </style>
  