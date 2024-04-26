import axios from "axios";

const solusi = {
  namespaced: true,
  state: {
    solusiData: [],
  },
  getters: {
    getSolusi: (state) => state.solusiData,
  },
  actions: {
    async fetchSolusi({ commit }) {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/solusi");
            commit("SET_SOLUSI", response.data.rows);
        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan saat mengambil data Solusi.");
        }
    },

    async addSolusi({ commit }, solusiData) {
        try {
          const response = await axios.post("http://localhost:3000/api/v1/solusi", solusiData);
          commit("ADD_SOLUSI", response.data.data);
          alert("solusi berhasil ditambahkan.");
        } catch (error) {
          console.error(error);
          alert("Terjadi kesalahan saat menambahkan solusi.");
        }
    },

    async fetchSolusiById({ commit }, solusiId) {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/solusi/${solusiId}`);
            return response.data; // Mengembalikan data solusi yang diambil
        } catch (error) {
            console.error(error);
            throw error; // Mengembalikan error untuk ditangani oleh komponen
        }
    },

    async updateSolusi({ commit }, { solusiId, updateData }) {
        try {
            const response = await axios.put(`http://localhost:3000/api/v1/solusi/${solusiId}`, updateData);
            const editedSolusi = response.data; // Mengambil data yang diperbarui dari respons
            commit("EDIT_SOLUSI", editedSolusi);
            return true; // Mengembalikan nilai true untuk menandakan bahwa pengeditan berhasil
        } catch (error) {
            throw error; // Mengembalikan error untuk ditangani oleh komponen
        }
    },

    async deleteSolusi({ commit }, solusiId) {
        try {
            await axios.delete(`http://localhost:3000/api/v1/solusi/${solusiId}`);
            commit("DELETE_SOLUSI", solusiId);
            return true; // Mengembalikan nilai true untuk menandakan bahwa penghapusan berhasil
        } catch (error) {
            throw error; // Mengembalikan error untuk ditangani oleh komponen
        }
    },
  
  },
  mutations: {
    SET_SOLUSI(state, solusi) {
        state.solusiData = solusi;
    },
    ADD_SOLUSI(state, solusi) {
      state.solusiData.push(solusi);
    },
    EDIT_SOLUSI(state, editedSolusi) {
      if (editedSolusi && editedSolusi.id) {
        const index = state.solusiData.findIndex(solusi => solusi.id === editedSolusi.id);
        if (index !== -1) {
            state.solusiData.splice(index, 1, editedSolusi);
        }
      }
    },
    DELETE_SOLUSI(state, solusiId) {
      state.solusiData = state.solusiData.filter(solusi => solusi.id !== solusiId);
    },
  },
};

export default solusi;
