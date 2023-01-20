<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="date">Date:</label>
      <input type="date" v-model="newEvent.dateVenue" id="dateVenue" required />
      <label for="homeTeam">Home Team:</label>
      <input type="text" v-model="newEvent.homeTeam" id="homeTeam" required />
      <label for="awayTeam">Away Team:</label>
      <input type="text" v-model="newEvent.awayTeam" id="awayTeam" required />
      <label for="time">Time:</label>
      <input
        type="time"
        v-model="newEvent.timeVenueUTC"
        id="timeVenueUTC"
        required
      />
      <button type="submit">Add Event</button>
    </form>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "EventForm",
  data() {
    return {
      newEvent: {
        homeTeam: "",
        awayTeam: "",
        dateVenue: "",
        timeVenueUTC: "",
      },
    };
  },
  methods: {
    ...mapActions(["addEvent"]),
    onSubmit() {
      this.$store.dispatch("addEvent", this.newEvent);
      this.newEvent.homeTeam = "";
      this.newEvent.awayTeam = "";
      this.newEvent.dateVenue = "";
      this.newEvent.timeVenueUTC = "";
    },
  },
};
</script>
