<template>
  <div>
    <h1>{{ heading }}</h1>
  </div>
</template>

<script>
export default {
  name: "Heading",
  data() {
    return {
      heading: "Sports Events Calendar",
    };
  },
};
</script>

<style scoped>
h1 {
  color: rgb(102, 215, 129);
  font-size: 36px;
  text-transform: uppercase;
  text-shadow: 2px 2px #ccc;
}
</style>
