<template>
<div class="p-0 background-container">

    <div class="row justify-content-end">
        <div class="col-md-7">
            <NavbarComponent />
        </div>
    </div>

    <router-view name="content" />

</div>
</template>

<style lang="scss" scoped>
.background-container {
    position: relative;
    background-image: url('@/assets/animatedBG.svg');
    background-size: cover;
    background-attachment: local;
    background-position: center;
    overflow: hidden;
    width: 100%;
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
