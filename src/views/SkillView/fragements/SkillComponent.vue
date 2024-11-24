<template>
    <div class="skill-component">
      <div class="wrapper">
        <div class="image-container">
          <img
            @mouseenter="onMouseEnter"
            @mouseleave="onMouseLeave"
            :src=data.img
            :alt="`${data.name} Logo`"
            class="svg-image"
          />

          <div class="textbox">
            {{ data.description }}
          </div>
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


  </script>
  <style lang="scss" scoped>
  .image-container {
    position: relative;
    display: inline-block;

    .svg-image {
      width: auto;
      height: 200px;
      filter:
        drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.699))
        drop-shadow(0px 0px 5px rgba(255, 255, 255, 1));
      z-index: 2;
      cursor: pointer;
      transition: filter 0.3s ease, transform 0.3s ease;

      &:hover {
        transform: scale(1.25);
      }
    }

    .textbox {
      position: absolute;
      top: 50%;
      left: 160px;
      transform: translateY(-50%);
      background-color: rgba($color-primary, 0.2); /* Example color, replace $color-primary if defined */
      padding: 10px 15px;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
      z-index: 3; /* Ensure it's above the image */
      transition: opacity 0.3s ease, visibility 0.3s ease;

      width: 300px;

      opacity: 0;
      visibility: hidden;
    }

    /* Show the textbox when the image is hovered */
    .svg-image:hover + .textbox {
      opacity: 1;
      visibility: visible;
    }
  }
  </style>
