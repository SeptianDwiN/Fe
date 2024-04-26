<template>
  <div v-if="getKuis == false"> </div>

  <div v-else>
    <div class="mx-auto py-8 bg-gradient-to-b from-blue-200 to-blue-100 min-h-screen">
      <div class="mt-8 text-center">
        <h1 class="text-3xl font-bold mb-4">Kuis Solusi Stres</h1>
        <p class="text-lg text-gray-700 mb-8">Silakan pilih jawaban yang menurut Anda benar.</p>
      </div>
      <div >
       
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
       
        <div class="mt-8 flex justify-center">
          <button @click="submitQuiz" class="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none focus:ring transition duration-300">Submit</button>
        </div>
      </div>
    </div>
    <!-- Back to Home button -->
    <button @click="goToHome" class="fixed top-4 left-4 p-2 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none focus:bg-gray-300 transition duration-300">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-gray-600 hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path>
      </svg>
    </button>
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
      this.$router.push('/solusi');
      const score = this.evaluateAnswers();
      this.showResult(score);
    },
    evaluateAnswers() {
      let score = 0;
      if (this.selectedAnswers['answer1'] === 'A') {
        score++;
      }
     
      return score;
    },
    showResult(score) {
      this.$router.push({ name: 'Solusi', params: { score: score } });
    },
    goToHome() {
      this.$router.push('/');
    }
  },
  created() {
    this.fetchKuis().then(() => {
      console.log(this.getKuis); 
    });
  },
}
</script>

<style scoped>
/* Gaya khusus jika diperlukan */
</style>
