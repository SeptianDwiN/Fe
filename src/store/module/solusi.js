import axios from "axios";
import Vuex from 'vuex';

const solusi = {
    namespaced: true,
    state : { 
        solusiData: [],
    },
    getters: {
        getSolusi: (state) => state.solusiData,
        
    },
    actions: {
        async fetchSolusi ({ commit }) {
            try {
                const data = await axios.get(
                    "http://localhost:3000/api/v1/solusi"
                );
                commit("SET_SOLUSI", data.data.rows);
            } catch (error) {
                alert(error);
                console.log(error);
            }
        },
    },
    mutations: {
        SET_SOLUSI(state, solusi) {
            state.solusiData = solusi;
        },
    },
};

export default solusi;