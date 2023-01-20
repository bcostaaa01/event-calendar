<template>
  <div class="event-form">
    <form @submit.prevent="onSubmit">
      <label for="date">Date: </label>
      <input type="date" v-model="newEvent.dateVenue" id="dateVenue" required />
      <br />
      <label for="homeTeam">Home Team: </label>
      <input type="text" v-model="newEvent.homeTeam" id="homeTeam" required />
      <br />
      <label for="awayTeam">Away Team: </label>
      <input type="text" v-model="newEvent.awayTeam" id="awayTeam" required />
      <br />
      <label for="time">Time: </label>
      <input
        type="time"
        v-model="newEvent.timeVenueUTC"
        id="timeVenueUTC"
        required
      />
      <br />
      <button type="submit">Add Event</button>
    </form>
  </div>
</template>
<script>
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
    onSubmit() {
      if (Object.values(this.newEvent).filter((val) => val !== "").length) {
        this.$store.dispatch("addEvent", this.newEvent);
      }
      this.newEvent = {
        homeTeam: "",
        awayTeam: "",
        dateVenue: "",
        timeVenueUTC: "",
      };
    },
  },
};
</script>

<style scoped>
.event-form input {
  padding: 10px;
  margin: 5px 0;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid gray;
}
.event-form button {
  background-color: rgb(55, 155, 55);
  color: white;
  margin-top: 20px;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 18px;
  cursor: pointer;
}
</style>
