import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About';
import Register from './views/Register';
import SignIn from './views/SignIn';
import Home from './views/Home';
import Assets from './views/Assets';
import CreateAsset from './views/CreateAsset';

Vue.use(Router);

let router =  new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'signin',
            component: SignIn
        },
        {
            path: '/signin',
            name: 'signin',
            component: SignIn
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/assets',
            name: 'assets',
            component: Assets
        },
        {
            path: '/create',
            name: 'create',
            component: CreateAsset
        }
    ]
});

export default router;
