<template>
  <div id="calendar">
    <!-- {{ formattedEvents }} -->
    <div v-for="event in formattedEvents" :key="event.id">
      <div id="cal-event">
        <p v-if="event.homeTeam">{{ event.homeTeam.name }}</p>
        <p v-if="event.awayTeam">{{ event.awayTeam.name }}</p>
        <p>Date: {{ event.date }}</p>
        <p>Time: {{ event.timeVenueUTC }}</p>
        <!-- <p v-if="">Away Team: </p> -->
      </div>
    </div>
  </div>
</template>

<script>
// import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  name: "EventCalendar",
  // components: {
  //   VueCal,
  // },
  computed: {
    formattedEvents() {
      return this.$store.state.events.map((event) => {
        return {
          season: event.season,
          date: event.dateVenue,
          homeTeam: event.homeTeam,
          awayTeam: event.awayTeam,
          homeGoals: event.result.homeGoals,
          awayGoals: event.result.awayGoals,
          yellowCards: event.result.yellowCards.length,
          redCards: event.result.directRedCards.length,
          competition: event.originCompetitionName,
        };
      });
    },
  },
  created() {
    this.$store.dispatch("fetchEvents");
  },
};
</script>
<style scoped>
#calendar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

#cal-event {
  width: 300px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
