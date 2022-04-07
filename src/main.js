import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import Home from '@/components/Home.vue';
import About from '@/components/About.vue';
import Design from '@/components/Design.vue';


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'home', component: Home,}, 
  { path: '/about', name: 'about', component: About },
 { path: '/design', name: 'design', component: Design }
];

const router = new VueRouter({
  mode: 'history',
  routes
});
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
