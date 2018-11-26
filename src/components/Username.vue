<template>
    <div>
        <h2 class="text-left text-primary">{{ username }}<span class="pl-3 text-muted publicKey">[{{ publicKey | truncate(6) }}]</span></h2>
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'username',
        components: {},
        computed: {
            ...mapState(['username', 'publicKey'])
        },
        methods: {}
    };
</script>

<style lang="scss">
    .publicKey {
        font-size: 0.75rem;
    }
</style>
