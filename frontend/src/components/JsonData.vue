<template>
  <div>
    <div>
      <vue-cal
        :events="events"
        selected-date="2022-02-03"
        :time="false"
        :disable-views="['years', 'year', 'month']"
        hide-weekends
      ></vue-cal>
      <!-- {{ this.$store.state.events }} -->
      <!-- <div v-for="event in this.$store.state.events" :key="event.id">
      <ul>
        <li style="padding: 20px; margin: 20px; background-color: lightGray">
          <p>Season: {{ event.season }}</p>
          <p>Date: {{ event.dateVenue }}</p>
          <p v-if="event.homeTeam" >Home Team: {{ event.homeTeam.name }}</p>
          <p v-if="event.awayTeam" >Home Team: {{ event.awayTeam.name }}</p>
          <p>Goals (home team): {{ event.result.homeGoals }}</p>
          <p>Goals (away team): {{ event.result.awayGoals }}</p>
          <p>Yellow Cards: {{ event.result.yellowCards.length }}</p>
          <p>Red Cards: {{ event.result.directRedCards.length }}</p>
          <p>Competition: {{ event.originCompetitionName }}</p>
        </li>
      </ul>
    </div> -->
    </div>
    <div v-for="event in formattedEvents" :key="event.id">
      <td>
        <tr style="padding: 20px; margin: 20px; background-color: lightGray">
          <p>Season: {{ event.season }}</p>
          <p>Date: {{ event.date }}</p>
          <p v-if="event.homeTeam">Home Team: {{ event.homeTeam.name }}</p>
          <p v-if="event.awayTeam">Away Team: {{ event.awayTeam.name }}</p>
          <p>Goals (home team): {{ event.homeGoals }}</p>
          <p>Goals (away team): {{ event.awayGoals }}</p>
          <p>Yellow Cards: {{ event.yellowCards }}</p>
          <p>Red Cards: {{ event.redCards }}</p>
          <p>Competition: {{ event.competition }}</p>
        </tr>
      </td>
    </div>
  </div>
</template>

<script>
// import store from "@/store/index";
// import { mapState } from "vuex";
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  name: "JsonData",
  // store,
  components: {
    VueCal,
  },
  // data() {
  //   return {
  //     events
  //   }
  // },
  // computed: {
  //   events() {
  //     return this.$store.state.events
  //       .filter((event) => event.homeTeam && event.awayTeam)
  //       .map((event) => {
  //         return {
  //           start: new Date(event.dateVenue + " " + event.timeVenueUTC),
  //           end: new Date(event.dateVenue + " " + event.timeVenueUTC),
  //           title: event.homeTeam.name + " vs " + event.awayTeam.name,
  //           color: "#3498db",
  //         };
  //       });
  //   },
  // },
  // computed: {
  //   events() {
  //     return this.$store.state.events;
  //   },
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
