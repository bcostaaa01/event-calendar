<template>
  <div class="home">
    <Heading />
    <Calendar @event-added="fetchEvents" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
import Heading from "@/components/UI/Heading.vue";
import Calendar from "@/components/CalendarComponent.vue";

export default {
  name: "HomeView",
  components: {
    Heading,
    Calendar,
  },
  methods: {
    ...mapActions(["fetchEvents"]),
  },
};
</script>
