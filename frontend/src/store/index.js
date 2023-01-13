import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    events: [],
  },
  getters: {
    events: (state) => state.events,
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events;
      
    },
  },
  actions: {
    async fetchEvents({ commit }) {
      try {
        const { data } = await axios.get("http://localhost:3000/events");
        commit("SET_EVENTS", data.data);
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
