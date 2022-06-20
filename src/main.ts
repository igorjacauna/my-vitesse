import { createApp } from 'vue';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import { createHead } from '@vueuse/head';
import { createRouter, createWebHistory } from 'vue-router';

// windicss layers
import 'virtual:windi-base.css';
import 'virtual:windi-components.css';
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css';
// windicss devtools support (dev only)
import 'virtual:windi-devtools';

import App from './App.vue';

const routes = setupLayouts(generatedRoutes);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const head = createHead();

const app = createApp(App);

app.use(head);
app.use(router);

app.mount('#app');
