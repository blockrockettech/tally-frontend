<template>
    <div class="container">
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
        background-color: #f6f6f6;
    }

    #mobile-view {
        width: 100%;
        height: 100%;
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
    }
</style>
