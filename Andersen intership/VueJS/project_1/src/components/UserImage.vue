<template>
    <div>
        <img v-bind:[attribute]="imgSrc">
    </div>
</template>

<script>
    export default {
        name: "UserImage",
        props: {
            imgSrc: String
        },
        data: function() {
            return {
                attribute: "src"
            }
        }
    }
</script>

<style scoped>
img {
    height: 100px;
}
</style>