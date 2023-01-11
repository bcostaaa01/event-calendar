<template>
  <div class="home">
    <EventCalendar />
    <JsonData />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCalendar from "@/components/EventCalendar.vue";
import JsonData from "@/components/JsonData.vue";

export default {
  name: "HomeView",
  components: {
    EventCalendar,
    JsonData
  },
};
</script>
