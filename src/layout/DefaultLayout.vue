<template>
    <div class="container-fluid p-0 h-100">
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

  <script>
  import NavbarComponent from '@/components/NavbarComponent.vue';

  export default {
    name: 'DefaultLayout',
    components: {
      NavbarComponent,
    },
  };
  </script>