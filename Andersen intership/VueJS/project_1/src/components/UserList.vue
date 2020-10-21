<template>
    <div class="user_list">
        <h1>Users</h1>
        <ul>
            <UserListItem v-for="item in users"
                          v-bind:key="item.id"
                          v-bind:user="item"
                          v-on:remove="users.splice(index, 1)">
                {{item.id}} -
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
                        name: 'Alica',
                        imgSrc: "https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-04/gtjg.jpg?itok=XMcF9xCq"
                    },
                    {
                        id: 2,
                        name: 'Bob',
                        imgSrc: "https://static.probusiness.io/n/03/d/38097027_439276526579800_2735888197547458560_n.jpg"
                    },
                    {
                        id: 3,
                        name: 'Taisiia',
                        imgSrc: "https://simple-fauna.ru/wp-content/uploads/2017/10/obyknovennaya-belka.jpg"
                    }
                ]
            }
        }
    }
</script>

<style scoped>
.user_list {
    width: 60%;
    height: 75vh;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
}
</style>