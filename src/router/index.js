import Vue from 'vue';
import Router from 'vue-router';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import Canvas from '@/views/Canvas';
import Networks from '@/views/Networks';


Vue.use(VueMaterial);
Vue.use(Router);

export default new Router({
  modes: 'history',
  routes: [
    {
      path: '/',
      name: 'Canvas',
      component: Canvas,
    },
    {
      path: '/networks',
      name: 'Networks',
      component: Networks,
    },
  ],
});
