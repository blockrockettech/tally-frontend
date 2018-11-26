import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

/* global dcodeIO */

Vue.use(Vuex);

const API_URL = 'http://localhost:5000/tally-eab26/us-central1';

const api = axios.create({
    baseURL: `${API_URL}/app/`,
});

export default new Vuex.Store({
    state: {
        username: null,
        publicKey: null
    },
    mutations: {
        ['set-username-publickey'] (state, {username, publicKey}) {
            state.username = username;
            state.publicKey = publicKey;
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
            }
        }
    },
    getters: {}
});
