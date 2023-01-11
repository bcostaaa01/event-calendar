<template>
  <div>
    <vue-cal
      :events="events"
      selected-date="2022-02-03"
      :time="false"
      :disable-views="['years', 'year', 'month']"
      hide-weekends
    ></vue-cal>
  </div>
</template>

<script>
import VueCal from "vue-cal";
import "vue-cal/dist/vuecal.css";

export default {
  name: "EventCalendar",
  components: {
    VueCal,
  },
  data() {
    return {
      events: [
        {
          title: "Al Shabab vs Nasaf",
          start: "2022-02-03",
          end: "2022-02-03",
          content: '<i class="icon material-icons">Football match</i>',
          class: "leisure",
          label: "season: 2022"
        },
      ],
    };
  },
};
</script>
