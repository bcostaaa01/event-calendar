<template>
  <div>
    {{ events }}
  </div>
</template>

<script>
export default {
  name: "JsonData",
  data() {
    return {
      events: [],
    };
  },
  mounted() {
    fetch("data/sportData.json").then((data) => {
      this.events = data;
    });
  },
};
</script>
