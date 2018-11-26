import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const API_URL = 'http://localhost:5000/tally-eab26/us-central1';

const api = axios.create({
    baseURL: `${API_URL}/app/`,
});

export default new Vuex.Store({
    state: {
        username: null,
        publicKey: null,
        assets: null,
        publicAssets: null,
    },
    mutations: {
        ['set-username-publickey'] (state, {username, publicKey}) {
            state.username = username;
            state.publicKey = publicKey;
        },
        ['set-assets'] (state, assets) {
            state.assets = assets;
        },
        ['set-all-assets'] (state, publicAssets) {
            state.publicAssets = publicAssets;
        }
    },
    actions: {
        async ['register'] ({commit, dispatch, state, rootState}, username) {
            try {
                console.log(`register ${username}`);

            } catch (ex) {
                console.error(ex);
            }
        },
        async ['signin'] ({commit, dispatch, state, rootState}, username) {

            console.log(`signin ${username}`);
            if (username) {
                const res = await api.get(`account?name=${username.toLowerCase()}`);
                console.log(res);

                commit('set-username-publickey', {username: res.data.name, publicKey: res.data.publicKey});

                dispatch('list-my-assets');
                dispatch('list-all-assets');
            }
        },
        async ['list-my-assets'] ({commit, dispatch, state, rootState}) {
            console.log(`list-my-assets ${state.username}`);

            if (state.username) {
                const res = await api.get(`account/assets?name=${state.username.toLowerCase()}`);
                console.log(res);

                commit('set-assets', res.data);
            }
        },
        async ['list-all-assets'] ({commit, dispatch, state, rootState}) {
            console.log(`list-all-assets`);

            if (state.username) {
                const res = await api.get(`assets`);
                console.log(res);

                commit('set-all-assets', res.data);
            }
        }
    },
    getters: {}
});
