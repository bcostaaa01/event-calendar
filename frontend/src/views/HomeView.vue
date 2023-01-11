<template>
  <div class="home">
    <EventCalendar />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCalendar from "@/components/EventCalendar.vue";

export default {
  name: "HomeView",
  components: {
    EventCalendar,
  },
};
</script>
