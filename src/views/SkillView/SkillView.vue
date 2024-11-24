<template>
<div class="container d-flex justify-content-center align-items-center min-vh-100">
    <div>
        <!-- First Row (1-3) -->
        <div class="row justify-content-md-center">
            <div class="col-md-auto" v-for="(component, index) in components.slice(0, 3)" :key="component.id">
                <SkillComponent class="p-5" @hover="onHover(index)" @leave="onLeave" :class="{ 'is-hovered': hoveredIndex === index }" :data="component" />
            </div>
        </div>

        <!-- Second Row (4-6) -->
        <div class="row justify-content-md-center pt-5 mb-5">
            <div class="col-md-auto" v-for="(component, index) in components.slice(3, 6)" :key="component.id">
                <SkillComponent class="p-5" @hover="onHover(index + 3)" @leave="onLeave" :class="{ 'is-hovered': hoveredIndex === (index + 3) }" :data="component" />
            </div>
        </div>
    </div>

    <!-- Overlay -->
    <div v-if="isHovered" class="overlay"></div>
</div>
</template>


<script>
import SkillComponent from '@/views/SkillView/fragments/SkillComponent.vue';
import {
    ref
} from 'vue';

export default {
    name: 'SkillView',
    components: {
        SkillComponent,
    },
    setup() {
        // Reactive state variables
        const isHovered = ref(false);
        const hoveredIndex = ref(null);
        const components = ref([{
                id: 1,
                name: 'Skill 1',
                description: '<h1> VUE </h1> <p style="font-size: 21px;"> Vue.js is a progressive JavaScript framework renowned for building dynamic and responsive user interfaces. </p>',
                img: require('@/assets/Logos/vue.svg'),
                url: 'https://vuejs.org/'
            },
            {
                id: 2,
                name: 'Skill 2',
                description: '<h1> FLUTTER </h1> <p style="font-size: 21px;"> Flutter is a powerful open-source UI toolkit developed by Google, designed for building natively compiled applications for mobile, web, and desktop from a single codebase. </p>',
                img: require('@/assets/Logos/flutter.svg'),
                url: 'https://flutter.dev/'
            },
            {
                id: 3,
                name: 'Skill 3',
                description: '<h1> UNITY </h1> <p style="font-size: 21px;"> Unity is a leading cross-platform game engine. Mainly used for video games, simulations, and virtual reality (VR). </p>',
                img: require('@/assets/Logos/Unity_light.svg'),
                url: 'https://unity.com/'
            },
            {
                id: 4,
                name: 'Skill 4',
                description: '<h1> FIREBASE </h1> <p style="font-size: 21px;">Firebase offers a suite of powerful tools and services that handle backend infrastructure, allowing developers to focus on developing without the complexity of managing servers. </p>',
                img: require('@/assets/Logos/firebase.svg'),
                url: 'https://firebase.google.com/'
            },
            {
                id: 5,
                name: 'Skill 5',
                description: '<h1> SPRING </h1> <p style="font-size: 21px;">  Spring facilitates the development of scalable, maintainable, and high-performance applications by providing a wide range of features and modules. </p>',
                img: require('@/assets/Logos/spring.svg'),
                url: 'https://spring.io/'
            },
            {
                id: 6,
                name: 'Skill 6',
                description: '<h1> INKSCAPE </h1> <p style="font-size: 21px;">Inkscape is a open-source vector graphics editor widely acclaimed for its versatility and precision in creating scalable illustrations, logos, diagrams, and complex graphic designs.</p>',
                img: require('@/assets/Logos/inkscape.svg'),
                url: 'https://inkscape.org/'
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
    z-index: 10;
    /* Positioned above other content */
}

.skill-component {
    position: relative;
    z-index: 5;
    /* Base z-index for components */
}

.skill-component.is-hovered {
    z-index: 15;
    /* Hovered component appears above the overlay */
}
</style>
