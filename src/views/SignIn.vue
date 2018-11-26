<template>
    <form class="form-signin" novalidate @submit="onSubmit" v-if="show">
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
