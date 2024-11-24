<!-- SkillView.vue -->
<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="row justify-content-md-center">
          <div
            class="col-md-auto"
            v-for="(component, index) in components"
            :key="component.id"
          >
            <SkillComponent
              class="p-4"
              @hover="onHover(index)"
              @leave="onLeave"
              :class="{ 'is-hovered': hoveredIndex === index }"
              :data="component"/>
          </div>
        </div>
      <!-- Overlay -->
      <div v-if="isHovered" class="overlay"></div>
    </div>
  </template>

  <script>
  import SkillComponent from '@/views/SkillView/fragements/SkillComponent.vue';
  import { ref } from 'vue';

  export default {
  name: 'SkillView',
  components: {
    SkillComponent,
  },
  setup() {
    // Reactive state variables
    const isHovered = ref(false);
    const hoveredIndex = ref(null);
    const components = ref([
      {
        id: 1,
        name: 'Skill 1',
        description: 'Description of Skill 1',
        img: require('@/assets/Logos/vue.svg'),
      },
      {
        id: 2,
        name: 'Skill 2',
        description: 'Description of Skill 2',
        img: require('@/assets/Logos/flutter.svg'),
      },
      {
        id: 3,
        name: 'Skill 3',
        description: 'Description of Skill 3',
        img: require('@/assets/Logos/Unity_light.svg'),
      },
    ]);

    // Event handlers
    const onHover = (index) => {
      isHovered.value = true;
      hoveredIndex.value = index;
    };

    const onLeave = () => {
      isHovered.value = false;
      hoveredIndex.value = null;
    };

    // Expose variables and methods to the template
    return {
      isHovered,
      hoveredIndex,
      components,
      onHover,
      onLeave,
    };
  },
};
</script>

  <style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 10; /* Positioned above other content */
  }

  .skill-component {
    position: relative;
    z-index: 5; /* Base z-index for components */
  }

  .skill-component.is-hovered {
    z-index: 15; /* Hovered component appears above the overlay */
  }
  </style>
