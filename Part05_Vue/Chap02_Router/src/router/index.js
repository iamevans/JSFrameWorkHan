
import { createWebHistory, createRouter } from 'vue-router';

import A01Home from './../components/A01.Home.vue';
import A02About from './../components/A02.About.vue';
import A03Params from './../components/A03.Params.vue';
import A04Child from './../components/A04.Child.vue';
import Profile from './../components/childComponent/Profile.vue';
import UserInfo from './../components/childComponent/UserInfo.vue';
import A05NotFound from './../components/A05.NotFound.vue';

const routes = [
    { path: '/',                        redirect: '/home'},
    { path: '/home',                    component: A01Home},
    { path: '/about/:id/data/:name',    component: A02About,    props: true},
    { path: '/param/:id',               component: A03Params},
    { path: '/child',                   component: A04Child, 
        children: [
            { path: '/child',           component: Profile},
            { path: '/child/userInfo',  component: UserInfo}
        ]
    },
    { path: '/:catchAll(.*)',           component: A05NotFound}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;