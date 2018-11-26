<template>
    <div>
        <form class="form-signin" novalidate @submit="onSubmit" v-if="show">
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
    .form-signin input[type="email"] {
        margin-bottom: -1px;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
    }

    .form-signin input[type="password"] {
        margin-bottom: 10px;
        border-top-left-radius: 0;
        border-top-right-radius: 0;
    }

    .form-signin .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
</style>
