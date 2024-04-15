import axios from "axios";

const auth = {
  namespaced: true,
  state: {
    isAuthenticated: false,
    token: localStorage.getItem("token") || "",
    user: null,
    loading: false,
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    getUser: (state) => state.user,
    isLoading: (state) => state.loading,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        commit("setLoading", true);
        const response = await axios.post("http://localhost:3000/api/v1/auth/login", credentials);

        const { user, token } = response.data;

        if (token) {
          localStorage.setItem("token", token);
          commit("setToken", token);
          return { token }; // Kembalikan token dan role
        } else {
          // Jika respons tidak valid, lempar error
          throw new Error("Invalid response from server");
        }
      } catch (error) {
        console.error("Error during login:", error);
        return false;
      } finally {
        commit("setLoading", false);
      }
    },

    async fetchMe({ commit }) {
      try {

        // Ambil Bearer Token dari Local Storage
        const token = localStorage.getItem("token"); // Gantilah 'your_token_key' dengan kunci token Anda

        const response = await axios.get("http://localhost:3000/api/v1/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const user = response.data;
        commit("setUser", user);

        return user;
      } catch (error) {
        console.error("Error fetching user data:", error.message);

      

        return false;
      }
    },

    async logout({ commit }) {
      localStorage.removeItem("token");
      commit("setToken", "");
      commit("setUser", null);
      return true;
    },
    async register({ commit }, credentials) {
      try {
        commit("setLoading", true);
        const response = await axios.post("http://localhost:3000/api/v1/auth/register", credentials);

        // Jika registrasi berhasil, Anda mungkin ingin melakukan sesuatu di sini
        commit("setAuthenticated", true);
        return true;

      } catch (error) {
        console.error("Error during registration:", error);
        return false;
      } finally {
        commit("setLoading", false);
      }
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setUser(state, user) {
      state.user = user;
    },
    setLoading(state, status) {
      state.loading = status;
    },
    setAuthenticated(state, isAuthenticated) {
      state.isAuthenticated = isAuthenticated;
    },
  },
};

export default auth;
