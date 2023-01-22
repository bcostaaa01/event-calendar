<template>
  <div>
    <button class="dark-mode-toggle" @click="$emit('toggle-dark-mode')">
      <transition name="fade">
        <template v-if="darkMode">🌕</template>
        <template v-else>☀️</template>
      </transition>
    </button>
  </div>
</template>

<script>
export default {
  props: ["darkMode"],
  methods: {},
};
</script>

<style>
.dark-mode-toggle {
  background-color: rgb(43, 38, 38);
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 1rem;
  cursor: grab;
  margin: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
