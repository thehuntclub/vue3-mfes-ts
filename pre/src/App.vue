<template>
  <div class="container">
    <v-layout>
      <Header />
      <Prepare />
      <Footer />
    </v-layout>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import Header from 'host/Header';
  import Footer from 'host/Footer';
  import Prepare from './Prepare.vue';

  export default defineComponent({
    components: {
      Header,
      Footer,
      Prepare,
    }});
</script>
