<template>
  <div class="container">
    <v-layout>
    <Header />
    <!-- <Prepare /> -->
    <!-- <div>
      <router-view></router-view>
    </div> -->
      <v-main class="d-flex align-center justify-center" style="min-height: 300px;">
        <router-view></router-view>
      </v-main>
    <!-- <Home /> -->
    <!-- <div class="text-3xl bg-blue-900 text-white p-5 flex">
      <div class="font-bold mr-5">
        Header
      </div>
    </div> -->
    <!-- <div>Name: host</div>
    <div>Framework: vue3</div>
    <div>Language: TypeScript</div>
    <div>CSS: Empty CSS</div> -->
    <Footer />
    </v-layout>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'

  import Header from "./Header.vue";
  import Home from "./Home.vue";
  import Footer from "./Footer.vue";
  import Prepare from "prepare/Prepare";
  import Post from "post/Post";

  export default defineComponent({
    components: {
      Header,
      Home,
      Footer,
      Prepare,
      Post,
    }
  });
</script>
