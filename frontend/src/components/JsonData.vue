<template>
  <div v-for="event in events" :key="event.id">
    {{ event }}
  </div>
</template>

<script>
// import store from "@/store/index";
import { mapState } from "vuex";

export default {
  name: "JsonData",
  // store,
  computed: {
    // events() {
    //   return store.state.events;
    // },
    ...mapState(["events"]),
  },
  created() {
    this.$store.dispatch("fetchEvents");
  },
};
</script>
