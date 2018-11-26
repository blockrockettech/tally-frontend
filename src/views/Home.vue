<template>
    <div>
        <h2>Hello {{ username }}</h2>
        <code class="small">{{ publicKey | truncate(8) }}</code>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex';

    export default {
        name: 'home',
        components: {},
        data () {
            return {
                form: {
                    username: '',
                    password: ''
                },
                show: true
            };
        },
        computed: {
            ...mapState(['username', 'publicKey'])
        },
        methods: {

        }
    };
</script>

<style lang="scss">

</style>
