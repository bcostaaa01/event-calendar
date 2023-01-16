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
          <td>{{ (event.homeTeam && event.homeTeam.name) || "No team" }}</td>
          <td>{{ event.awayTeam.name && event.awayTeam.name }}</td>
          <td>{{ event.timeVenueUTC }}</td>
        </tr>
      </tbody>
    </table>
    <div v-if="selectedEvent" class="card">
      <h2>
        {{ selectedEvent.homeTeam.name }} vs {{ selectedEvent.awayTeam.name }}
      </h2>
      <p>Date: {{ selectedEvent.dateVenue }}</p>
      <p>Time: {{ selectedEvent.timeVenueUTC }}</p>
      <p>Status: {{ selectedEvent.status }}</p>
      <p>Stadium: {{ selectedEvent.stadium }}</p>
      <p>
        Result: {{ selectedEvent.result.homeGoals }} :
        {{ selectedEvent.result.awayGoals }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CalendarGrid",
  props: {
    events: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      selectedEvent: null,
    };
  },
  methods: {
    showDetails(event) {
      this.selectedEvent = event;
    },
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
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  width: 50%;
  margin: auto;
  margin-top: 50px; 
}

.card-header {
  background-color: #4CAF50;
  color: white;
  padding: 15px;
  text-align: center;
}

.card-body {
  padding: 20px;
}

</style>
