<template>
    <div>
        <h4>Assets</h4>
        <p>{{ username }}<br/><code class="small">{{ publicKey | truncate(8) }}</code></p>

        <div v-if="publicAssets" class="mt-3 text-left">
            <ul>
                <li v-for="asset in publicAssets" :key="asset.asset">
                    <span class="badge badge-primary">{{ asset.asset }}</span>
                    <span class="float-right">{{ asset.name }}</span>
                </li>
            </ul>
        </div>

        <footer>
            <div class="row">
                <div class="col">
                    <router-link to="/home" class="">Home</router-link>
                </div>
                <div class="col">
                    <router-link to="/assets" class="">Assets</router-link>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex';

    export default {
        name: 'assets',
        components: {},
        computed: {
            ...mapState(['username', 'publicKey', 'publicAssets'])
        },
        methods: {

        }
    };
</script>

<style lang="scss">

</style>
