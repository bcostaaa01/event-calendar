import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    events: [],
    newEvent: {
      homeTeam: "",
      awayTeam: "",
      dateVenue: "",
      timeVenueUTC: "",
    },
  },
  getters: {
    events: (state) => state.events,
    newEvent: (state) => state.newEvent,
  },
  mutations: {
    SET_EVENTS(state, events) {
      state.events = events;
    },
    ADD_EVENT(state, newEvent) {
      state.newEvent = newEvent;
    },
    CLEAR_SELECTED_EVENT(state) {
      state.selectedEvent = null;
    },
    UPDATE_EVENT(state, event) {
      state.newEvent.homeTeam = event.homeTeam;
      state.newEvent.awayTeam = event.awayTeam;
      state.newEvent.dateVenue = event.dateVenue;
      state.newEvent.timeVenueUTC = event.timeVenueUTC;
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
      commit("UPDATE_EVENT", event);
      commit("CLEAR_SELECTED_EVENT");
    },
    clearSelectedEvent({ commit }) {
      commit("CLEAR_SELECTED_EVENT");
    },
  },
  modules: {},
});
