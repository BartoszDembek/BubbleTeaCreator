import { createRouter, createWebHashHistory } from "vue-router";
import StartPage from "../views/StartPage.vue"
const routes = [
    {
        path: '/',
        name: 'Home',
        component: StartPage
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router