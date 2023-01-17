<template>
  <div class="home">
    <SportsEvents />
  </div>
</template>

<script>
// @ is an alias to /src
import SportsEvents from "@/components/SportsEvents.vue";

export default {
  name: "HomeView",
  components: {
    SportsEvents,
  },
};
</script>
