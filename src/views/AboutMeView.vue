<template>
<div class="container-fluid p-0 h-100">
    <div class="row g-0 full-height">
        <div class="col-md-5">
            <img class="img-fluid" src="https://s7d1.scene7.com/is/image/mcdonalds/About_Our_Food_Hero_1260x560_Desktop:hero-desktop?resmode=sharp2" alt="">
        </div>

        <div class="col-md-7 p-3 d-flex flex-column">

            <div class="navbar-wrapper">
                <NavbarComponent />
            </div>

            <JumboTron />

        </div>
    </div>
</div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import JumboTron from '@/components/Jumbotron.vue';

export default {
    name: 'AboutMeView',
    components: {
        NavbarComponent,
        JumboTron
    }
};
</script>
