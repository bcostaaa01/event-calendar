<template>
  <dark-mode-toggle
    @toggle-dark-mode="darkMode = !darkMode"
    :dark-mode="darkMode"
  />
  <div v-bind:class="{ 'dark-mode': darkMode }">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/event">Add a new event</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
import DarkModeToggle from "./components/UI/DarkModeToggle.vue";

export default {
  components: {
    DarkModeToggle,
  },
  data() {
    return {
      darkMode: false,
    };
  },
};
</script>

<style>
/* styles for dark mode */
.dark-mode {
  background-color: rgb(45, 37, 37);
  color: white;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
