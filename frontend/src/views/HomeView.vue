<template>
  <div class="home">
    <!-- <EventCalendar /> -->
    <!-- <JsonData /> -->
    <SportsEvents />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCalendar from "@/components/EventCalendar.vue";
import JsonData from "@/components/JsonData.vue";
import SportsEvents from "@/components/SportsEvents.vue";

export default {
  name: "HomeView",
  components: {
    EventCalendar,
    JsonData,
    SportsEvents
  },
};
</script>
