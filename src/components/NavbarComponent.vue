<template>
    <div class="row">
      <div class="col-md-3">
        <h2>
          <span class="custom-text-primary">DANIEL </span>
          <span class="custom-text-primarybackground">BRUNNER</span>
        </h2>
      </div>

      <div class="col-md-9">
        <div class="row justify-content-end">
          <div class="col-md-3">
            <button
              class="btn border-0"
              :class="{ 'custom-active-link': currentPage === 'aboutme' }"
              @click="navigateTo('aboutme')"
              @mouseenter="isHovered = true"
              @mouseleave="isHovered = false"
            >
              <h2
                class="grow-on-hover"
                :class="{ 'custom-active-link': currentPage === 'aboutme' }"
              >
                ABOUT ME
              </h2>
            </button>
          </div>

          <div class="col-md-3">
            <button
              class="btn border-0"
              :class="{ 'custom-active-link': currentPage === 'skills' }"
              @click="navigateTo('skills')"
              @mouseenter="isHovered = true"
              @mouseleave="isHovered = false"
            >
              <h2
                class="grow-on-hover"
                :class="{ 'custom-active-link': currentPage === 'skills' }"
              >
                SKILLS
              </h2>
            </button>
          </div>

          <div class="col-md-3">
            <button
              class="btn border-0"
              :class="{ 'custom-active-link': currentPage === 'contacts' }"
              @click="navigateTo('contacts')"
              @mouseenter="isHovered = true"
              @mouseleave="isHovered = false"
            >
              <h2
                class="grow-on-hover"
                :class="{ 'custom-active-link': currentPage === 'contacts' }"
              >
                CONTACTS
              </h2>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  import { ref, watch } from 'vue';
  import { useRouter, useRoute } from 'vue-router';

  export default {
    name: 'NavbarComponent',
    setup() {
      const router = useRouter();
      const route = useRoute();

      // Initialize currentPage based on the current route path
      const currentPage = ref(
        route.path.startsWith('/')
          ? route.path.slice(1)
          : 'aboutme' // Default to 'aboutme' if path is '/'
      );

      const isHovered = ref(false);

      // Function to navigate to a specific page
      const navigateTo = (page) => {
        if (currentPage.value !== page) {
          currentPage.value = page;
          router.push(`/${page}`);
        }
      };

      // Watch for route changes to update currentPage accordingly
      watch(
        () => route.path,
        (newPath) => {
          const page = newPath.startsWith('/') ? newPath.slice(1) : 'aboutme';
          currentPage.value = page || 'aboutme';
        }
      );

      return {
        isHovered,
        currentPage,
        navigateTo,
      };
    },
  };
  </script>

  <style scoped>
  /* Add your styles here */
  .custom-active-link {
    /* Example active link styles */
    color: #007bff;
  }

  .grow-on-hover {
    transition: transform 0.3s;
  }

  .grow-on-hover:hover {
    transform: scale(1.05);
  }
  </style>
