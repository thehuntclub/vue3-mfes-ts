<template>
    <v-app-bar :elevation="2">
        <template v-slot:prepend>
            <v-app-bar-nav-icon @click="toggleNav"></v-app-bar-nav-icon>
        </template>
    
        <v-app-bar-title>My Prepare And Reaction App {{ store.currentCount }}</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer v-if="showNav" class="h-75">
    <!-- <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
    <v-divider></v-divider> -->
    <v-list-item @click="redirect('/')">
        <RouterLink to="/">Home</RouterLink>
    </v-list-item>
    <v-list-item @click="redirect('/prepare')">
        <RouterLink to="/prepare">Prepare</RouterLink>
    </v-list-item>
    <v-list-item @click="redirect('/post')">
        <RouterLink to="/post">Post</RouterLink>
    </v-list-item>
    <!-- <v-list-item link title="" @click="redirect('/')">
        <RouterLink to="/">Home</RouterLink>
    </v-list-item>
    <v-list-item link title="List Item 2" @click="redirect('/prepare')">
        <RouterLink to="/prepare">Prepare</RouterLink>
    </v-list-item> -->
    <!-- <v-list-item link title="List Item 3" @click="redirect('/prepare')"></v-list-item> -->
    </v-navigation-drawer>
</template>

<script lang="ts" setup>
  import { useCounterStore } from './store'
  const store = useCounterStore()
</script>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { RouterLink } from 'vue-router';    

    export default defineComponent({
        data() {
            return {
                showNav: true
            };
        },
        methods: {
            toggleNav() {
                this.showNav = !this.showNav
            },
            redirect(path) {
                this.showNav = false
            },
        }
    })
    
 
</script>