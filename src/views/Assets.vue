<template>
    <div>
        <header-bar></header-bar>
        <h4>Assets</h4>

        <div v-if="publicAssets" class="mt-3 text-left">
            <ul>
                <li v-for="asset in publicAssets" :key="asset.asset">
                    <span class="badge badge-primary">{{ asset.asset }}</span>
                    <span class="float-right">{{ asset.name }}</span>
                </li>
            </ul>
        </div>

        <footer-tabs></footer-tabs>
    </div>
</template>

<script>
    import { mapState } from 'vuex';
    import HeaderBar from '../components/HeaderBar';
    import FooterTabs from '../components/FooterTabs';

    export default {
        name: 'assets',
        components: {FooterTabs, HeaderBar},
        computed: {
            ...mapState(['username', 'publicKey', 'publicAssets'])
        },
        methods: {

        }
    };
</script>

<style lang="scss">

</style>
