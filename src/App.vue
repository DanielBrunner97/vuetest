<!-- App.vue -->
<template>
  <DefaultLayout />
</template>

<script>
import DefaultLayout from '@/layout/DefaultLayout.vue';

export default {
  name: 'App',
  components: {
    DefaultLayout,
  },
};
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background: linear-gradient(35deg,rgb(43, 39, 104), rgb(55, 51, 116), rgb(108, 83, 209));
}
</style>
