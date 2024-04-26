<template>
    <div class="container mx-auto max-w-2xl py-12 mt-20 ml-72 mr-72">
      <h2 class="text-2xl font-semibold mb-6">Tambah Solusi Baru</h2>
      <form @submit.prevent="addNewSolusi" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div class="mb-4">
          <label for="solusi" class="block text-gray-700 text-sm font-bold mb-2">Solusi Stress:</label>
          <textarea id="solusi" v-model="Solusi_Stress" class="shadow appearance-none border rounded w-full py-2 px-0 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" required></textarea>
        </div>
        <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Tambah Solusi</button>
      </form>
    </div>
  </template>
  
  <script>
  import { mapActions } from 'vuex';
  
  export default {
    data() {
      return {
    
            Solusi_Stress : "",

      };
    },
    methods: {
      ...mapActions('solusi', ['addSolusi']),
     async addNewSolusi() {
        const solusiData = {
          Solusi_Stress : this.Solusi_Stress,
        };
        try {
            const success = await this.$store.dispatch('solusi/addSolusi', solusiData);

            if (success) {
                alert("berhasil");
                this.Solusi_Stress
                 this.$router.push('/editsolusi');
            }
        }catch(error) {
            alert("Failed")
        }
      },
      deleteSolusi(index) {
        this.solusiData.splice(index, 1);
      },
      saveChanges() {
        this.addSolusi(this.solusiData).then(() => {
          this.solusiData = [
            {
              Solusi_Stress : "",
            }
          ];
        });
      }
    }
  };
  </script>