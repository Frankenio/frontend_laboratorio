import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/public/Home.vue'
import Login from '../views/auth/Login.vue'
import NotFound from '../views/NotFound.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            component: NotFound
        }
    ],
});

export default router;