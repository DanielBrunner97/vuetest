<template>
  <div class="container-fluid p-0 h-100 background-container">
    <div class="row g-0 full-height">
      <!-- Left Content -->
      <div class="col-md-5">
        <router-view name="left" />
      </div>

      <!-- Right Content -->
      <div class="col-md-7 p-3 d-flex flex-column">
        <div class="navbar-wrapper">
          <NavbarComponent />
        </div>
        <router-view name="right" />
      </div>
    </div>
  </div>
</template>

<style scoped>
  .background-container {
    position: relative;
    background-image: url('@/assets/animatedBG.svg');
    background-size: cover;      /* Ensures the SVG covers the entire container */
    background-repeat: no-repeat;/* Prevents the SVG from repeating */
    background-position: center; /* Centers the SVG */
    width: 100%;
    height: 100vh;               /* Sets the height to full viewport height */
  }
</style>

  <script>
  import NavbarComponent from '@/components/NavbarComponent.vue';

  export default {
    name: 'DefaultLayout',
    components: {
      NavbarComponent,
    },
  };
  </script>