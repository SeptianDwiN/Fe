<template>
  <div class="max-w-md mx-auto mt-20">
    <form @submit.prevent="updateSolusi">
      <div class="mb-4">
        <label for="solusi" class="block text-gray-700 text-sm font-bold mb-2">Solusi Stress</label>
        <input v-model="Solusi_Stress" type="text" id="solusi" name="solusi" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      </div>
      <div class="flex items-center justify-between">
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Simpan</button>
        <button @click="cancelEdit" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Batal</button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
data() {
  return {
    Solusi_Stress: "",
  };
},
computed: {
  ...mapState('solusi', ['solusiData']),
  get() {
    return this.solusiData();
  },
  set(value) {
    this.$store.commit('solusi/setEditedSolusi', value);
  }
},
methods: {
  ...mapActions('solusi', ['updateSolusi']),
  async updateSolusi() {
    const solusiId = this.$route.params.solusiId;
    const editedData = {
      Solusi_Stress: this.Solusi_Stress,
    };
    try {
      const success = await this.$store.dispatch("solusi/updateSolusi", { solusiId, updateData: editedData });
      if (success) {
        alert("Berhasil memperbarui solusi");
        this.Solusi_Stress = ""; // Reset field setelah berhasil mengedit
      }
    } catch (error) {
      alert("Gagal memperbarui solusi");
    }
  },
  cancelEdit() {
    this.$router.go(-1); // Kembali ke halaman sebelumnya
  }
},
mounted() {
  this.$store.dispatch("solusi/updateSolusi")
}
};
</script>
