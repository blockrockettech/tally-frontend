<template>
    <footer>
        <div class="row">
            <div class="col">
                <router-link to="/home" class="">Home</router-link>
            </div>
            <div class="col">
                <router-link to="/assets" class="">Assets</router-link>
            </div>
            <div class="col">
                <router-link to="/create" class="">Create</router-link>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'footer-tabs',
        components: {},
        computed: {},
        methods: {}
    };
</script>

<style lang="scss">
</style>
