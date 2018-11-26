<template>
    <form class="form-signin" novalidate @submit="onSubmit" v-if="show">
        <header class="text-center mt-5">
            <router-link to="/">
                <img class="mb-4" src="../assets/odin-Hires-icon.png" alt="" width="72" height="72">
            </router-link>
        </header>
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only">Username</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Username" required="" autofocus="" v-model="form.username">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" v-model="form.password">
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-4 text-center">or
            <router-link to="/register" class="">Register?</router-link>
        </p>
    </form>

    <div v-else>
        Signing in {{ form.username }}
    </div>
</template>

<script>
    import { mapState } from 'vuex';

    export default {
        name: 'signin',
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
            ...mapState([])
        },
        methods: {
            onSubmit (evt) {
                evt.preventDefault();
                if (this.form.username) {
                    this.show  = false;
                    this.$store.dispatch('signin', this.form.username)
                        .then(() => this.$router.push('/home'))
                        .catch((ex) => {
                            console.log(ex);
                        });
                }
            }
        }
    };
</script>

<style lang="scss">

</style>
