<template>
  <div class="max-w-md mx-auto mt-20">
    <table class="table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2">ID Solusi</th>
          <th class="px-4 py-2">Solusi Stress</th>
          <th class="px-4 py-2">Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="solusi in solusiData" :key="solusi.id">
          <td class="border px-4 py-2">{{ solusi.id }}</td>
          <td class="border px-4 py-2">{{ solusi.Solusi_Stress }}</td>
          <td class="border px-4 py-2">
            <button @click="editSolusi(solusi.id)" class="text-blue-500 hover:text-blue-700 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>


            </button>
            <button @click="deleteSolusi(solusi.id)" class="text-red-500 hover:text-red-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
              </svg>


            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState('solusi', ['solusiData']),
    ...mapGetters('solusi', ['getSolusi']),

    solusi() {
      return this.getSolusi()
    }
  },
  methods: {
    ...mapActions('solusi', ['fetchSolusiById', 'fetchSolusi', 'deleteSolusi']),
    editSolusi(id) {
      // Implement edit logic here 
      this.$router.push({ path: `/editsol/${id}` });
      console.log('Edit solusi with ID:', id);
    },
    async deleteSolusi(id) {
      try {
        const confirmDelete = confirm("Apakah Anda yakin ingin menghapus solusi ini?");
        if (confirmDelete) {
          await this.$store.dispatch('solusi/deleteSolusi', id);
          alert("Berhasil menghapus solusi");
        }
      } catch (error) {
        alert("Gagal menghapus solusi");
      }
    }
  },
  mounted() {
    this.fetchSolusi()
  }
};
</script>
