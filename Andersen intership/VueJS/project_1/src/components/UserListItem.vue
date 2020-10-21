<template>
    <li class="user_item">
        {{user.id}}
        {{user.name}}
        <button v-on:click="$emit('remove')">Удалить</button>
    </li>
</template>

<script>
    export default {
        name: "UserListItem",
        props: {
            user: Object
        }
    }
</script>

<style scoped>
    .user_item {
        font-size: 20px;
        width: 200px;
        height: 40px;
    }
</style>