import Vue from 'vue';
import Router from 'vue-router';

/* views */
import Home from './views/home/Home';
import Projects from './views/projects/Projects';
import About from './views/about/About';

import CONSTANTS from './utils/constants.json';
import store from './store';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/projects',
            name: 'Projects',
            component: Projects
        },
        {
            path: '/about',
            name: 'About',
            component: About,
        }
    ],
});

router.beforeEach((to, _, next) => {
    store.commit(CONSTANTS.MUTATIONS.ROUTE_CHANGE, to);
    next();
});

export default router;
