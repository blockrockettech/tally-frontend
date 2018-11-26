<template>
    <div>
        <header-bar></header-bar>
        <h4>Home</h4>

        <div v-if="assets" class="mt-3 text-left">
            <ul>
                <li v-for="asset in assets" :key="asset.asset">
                    <span class="badge badge-primary">{{ asset.asset }}</span>
                </li>
            </ul>
        </div>

        <footer-tabs></footer-tabs>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex';
    import FooterTabs from '../components/FooterTabs';
    import HeaderBar from '../components/HeaderBar';

    export default {
        name: 'home',
        components: {HeaderBar, FooterTabs},
        computed: {
            ...mapState(['username', 'publicKey', 'assets'])
        },
        methods: {}
    };
</script>

<style lang="scss">

</style>
