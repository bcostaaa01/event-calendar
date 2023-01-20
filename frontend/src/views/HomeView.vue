<template>
  <div class="home">
    <Calendar @event-added="fetchEvents" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
import Calendar from "@/components/CalendarComponent.vue";

export default {
  name: "HomeView",
  components: {
    Calendar,
  },
  methods: {
    ...mapActions(["fetchEvents"]),
  },
};
</script>
