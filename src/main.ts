import { createApp } from 'vue';
import generatedRoutes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import { createHead } from '@vueuse/head';
import { createRouter, createWebHistory } from 'vue-router';

import './styles/main.css';

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
