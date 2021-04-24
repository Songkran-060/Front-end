import { createRouter, createWebHistory } from 'vue-router'
import GamingAccessories from '../views/GamingAccessories.vue'
import GamingChairs from '../views/GamingChairs.vue'
import GamingController from '../views/GamingController.vue'
import GamingHeadsets from '../views/GamingHeadsets.vue'
import GamingKeyboards from '../views/GamingKeyboards.vue'
import GamingMice from '../views/GamingMice.vue'
import Team from '../views/Team.vue'
import Add from '../views/Add.vue'


const routes = [{
        path: '/',
        name: 'GamingAccessories',
        component: GamingAccessories
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/GamingChairs',
        name: 'GamingChairs',
        component: GamingChairs
    },
    {
        path: '/GamingController',
        name: 'GamingController',
        component: GamingController
    },
    {
        path: '/GamingHeadsets',
        name: '/GamingHeadsets',
        component: GamingHeadsets
    },
    {
        path: '/GamingKeyboards',
        name: '/GamingKeyboards',
        component: GamingKeyboards
    },
    {
        path: '/GamingMice',
        name: '/GamingMice',
        component: GamingMice
    },
    {
        path: '/Team',
        name: '/Team',
        component: Team
    },
    {
        path: '/Add',
        name: '/Add',
        component: Add
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router