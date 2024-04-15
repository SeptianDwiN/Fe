import { createStore } from "vuex";
import auth from './module/auth.js';
import kuis from './module/kuis.js';
import solusi from './module/solusi.js';


const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    auth,
    kuis,
    solusi
   
  },
});

export default store;