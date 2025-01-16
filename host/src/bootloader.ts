// import { createApp } from "vue";

// import "./index.css";

// import App from "./App.vue";

// createApp(App).mount("#app");

import { createApp } from "vue";
import * as VueRouter from "vue-router";

import "./index.css";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
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

const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
    },
    theme: {
      defaultTheme: 'dark'
    },
})

createApp(App).use(router).use(vuetify).mount("#app");
