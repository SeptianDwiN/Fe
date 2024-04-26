// kuis.js
import axios from "axios";

const kuis = {
    namespaced: true,
    state: {
        kuisData: [],
    },
    getters: {
        getKuis: (state) => state.kuisData,
    },
    actions: {
        async fetchKuis({ commit }) {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/kuis");
                commit("SET_KUIS", response.data.rows);
            } catch (error) {
                console.error(error);
                alert("Terjadi kesalahan saat mengambil data kuis.");
            }
        },

        async addKuis({ commit }, kuisData) {
            try {
              const response = await axios.post("http://localhost:3000/api/v1/kuis", kuisData);
              commit("ADD_KUIS", response.data.data);
              alert("Kuis berhasil ditambahkan.");
            } catch (error) {
              console.error(error);
              alert("Terjadi kesalahan saat menambahkan kuis.");
            }
          },
          
          async fetchKuisById({ commit }, kuisId) {
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/kuis/${kuisId}`);
                return response.data; // Mengembalikan data kuis yang diambil
            } catch (error) {
                console.error(error);
                throw error; // Mengembalikan error untuk ditangani oleh komponen
            }
        },
        async updateKuis({ commit }, kuisData) {
            try {
                await axios.put(`http://localhost:3000/api/v1/kuis/${kuisData.id}`, kuisData);
                commit("EDIT_KUIS", response.data);
                return true; // Mengembalikan nilai true untuk menandakan bahwa pengeditan berhasil
            } catch (error) {
                throw error; // Mengembalikan error untuk ditangani oleh komponen
            }
        },
        async deleteKuis({ commit }, kuisId) {
            try {
                await axios.delete(`http://localhost:3000/api/v1/kuis/${kuisId}`);
                commit("DELETE_KUIS", kuisId);
                return true; // Mengembalikan nilai true untuk menandakan bahwa penghapusan berhasil
            } catch (error) {
                throw error; // Mengembalikan error untuk ditangani oleh komponen
            }
        },
    },
    mutations: {
        SET_KUIS(state, kuis) {
            state.kuisData = kuis;
        },
        ADD_KUIS(state, kuis) {
            state.kuisData.push(kuis);
        },
        EDIT_KUIS(state, editedKuis) {
            const index = state.kuisData.findIndex(kuis => kuis.id === editedKuis.id);
            if (index !== -1) {
                state.kuisData.splice(index, 1, editedKuis);
            }
        },
        DELETE_KUIS(state, kuisId) {
            state.kuisData = state.kuisData.filter(kuis => kuis.id !== kuisId);
        },
    },
};

export default kuis;
