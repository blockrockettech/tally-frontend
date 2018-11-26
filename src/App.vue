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

        footer {
            position: absolute;
            bottom: 0;
            width: 100%;
            max-width: 330px;
            margin: auto;
            height: 60px;
            line-height: 60px;
            background-color: $primary;
            color: $white;
            text-align: center;

            a {
                color: $white
            }
        }
    }
</style>
