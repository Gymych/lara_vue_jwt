import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',

    routes: [
        {
            path: '/fruits', component: () => import('./components/Fruit/Index'),
            name: 'fruit.index'
        },
        {
            path: '/login', component: () => import('./components/User/Login'),
            name: 'user.login'
        },
        {
            path: '/registration', component: () => import('./components/User/Registration'),
            name: 'user.registration'
        },
    ]
})
