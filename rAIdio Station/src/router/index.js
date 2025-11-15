import {createRouter, createWebHistory} from "vue-router"
import Home from "../views/Home.vue"
import Radio from "../views/Radio.vue"
import Podcasts from "../views/Podcasts.vue"
import EngineeringRadio from "../views/EngineeringRadio.vue"
import Feedback from "../views/Feedback.vue"
import About from "../views/About.vue"
import Login from "../views/Login.vue"
import Profile from "../views/Profile.vue"
import EditProfile from "../views/EditProfile.vue"
import Signup from "../views/Signup.vue"

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
        },
        {
            path: "/podcasts",
            name: "podcasts",
            component: Podcasts
        },
        {
            path: "/feedback",
            name: "feedback",
            component: Feedback
        },
        {
            path: "/about",
            name: "about",
            component: About
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/profile",
            name: "profile",
            component: Profile
        },
        {
            path: "/editprofile",
            name: "editprofile",
            component: EditProfile
        },
        {
            path: "/signup",
            name: "signup",
            component: Signup
        },
        {
            path: "/engineeringradio",
            name: "engineeringradio",
            component: EngineeringRadio
        }
    ]
})

export default router