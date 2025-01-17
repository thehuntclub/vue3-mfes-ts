// import { createApp } from "vue";

// import "./index.css";

// import App from "./App.vue";

// createApp(App).mount("#app");

import { createApp } from "vue";
import * as VueRouter from "vue-router";
import { createPinia } from 'pinia'

import "./index.css";

// Vuetify
import 'vuetify/styles'
// import { createVuetify } from 'vuetify'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import App from "./App.vue";
import Home from "./Home.vue";
import Prepare from "prepare/Prepare";
import Post from "post/Post";

const routes = [
    { path: "/", component: Home },
    { path: "/prepare", component: Prepare },
    { path: "/post", component: Post }
  ];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
  });

// const vuetify = createVuetify({
//     components,
//     directives,
//     icons: {
//         defaultSet: 'mdi',
//     },
//     theme: {
//       defaultTheme: 'dark'
//     },
// });


const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#C0C0C0',
    surface: '#F0F0F0',
    primary: '#FF0000',
    'primary-darken-1': '#3700B3',
    secondary: '#03DAC6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00',
  },
}

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

const pinia = createPinia();

createApp(App).use(router).use(vuetify).use(pinia).mount("#app");
