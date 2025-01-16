<template>
  <div class="container">
    <v-layout>
      <Header />
      <Post />
      <Footer />
    </v-layout>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Header from 'host/Header';
  import Footer from 'host/Footer';
  import Post from './Post.vue';

  export default defineComponent({
    components: {
      Header,
      Footer,
      Post
    }
  });
</script>
