<template>
    <div>
        <form class="form-signin" novalidate @submit="onSubmit" v-if="show">
            <header class="text-center mt-5">
                <router-link to="/">
                    <img class="mb-4" src="../assets/odin-Hires-icon.png" alt="" width="72" height="72">
                </router-link>
            </header>
            <h1 class="h3 mb-3 font-weight-normal">Register</h1>
            <label for="inputEmail" class="sr-only">Username</label>
            <input type="email" id="inputEmail" class="form-control" placeholder="Username" required="" autofocus="" v-model="form.username">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="" v-model="form.password">
            <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            <p class="mt-4 text-center">
                <router-link to="/signin" class="">Sign in?</router-link>
            </p>
        </form>

        <div v-else>
            Registering {{ form.username }}
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex';

    export default {
        name: 'register',
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
                this.show = false;
                this.$store.dispatch('register', this.form.username)
                    .then(() => this.$router.push('/home'))
                    .catch((ex) => {
                        console.log(ex);
                    });
            }
        }
    };
</script>

<style lang="scss">

</style>
