<template>
    <li class="user_item">
        <slot>{{user.id}}</slot>
        {{user.name}}
        <UserImage v-bind:imgSrc="user.imgSrc"></UserImage>
        <button v-on:click="$emit('remove')">Удалить</button>
    </li>
</template>

<script>
    import UserImage from "./UserImage";
    export default {
        name: "UserListItem",
        components: {UserImage},
        props: {
            user: Object
        }
    }
</script>

<style scoped>
    .user_item {
        font-size: 20px;
    }
</style>