import Vue from 'vue';
import VueResource from 'vue-resource';

import _GithubRes from './github.res';

Vue.use(VueResource);

const GithubRes = new _GithubRes(Vue.resource);

const a = 2;

export { GithubRes, a };
