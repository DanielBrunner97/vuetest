<template>
  <div class="skill-component">
    <div class="wrapper">
      <div class="image-container" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave" @click="handleClick">
        <img
          :src="data.img"
          :alt="`${data.name} Logo`"
          class="svg-image"
        />
        <div class="textbox" v-html="data.description"></div>
      </div>
    </div>
  </div>
</template>

  <script setup>
  import { defineProps, defineEmits } from 'vue';

  // Define the props that the component accepts
  const props = defineProps({
    data: {
      type: Object,
      required: true,
      validator: (value) => {
        return (
          typeof value.id === 'number' &&
          typeof value.name === 'string' &&
          typeof value.description === 'string' &&
          typeof value.img === 'string'
        );
      },
    },
  });

  // Define the events that the component can emit
  const emit = defineEmits(['hover', 'leave']);

  // Accessing props without destructuring to maintain reactivity
  const onMouseEnter = () => {
    emit('hover', props.data.id);
  };

  const onMouseLeave = () => {
    emit('leave');
  };

  // Handle click event to navigate to the URL
  const handleClick = () => {
    window.open(props.data.url, '_blank')

  }


  </script>
<style lang="scss" scoped>

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}
.image-container {
    position: relative;
    display: inline-block;
    margin-bottom: 30px;
    animation: float 6s ease-in-out infinite;


    .svg-image {
        width: auto;
        height: 200px;
        filter:
            drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.699))
            drop-shadow(0px 0px 5px rgba(255, 255, 255, 1));
        z-index: 4;
        cursor: pointer;
        transition: filter 0.3s ease, transform 0.3s ease;

        /* Remove the hover effect from the image */
        /* &:hover {
            transform: scale(1.25);
        } */
    }

    .textbox {
        position: absolute;
        top: 0%;
        left: 160px;
        background-color: rgba($color-primary, 0.2); /* Ensure $color-primary is defined */
        padding: 10px 15px;
        border: 1px solid #ccc;
        border-radius: 4px;
        box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        z-index: 2; /* Ensure it's above the image */
        transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;

        width: 200px;

        opacity: 0;
        visibility: hidden;
        transform: translate(-50%, 10px); /* Center horizontally and position below */
    }

    @media (max-width: 768px) {
      .textbox {
        left: 0px;
      }
    }

    /* Show the textbox when the container is hovered */
    &:hover .textbox {
        opacity: 1;
        visibility: visible;
        transform: translate(0, 0); /* Reset transform for smooth appearance */
    }

    /* Optional: Add hover effect to the image when the container is hovered */
    &:hover .svg-image {
        transform: scale(1.25);
    }
}
</style>
