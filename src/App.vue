<!-- App.vue -->
<template>
  <PerfectScrollbar style="height: 100vh">
    <DefaultLayout />
  </PerfectScrollbar>

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
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-webkit-autofill:active {
      transition: background-color 5000s ease-in-out 0s;
  }
  input:-webkit-autofill {
    -webkit-text-fill-color: #ffffff;
  }

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
}
html, body {
  margin: 0;
  overflow: hidden;
  height: 100%;
  background: linear-gradient(35deg, rgb(43, 39, 104), rgb(55, 51, 116), rgb(108, 83, 209));
  background-size: cover; /* Ensures the gradient stretches to cover the screen */
  background-repeat: no-repeat; /* Prevents the gradient from repeating */
  background-attachment: fixed; /* Keeps the gradient fixed while scrolling */
}


</style>
