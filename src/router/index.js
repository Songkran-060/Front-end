import { createRouter, createWebHistory } from 'vue-router'
import Logitech from '../views/Logitech.vue'
import Nubwo from '../views/Nubwo.vue'
import Razer from '../views/Razer.vue'
import Fantech from '../views/Fantech.vue'
import HyperX from '../views/HyperX.vue'
import Steelseries from '../views/Steelseries.vue'
import Team from '../views/Team.vue'
import Add from '../views/Add.vue'
import EditProduct from '../views/EditProduct.vue'


const routes = [{
        path: '/',
        name: 'Logitech',
        component: Logitech
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
        path: '/Nubwo',
        name: 'Nubwo',
        component: Nubwo
    },
    {
        path: '/Razer',
        name: 'Razer',
        component: Razer
    },
    {
        path: '/Fantech',
        name: '/Fantech',
        component: Fantech
    },
    {
        path: '/HyperX',
        name: '/HyperX',
        component: HyperX
    },
    {
        path: '/Steelseries',
        name: '/Steelseries',
        component: Steelseries
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
    {
        path: '/EditProduct',
        name: '/EditProduct',
        component: EditProduct
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router