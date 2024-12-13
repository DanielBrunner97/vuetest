<template>
    <div class="pt-5">
      <div class="timeline">
        <div
          v-for="(item, index) in timelineItems"
          :key="index"
          class="timeline-item d-flex animated-item"
          :style="{ animationDelay: `${index * 0.3}s` }"
        >
          <!-- Timeline Column -->
          <div class="timeline-marker position-relative me-4">
            <div class="timeline-circle h1">{{ item.year }}</div>
            <!-- Connector line (only if not the last item) -->
            <div
              v-if="index < timelineItems.length - 1"
              class="timeline-line"
            ></div>
          </div>
          <!-- Content Column -->
          <div class="timeline-content p-4">
            <div class="info-box p-3">
              <h5 class="mb-2 text-primary h2">{{ item.year }}</h5>
              <p class="mb-0">{{ item.content }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'LebenslaufComponent',
    data() {
      return {
        timelineItems: [
          {
            year: '2020',
            content:
              'Started project X and Started project X and achieved initial milestonesStarted project X and achieved initial milestonesStarted project X and achieved initial milestonesStarted project X and achieved initial milestonesStarted project X and achieved initial milestonesStarted project X and achieved initial milestonesStarted project X and achieved initial milestonesStarted project X and achieved initial milestonesStarted project X and achieved initial milestonesStarted project X and achieved initial milestonesStarted project X and achieved initial milestonesStarted project X and achieved initial milestonesachieved initial milestones.',
          },
          {
            year: '2021',
            content: 'Expanded the team and launched version 2.0.',
          },
          {
            year: '2022',
            content: 'Reached 10,000 users and secured funding.',
          },
          {
            year: '2023',
            content: 'Opened new offices and entered international markets.',
          },
          {
            year: '2024',
            content:
              'Plan to introduce AI-driven features and enhance user experience.',
          },
        ],
      };
    },
  };
  </script>

  <style lang="scss" scoped>
  /* Timeline Container */
  .timeline {
    display: flex;
    flex-direction: column;
  }

  /* Each Timeline Item */
  .timeline-item {
    display: flex;
    align-items: stretch;
    position: relative;
    margin-bottom: 30px; /* Increased margin-bottom */

    /* Initial state for animation */
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 1s forwards;
  }

  /* Timeline Marker Column */
  .timeline-marker {
    width: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    align-self: stretch;
  }

  /* Timeline Circle */
  .timeline-circle {
    width: 140px;
    height: 140px;
    background-color: $color-primary;
    color: white;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    z-index: 1;
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.473);
    position: relative;
  }

  /* Connector Line */
  .timeline-line {
    position: absolute;
    top: 140px; /* Start from the center of the 140px circle */
    left: 50%;
    transform: translateX(-50%);
    width: 4px;
    height: calc(100% - 35px); /* Extend the line to the bottom of the marker */
    background-color: $color-primary;
    z-index: 0;
  }

  /* Content Column */
  .timeline-content {
    border-radius: 10px;
    max-width: 80%;
    background-color: rgba($color-primary, 0.2);
    flex-grow: 1;
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.274);
    margin-top: 7%;
    margin-left: -2%;
    padding: 10px; /* Added padding */
    transition: box-shadow 0.3s ease, border-color 0.3s ease,
      transform 0.3s ease; /* Smooth transition */
    border: 2px solid transparent; /* Initial border */
  }

  .timeline-content:hover {
    transform: scale(1.15);
    box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.3); /* Enhance shadow on hover */
    border: 2px solid $color-primary; /* Add a border to simulate growth */
    cursor: pointer; /* Change cursor to pointer on hover */
  }

  /* Info Box Styling */
  .info-box {
    padding: 10px; /* You can adjust this value as needed */
    font-size: 22px;
  }

  /* Animation Keyframes */
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  </style>
