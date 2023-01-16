<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Home Team</th>
          <th>Away Team</th>
          <th>Time</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="event in events" :key="event.id" @click="showDetails(event)">
          <td>{{ event.dateVenue }}</td>
          <td>{{ event.homeTeam ? event.homeTeam.name : "No data" }}</td>
          <td>
            {{ event.awayTeam ? event.awayTeam.name : "No data" }}
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
      <p>Status: {{ selectedEvent.status }}</p>
      <p>Stadium: {{ selectedEvent.stadium || "No data" }}</p>
      <p>
        Result: {{ selectedEvent.result.homeGoals }} :
        {{ selectedEvent.result.awayGoals }}
      </p>
    </div>
    <div>
      <button @click="addEvent" class="add-event-btn">Add an event</button>
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
    };
  },
  methods: {
    showDetails(event) {
      this.selectedEvent = event;
    },
    addEvent() {
      // Code to add event to the table
      this.events.push({
        dateVenue: "10-10-2023",
        homeTeam: { name: "Benfica" },
        awayTeam: { name: "Porto" },
        timeVenueUTC: "20:00:00",
      });
    },
  },
  computed: {
    ...mapState(["events"]),
  },
  created() {
    this.$store.dispatch("fetchEvents");
  },
};
</script>

<style>
table {
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

.add-event-btn {
  background-color: #4caf50;
  color: white;
  margin-top: 15px;
  padding: 8px;
  text-align: center;
  border: none;
  cursor: pointer;
}

.add-event-btn:hover {
  background-color: #3e8e41;
}
</style>
