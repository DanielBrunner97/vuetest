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
                <button class="btn border-0" :class="{ 'custom-active-link': currentPage === 'aboutme' }"
                    @click="navigateTo('aboutme')" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
                    <h2 class="grow-on-hover" :class="{ 'custom-active-link': currentPage === 'aboutme' }">
                        ABOUT ME
                    </h2>
                </button>
            </div>

            <div class="col-md-3">
                <button class="btn border-0" :class="{ 'custom-active-link': currentPage === 'work' }" @click="navigateTo('work')">
                    <h2 class="grow-on-hover" :class="{ 'custom-active-link': currentPage === 'work' }">
                        WORK
                    </h2>
                </button>
            </div>

            <div class="col-md-3 ">
                <button class="btn border-0 " :class="{ 'custom-active-link': currentPage === 'contacts' }" @click="navigateTo('contacts')">
                    <h2 class="grow-on-hover" :class="{ 'custom-active-link': currentPage === 'contacts' }">
                        CONTACTS
                    </h2>
                </button>
            </div>
        </div>
    </div>
</div>
</template>


<script>
import {
    ref
} from 'vue';
import {
    useRouter
} from 'vue-router';

export default {
    name: 'NavbarComponent',
    setup() {
        const currentPage = ref('aboutme');
        const isHovered = ref(false);
        const router = useRouter();

        const navigateTo = (page) => {
            currentPage.value = page;
            router.push(`/${page}`); // Navigate to the corresponding route
        };

        return {
            isHovered,
            currentPage,
            navigateTo,
        };
    },
};
</script>
