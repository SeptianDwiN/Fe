import axios from "axios";

const auth = {
  namespaced: true,
  state: {
    isAuthenticated: false,
    token: localStorage.getItem("token") || "",
    role: localStorage.getItem("role") || "",
    user: [],
    loading: false,
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    isRole: (state) => !!state.role && state.role !== "",
    getUser: (state) => state.user,
    isLoading: (state) => state.loading,
  },
  actions: {
    async login({ commit }, credentials) {
      try {
        commit("setLoading", true);
        const response = await axios.post("http://localhost:3000/api/v1/auth/login", credentials);

        const { role, token } = response.data;

        if (token && role) {
          localStorage.setItem("token", token);
          localStorage.setItem("role", role);
          commit("setToken", token);
          commit("setRole", role);
          commit("setAuthenticated", true); // Set isAuthenticated to true
          return { token, role }; // Return both token and role
        } else {
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
        const token = localStorage.getItem("token");
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
      localStorage.removeItem("role"); // Remove role when logging out
      commit("setToken", "");
      commit("setRole", ""); // Clear role state
      commit("setUser", null);
      commit("setAuthenticated", false); // Set isAuthenticated to false
      return true;
    },

    async register({ commit }, credentials) {
      try {
        commit("setLoading", true);
        const response = await axios.post("http://localhost:3000/api/v1/auth/register", credentials);
        commit("setAuthenticated", true);
        return true;
      } catch (error) {
        console.error("Error during registration:", error);
        return false;
      } finally {
        commit("setLoading", false);
      }
    },

    // Add action to initialize authentication status when the application loads
    async initAuth({ commit }) {
      const token = localStorage.getItem("token");
      const role = localStorage.getItem("role");

      if (token && role) {
        commit("setToken", token);
        commit("setRole", role);
        commit("setAuthenticated", true);
      }
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setRole(state, role) {
      state.role = role;
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
