<!--
 * @Description: 
-->
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Count: {{ store.count }}</p>
    <div>
      <router-link to="/about/news">News</router-link>
      <br />
      <router-link to="/about/messages">Messages</router-link>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores'

const store = useStore();

</script>

<style lang="scss" scoped>
.about {
  h1 {
    color: #aaa;
  }
}
</style>
