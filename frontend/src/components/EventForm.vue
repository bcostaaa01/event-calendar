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
      <label for="season">Season: </label>
      <input type="text" v-model="newEvent.season" id="season" required />
      <br />
      <label for="status">Status: </label>
      <input type="text" v-model="newEvent.status" id="status" required />
      <br />
      <label for="stadium">Stadium: </label>
      <input type="text" v-model="newEvent.stadium" id="stadium" required />
      <br />
      <label for="championship">Championship: </label>
      <input
        type="text"
        v-model="newEvent.originCompetitionName"
        id="championship"
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
        season: "",
        status: "",
        homeTeam: "",
        awayTeam: "",
        dateVenue: "",
        timeVenueUTC: "",
        stadium: "",
        originCompetitionName: "",
      },
    };
  },
  methods: {
    onSubmit() {
      if (Object.values(this.newEvent).filter((val) => val !== "").length) {
        this.$store.dispatch("addEvent", this.newEvent);
      }
      this.newEvent = {
        season: "",
        status: "",
        homeTeam: "",
        awayTeam: "",
        dateVenue: "",
        timeVenueUTC: "",
        stadium: "",
        originCompetitionName: "",
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
  margin-bottom: 20px;
}
</style>
