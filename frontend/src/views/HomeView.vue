<template>
  <div class="home">
    <SportsEvents @event-added="fetchEvents" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from "vuex";
import SportsEvents from "@/components/SportsEvents.vue";

export default {
  name: "HomeView",
  components: {
    SportsEvents,
  },
  methods: {
    ...mapActions(["fetchEvents"]),
  },
};
</script>
