<template>
  <div class="event">
    <EventForm />
  </div>
</template>

<script>
import EventForm from "@/components/EventForm.vue";

export default {
  name: "EventView",
  components: {
    EventForm,
  },
};
</script>
