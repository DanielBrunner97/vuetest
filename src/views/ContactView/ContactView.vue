<template>
<div class="min-vh-100 d-flex align-items-center">
    <div class="row w-100">
        <div class="col-md-6">
        </div>
        <div class="col-md-6">
            <GetInTouchForm/>
        </div>
    </div>
</div>
</template>


<script>
import GetInTouchForm from '@/views/ContactView/fragments/GetInTouchForm.vue';


export default {
    name: 'ContactView',
    components: {
        GetInTouchForm
    },
};
</script>

<style lang="scss" scoped>


</style>
