import Vue from 'vue';
import Router from 'vue-router';

import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

import Canvas from '@/views/Canvas';


Vue.use(VueMaterial);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Canvas',
      component: Canvas,
    },
  ],
});
