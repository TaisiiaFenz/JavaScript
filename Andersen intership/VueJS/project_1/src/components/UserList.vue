<template>
    <div class="user_list">
        <h1>Users</h1>
        <ul>
            <UserListItem v-for="item in users"
                          v-bind:key="item.id"
                          v-bind:user="item"
                          v-on:remove="users.splice(index, 1)">
            </UserListItem>
        </ul>
    </div>
</template>

<script>
    import UserListItem from "./UserListItem";
    export default {
        name: "UserList",
        components: {UserListItem},
        data: function() {
            return {
                users: [
                    {
                        id: 1,
                        name: 'Alica'
                    },
                    {
                        id: 2,
                        name: 'Bob'
                    },
                    {
                        id: 3,
                        name: 'Taisiia'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.user_list {
    width: 60%;
    height: 50vh;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}
</style>