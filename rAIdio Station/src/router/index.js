import {createRouter, createWebHistory} from "vue-router"
import Home from "../views/Home.vue"
import Radio from "../views/Radio.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/rAIdio",
            name: "rAIdio",
            component: Radio
        }
    ]
})

export default router