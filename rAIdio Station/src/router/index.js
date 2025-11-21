import {createRouter, createWebHistory} from "vue-router"
import Home from "../views/Home.vue"
import Radio from "../views/Radio.vue"
import Podcasts from "../views/Podcasts.vue"
import Gallery from "../views/Gallery.vue"
import Engineering from "../views/Engineering.vue"
import Feedback from "../views/Feedback.vue"
import About from "../views/About.vue"
import Login from "../views/Login.vue"
import Profile from "../views/Profile.vue"
import EditProfile from "../views/EditProfile.vue"
import Signup from "../views/Signup.vue"
import Research from "../views/Research.vue"
import GeneralNews from "../views/GeneralNews.vue"
import AcademicCampusLife from "../views/AcademicCampusLife.vue"
import LocalNews from "../views/LocalNews.vue"
import OwlSports from "../views/OwlSports.vue"
import PlayMode from "../views/PlayMode.vue"
import Archive9 from "../views/Archive9.vue"
import TechDecoded from "../views/TechDecoded.vue"
import DebateDen from "../views/DebateDen.vue"
import FriendlyExploits from "../views/FriendlyExploits.vue"

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
            path: "/gallery",
            name: "gallery",
            component: Gallery
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
            component: Engineering
        },
        {
            path: "/generalnews",
            name: "generalnews",
            component: GeneralNews
        },
        {
            path: "/academicCampusLife",
            name: "academicCampusLife",
            component: AcademicCampusLife
        },
        {
            path: "/localnews",
            name: "localnews",
            component: LocalNews
        },
        {
            path: "/owlsports",
            name: "owlsports",
            component: OwlSports
        },
        {
            path: "/research",
            name: "research",
            component: Research
        },
        {
            path: "/playmode",
            name: "playmode",
            component: PlayMode
        },
        {
            path: "/archive9",
            name: "archive9",
            component: Archive9
        },
        {
            path: "/techdecoded",
            name: "techdecoded",
            component: TechDecoded
        },
        {
            path: "/debateden",
            name: "debateden",
            component: DebateDen
        },
        {
            path: "/friendlyexploits",
            name: "friendlyexploits",
            component: FriendlyExploits
        }
    ]
})

export default router