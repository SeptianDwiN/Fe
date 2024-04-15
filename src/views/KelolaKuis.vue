<template>
    <div class="max-w-md mx-auto mt-8">
      <form @submit.prevent="addNewKuis">
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="question">Pertanyaan:</label>
          <input v-model="pertanyaan" id="question" name="question" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="answer_a">Jawaban A:</label>
          <input v-model="jawaban_a" id="answer_a" name="answer_a" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="answer_b">Jawaban B:</label>
          <input v-model="jawaban_b" id="answer_b" name="answer_b" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="answer_c">Jawaban C:</label>
          <input v-model="jawaban_c" id="answer_c" name="answer_c" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="answer_d">Jawaban D:</label>
          <input v-model="jawaban_d" id="answer_d" name="answer_d" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 text-sm font-bold mb-2" for="correct_answer">Jawaban Benar (A/B/C/D):</label>
          <input v-model="jawaban_benar" id="correct_answer" name="correct_answer" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        </div>
        
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Submit</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
        kuisData: [
          {
            pertanyaan: "",
            jawaban_a: "",
            jawaban_b: "",
            jawaban_c: "",
            jawaban_d: "",
            jawaban_benar: ""
          }
        ]
      };
    },
    methods: {
      ...mapActions('kuis', ['addKuis']),
     async addNewKuis() {
        const kuisData = {
          pertanyaan: this.pertanyaan,
          jawaban_a: this.jawaban_a,
          jawaban_b: this.jawaban_b,
          jawaban_c: this.jawaban_c,
          jawaban_d: this.jawaban_d,
          jawaban_benar: this.jawaban_benar
        };
        try {
            const success = await this.$store.dispatch('kuis/addKuis', kuisData);

            if (success) {
                alert("berhasil");
                this.pertanyaan,
                this.jawaban_a,
                this.jawaban_b,
                this.jawaban_c,
                this.jawaban_d,
                this.jawaban_benar
            }
        }catch(error) {
            alert("Failed")
        }
      },
      deleteKuis(index) {
        this.kuisData.splice(index, 1);
      },
      saveChanges() {
        // Kirim data kuis ke Vuex untuk disimpan
        this.addKuis(this.kuisData).then(() => {
          // Setelah berhasil menambahkan kuis, reset form
          this.kuisData = [
            {
              pertanyaan : "",
              jawaban_a: "",
              jawaban_b: "",
              jawaban_c: "",
              jawaban_d: "",
              jawaban_benar: ""
            }
          ];
        });
      }
    }
  };
  </script>
  

  