import Vue from 'vue';
import VueRouter from 'vue-router';

//Fİrebase
import {
    firebaseApp
} from './firebaseApp';

//Components
import App from './components/App.vue';
import Dashboard from './components/Dashboard.vue';
import SignIn from './components/Signin.vue';
import SignUp from './components/Signup.vue';

//Store
import store from './store';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [{
            path: '/dashboard',
            component: Dashboard
        },
        {
            path: '/signin',
            component: SignIn
        },
        {
            path: '/signup',
            component: SignUp
        },
    ]

});

firebaseApp.auth().onAuthStateChanged(user => {
    if (user) {
        store.dispatch('signIn', user);
        router.push('/dashboard');
    } else {
        router.replace('/signin');
    }
});

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});