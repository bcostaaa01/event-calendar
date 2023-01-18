<template>
  <div>
    <form @submit.prevent="onSubmit">
      <label for="date">Date:</label>
      <input type="date" id="date" v-model="newEvent.date" required />
      <label for="homeTeam">Home Team:</label>
      <input type="text" id="homeTeam" v-model="newEvent.homeTeam" required />
      <label for="awayTeam">Away Team:</label>
      <input type="text" id="awayTeam" v-model="newEvent.awayTeam" required />
      <label for="time">Time:</label>
      <input type="time" id="time" v-model="newEvent.time" required />
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
        date: "",
        homeTeam: "",
        awayTeam: "",
        time: "",
      },
    };
  },
  methods: {
    ...mapActions(["addEvent"]),
    resetForm() {
      this.newEvent = {};
    },
    onSubmit() {
      this.addEvent(this.newEvent);
      this.resetForm();
      this.$store.dispatch("fetchEvents");
      this.$router.push({ path: "/" });
    },
  },
};
</script>
