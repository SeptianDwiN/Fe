<template>
  <div class="max-w-md mx-auto mt-8">
    <form @submit.prevent="fetchData">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="kuis_id">ID Kuis:</label>
        <input v-model="kuis_id" id="kuis_id" name="kuis_id" type="text" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Cari</button>
    </form>
    <div v-if="showForm">
      <!-- Form untuk mengedit kuis -->
      <form @submit.prevent="updateKuis">
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
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Update</button>
        <button type="button" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2" @click="deleteKuis">Hapus</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      kuis_id: "",
      showForm: false,
      pertanyaan: "",
      jawaban_a: "",
      jawaban_b: "",
      jawaban_c: "",
      jawaban_d: "",
      jawaban_benar: ""
    };
  },
  methods: {
    ...mapActions('kuis', ['fetchKuisById', 'updateKuis', 'deleteKuis']),
    async fetchData() {
      if (!this.kuis_id) {
        alert("Harap masukkan ID kuis");
        return;
      }

      try {
        const kuisData = await this.$store.dispatch('kuis/fetchKuisById', this.kuis_id);
        this.pertanyaan = kuisData.pertanyaan;
        this.jawaban_a = kuisData.jawaban_a;
        this.jawaban_b = kuisData.jawaban_b;
        this.jawaban_c = kuisData.jawaban_c;
        this.jawaban_d = kuisData.jawaban_d;
        this.jawaban_benar = kuisData.jawaban_benar;
        this.showForm = true;
      } catch(error) {
        alert("Gagal mengambil data kuis");
      }
    },
    async updateKuis() {
      const kuisData = {
        id: this.kuis_id,
        pertanyaan: this.pertanyaan,
        jawaban_a: this.jawaban_a,
        jawaban_b: this.jawaban_b,
        jawaban_c: this.jawaban_c,
        jawaban_d: this.jawaban_d,
        jawaban_benar: this.jawaban_benar
      };
      try {
        const success = await this.$store.dispatch('kuis/updateKuis', kuisData);
        if (success) {
          alert("Berhasil memperbarui kuis");
          // Redirect atau lakukan tindakan lain setelah berhasil memperbarui
        }
      } catch(error) {
        alert("Gagal memperbarui kuis");
      }
    },
    async deleteKuis() {
      if (!this.kuis_id) {
        alert("Harap masukkan ID kuis");
        return;
      }
      
      try {
        const confirmDelete = confirm("Apakah Anda yakin ingin menghapus kuis ini?");
        if (confirmDelete) {
          await this.$store.dispatch('kuis/deleteKuis', this.kuis_id);
          alert("Berhasil menghapus kuis");
          // Redirect atau lakukan tindakan lain setelah berhasil menghapus
        }
      } catch(error) {
        alert("Gagal menghapus kuis");
      }
    }
  }
};
</script>
