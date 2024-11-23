<template>

        <div class="row w-100">
            <div class="col-md-6">
                <div class="row justify-content-start">
                    <AvatarComponent/>
                </div>
                <div class="row">
                    <JumboTron />
                </div>
            </div>
            <div class="col-md-6 d-flex align-items-center justify-content-center">
                <LebenslaufComponent />
            </div>
        </div>

</template>


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
