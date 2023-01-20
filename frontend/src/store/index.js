import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    events: [],
    newEvent: [],
  },
  getters: {
    events: (state) => state.events,
    newEvents: (state) => state.newEvent,
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events;
    },
    ADD_EVENT(state, newEvent) {
      state.newEvent.push(newEvent);
    },
    CLEAR_SELECTED_EVENT(state) {
      state.selectedEvent = null;
    },
  },
  actions: {
    async fetchEvents({ commit }) {
      try {
        const { data } = await axios.get("http://localhost:3000/events");
        console.log(data);
        commit("SET_EVENTS", data.data);
        console.log(data.data);
      } catch (error) {
        console.log(error);
      }
    },
    addEvent({ commit }, event) {
      commit("ADD_EVENT", event);
      commit("CLEAR_SELECTED_EVENT");
    },
    clearSelectedEvent({ commit }) {
      commit("CLEAR_SELECTED_EVENT");
    },
  },
  modules: {},
});
