<template>
<div class="row p-4">
    <div class="col-md-6">
        <div class="row avatar-container justify-content-center">
            <AvatarComponent />
        </div>
        <div class="row jumbotron-container justify-content-center mt-n3">
            <JumboTron />
        </div>
    </div>
    <div class="col-md-6 d-flex align-items-center justify-content-center">
        <LebenslaufComponent />
    </div>
</div>
</template>

<style scoped>
.avatar-container {
    position: relative;

    z-index: 2;
}

.jumbotron-container {
    position: relative;

    z-index: 1;
}

.mt-n3 {
    margin-top: -11rem;
}
</style>

<script>
import JumboTron from '@/components/Jumbotron.vue';
import LebenslaufComponent from '@/components/LebenslaufComponent.vue';
import AvatarComponent from '@/components/AvatarComponent.vue';

export default {
    name: 'AboutMeView',
    components: {
        JumboTron,
        LebenslaufComponent,
        AvatarComponent
    },
};
</script>
