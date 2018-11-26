<template>
    <div>
        <header-bar></header-bar>
        <h4>Create</h4>

        <form class="form-create mt-5" novalidate @submit="onSubmit" v-if="show">
            <label for="inputCode" class="sr-only">Code</label>
            <input type="text" maxlength="4" id="inputCode" class="form-control" placeholder="Code" required="" autofocus="" v-model="form.code" style="text-transform:uppercase">
            <button class="btn btn-lg btn-primary btn-block" type="submit">Create</button>
        </form>

        <div v-else>
            Creating <span class="badge badge-primary">{{ form.code }}</span>
        </div>


        <footer-tabs></footer-tabs>
    </div>
</template>

<script>
    import { mapGetters, mapState, mapActions } from 'vuex';
    import FooterTabs from '../components/FooterTabs';
    import HeaderBar from '../components/HeaderBar';

    export default {
        name: 'create-asset',
        components: {HeaderBar, FooterTabs},
        computed: {
            ...mapState(['username', 'publicKey', 'assets'])
        },
        data () {
            return {
                form: {
                    code: ''
                },
                show: true
            };
        },
        methods: {
            onSubmit (evt) {
                evt.preventDefault();
                if (this.form.code) {
                    this.show  = false;
                    this.form.code =  this.form.code.toUpperCase();
                    console.log(this.form.code);
                    this.$store.dispatch('create', this.form.code)
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
    .form-create input[type="text"] {
        margin-bottom: 10px;
    }

    .form-create .form-control {
        position: relative;
        box-sizing: border-box;
        height: auto;
        padding: 10px;
        font-size: 16px;
    }
</style>
