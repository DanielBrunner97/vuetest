<template>
    <div class="avatar">
        <img src="@/assets/avatar.png" alt="User Avatar" class="avatar-image"/>
    </div>
</template>

<style lang="scss" scoped>
.avatar {
    background: linear-gradient(135deg, #155f3e, #33a06f, $color-primary, #42d392, #35eb9a);
    width: 350px;
    height: 350px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* Ensures the image stays within the circle */
}

.avatar-image {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Makes sure the image covers the entire container without distortion */
}
</style>

<script>
export default {
    name: 'AvatarComponent',
};
</script>
