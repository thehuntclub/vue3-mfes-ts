<template>
    <!-- <v-layout> -->
        <div class="pt-0 text-center flex-column d-flex border-md border-info">
            I'm the home page div
        </div>
        <v-btn class="text-primary" @click="store.increment()">
            Count
        </v-btn>
        <!-- <v-main class="pt-0 text-center flex-column d-flex border-md border-info" style="min-height: 300px; min-width: 50em;">
            I'm the home page
        </v-main>
    </v-layout> -->
</template>

<script lang="ts" setup>
  import { useCounterStore } from './store'
  const store = useCounterStore()
</script>