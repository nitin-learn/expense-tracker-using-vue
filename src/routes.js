import { createRouter, createWebHashHistory } from "vue-router";
import HeaderVue from "./components/Header.vue";
import AppVue from "./App.vue";

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: AppVue},
        {path: '/header', component: HeaderVue}
    ]

});

export default router;


