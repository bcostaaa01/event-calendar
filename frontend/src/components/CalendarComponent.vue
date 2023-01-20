<template>
  <div>
    <table id="events-table">
      <thead>
        <tr>
          <th>Date</th>
          <th>Home Team</th>
          <th>Away Team</th>
          <th>Time</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="event in events"
          :key="event.id"
          @click="showEventDetails(event)"
        >
          <td>{{ event.dateVenue }}</td>
          <td>{{ event.homeTeam ? event.homeTeam.name : "No data" }}</td>
          <td>
            {{ event.awayTeam ? event.awayTeam.name : "No data" }}
          </td>
          <td>{{ event.timeVenueUTC }}</td>
        </tr>
        <tr
          v-for="event in newEvents"
          :key="event.id"
          @click="showNewEventDetails(event)"
        >
          <td>{{ event.dateVenue }}</td>
          <td>{{ event.homeTeam }}</td>
          <td>
            {{ event.awayTeam }}
          </td>
          <td>{{ event.timeVenueUTC }}</td>
        </tr>
      </tbody>
    </table>

    <div v-if="selectedEvent" class="card">
      <h2>
        {{ selectedEvent.homeTeam ? selectedEvent.homeTeam.name : "No data" }}
        vs
        {{ selectedEvent.awayTeam ? selectedEvent.awayTeam.name : "No data" }}
      </h2>
      <p>Date: {{ selectedEvent.dateVenue }}</p>
      <p>Time: {{ selectedEvent.timeVenueUTC }}</p>
      <p>
        Result: {{ selectedEvent.result.homeGoals }} :
        {{ selectedEvent.result.awayGoals }}
      </p>
      <p>
        Yellow cards:
        {{ yellowCards === "" ? "No Data" : yellowCards }}
      </p>
      <p>Second yellow cards: {{ secondYellowCards }}</p>
      <p>Direct red cards: {{ directRedCards }}</p>
      <p>Season: {{ selectedEvent.season }}</p>
      <p>Status: {{ selectedEvent.status }}</p>
      <p>Stadium: {{ selectedEvent.stadium }}</p>
      <p>Championship: {{ selectedEvent.originCompetitionName }}</p>
    </div>
    <div v-if="selectedNewEvent" class="card">
      <h2>
        {{ selectedNewEvent.homeTeam }}
        vs
        {{ selectedNewEvent.awayTeam }}
      </h2>
      <p>Date: {{ selectedNewEvent.dateVenue }}</p>
      <p>Time: {{ selectedNewEvent.timeVenueUTC }}</p>
      <p>Season: {{ selectedNewEvent.season }}</p>
      <p>Status: {{ selectedNewEvent.status }}</p>
      <p>Stadium: {{ selectedNewEvent.stadium }}</p>
      <p>Championship: {{ selectedNewEvent.originCompetitionName }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CalendarGrid",
  data() {
    return {
      selectedEvent: null,
      selectedNewEvent: null,
    };
  },
  methods: {
    showEventDetails(event) {
      this.selectedEvent = event;
    },
    showNewEventDetails(event) {
      this.selectedNewEvent = event;
    },
  },
  watch: {
    selectedEvent(newValue) {
      if (newValue) {
        this.selectedNewEvent = false;
        console.log("called the if in selectedEvent");
      }
    },

    selectedNewEvent(newValue) {
      if (newValue) {
        this.selectedEvent = false;
        console.log("called the if in selectedEvent");
      }
    },
  },
  computed: {
    ...mapState(["events"]),
    ...mapState(["newEvent"]),
    events() {
      console.log(this.$store.state.events);
      return this.$store.state.events;
    },
    newEvents() {
      return this.$store.state.newEvent;
    },
    yellowCards() {
      if (!this.selectedEvent || !this.selectedEvent.result) return "No Data";
      return this.selectedEvent.result.yellowCards.length
        ? this.selectedEvent.result.yellowCards
        : "No Data";
    },
    secondYellowCards() {
      if (!this.selectedEvent || !this.selectedEvent.result) return "No Data";
      return this.selectedEvent.result.secondYellowCards.length
        ? this.selectedEvent.result.secondYellowCards
        : "No Data";
    },
    directRedCards() {
      if (!this.selectedEvent || !this.selectedEvent.result) return "No Data";
      return this.selectedEvent.result.directRedCards.length
        ? this.selectedEvent.result.directRedCards
        : "No Data";
    },
  },

  created() {
    this.$store.dispatch("fetchEvents");
  },
};
</script>

<style scoped>
/* styles for responsiveness */
@media (max-width: 600px) {
  /* Add styles for screens smaller than 600px */
}

/* styles for the events table */
#events-table {
  border-collapse: collapse;
  width: 100%;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f2f2f2;
}

.highlight {
  background-color: #ffc107;
}

/* styles for the selected event */
.selected {
  background-color: #ffc107;
}

.card {
  background-color: #fff;
  padding: 25px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 50%;
  margin: auto;
  margin-top: 50px;
}

.card-header {
  background-color: #4caf50;
  color: white;
  padding: 15px;
  text-align: center;
}

.card-body {
  padding: 20px;
}
</style>
