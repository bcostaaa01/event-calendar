import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    events: [],
    newEvent: {
      date: "",
      homeTeam: "",
      awayTeam: "",
      time: "",
    },
  },
  getters: {
    events: (state) => state.events,
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events;
    },
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
    CLEAR_SELECTED_EVENT(state) {
      state.selectedEvent = null;
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
    addEvent({ commit }, event) {
      commit("ADD_EVENT", event);
    },
    clearSelectedEvent({ commit }) {
      commit("CLEAR_SELECTED_EVENT");
    },
  },
  modules: {},
});
