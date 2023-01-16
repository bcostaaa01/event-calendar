<template>
  <div>
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Title</th>
          <th>Time</th>
          <th>Result</th>
          <th>Championship</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="event in events" :key="event.id">
          <td>{{ event.dateVenue }}</td>
          <td>{{ event.timeVenueUTC }}</td>
          <td>
            {{ event.homeTeam && event.homeTeam.name }} -
            {{ event.awayTeam && event.awayTeam.name }}
          </td>

          <td>
            {{ event.result && event.result.homeGoals }} -
            {{ event.result && event.result.awayGoals }}
          </td>
          <td>{{ event.originCompetitionName }}</td>
        </tr>
      </tbody>
    </table>
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
};
</script>

<style scoped>
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
</style>
