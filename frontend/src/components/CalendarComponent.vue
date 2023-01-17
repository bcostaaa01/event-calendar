<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Home Team</th>
          <th>Away Team</th>
          <th>Time</th>
          <th>
            <button class="add-button" @click="showForm = !showForm">+</button>
          </th>
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
    <div v-if="showForm" class="add-form">
      <form @submit.prevent="addEvent">
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
      <p>Championship: {{ selectedEvent.originCompetitionName }}</p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "CalendarGrid",
  data() {
    return {
      newEvent: {
        date: "",
        homeTeam: "",
        awayTeam: "",
        time: "",
      },
      showForm: false,
      selectedEvent: null,
    };
  },
  methods: {
    showDetails(event) {
      this.selectedEvent = event;
    },
    addEvent() {
      const newEvent = {
        id: this.events.length + 1,
        dateVenue: this.newEvent.date,
        homeTeam: { name: this.newEvent.homeTeam },
        awayTeam: { name: this.newEvent.awayTeam },
        timeVenueUTC: this.newEvent.time,
      };
      this.events.push(newEvent);
      this.newEvent = {
        date: "",
        homeTeam: "",
        awayTeam: "",
        time: "",
      };
      this.showForm = false;
    },
  },
  computed: {
    ...mapState(["events"]),
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
.add-button {
  background-color: #4caf50;
  border: none;
  color: white;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}

.add-form {
  background-color: #f2f2f2;
  padding: 20px;
  margin-top: 20px;
  text-align: center;
}

.add-form label {
  display: block;
}

/* styles for the events table */
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

/* styles for the Add event button */
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
