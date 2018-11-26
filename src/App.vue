<template>
    <div class="container">
        <header class="text-center mt-5">
            <router-link to="/">
                <img class="mb-4" src="./assets/odin-Hires-icon.png" alt="" width="72" height="72">
            </router-link>
        </header>
        <main id="app">
            <div id="mobile-view">
                <router-view/>
            </div>
        </main>
        <footer>
            <!--<div id="nav">-->
            <!--<router-link to="/register" class="p-3">Register</router-link>-->
            <!--&bull;-->
            <!--<router-link to="/about" class="p-3">About</router-link>-->
            <!--</div>-->
        </footer>
    </div>
</template>

<style lang="scss">

    $font-family-base: 'Avenir', Helvetica, Arial, sans-serif;

    @import '../node_modules/bootstrap/scss/bootstrap.scss';
    @import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';

    body {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        background-color: #f6f6f6;
    }

    #mobile-view {
        width: 100%;
        max-width: 330px;
        padding: 15px;
        margin: auto;
        text-align: center;

        h1 {
            text-align: center;
        }
    }

    #nav {
        padding: 30px;
        a {
            font-weight: bold;
            color: #2c3e50;
            &.router-link-exact-active {
                color: #41c0d1;
            }
        }
    }

    footer {
        text-align: center;
    }
</style>
