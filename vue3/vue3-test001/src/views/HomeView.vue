<!--
 * @Description: 
-->
<template>
  <div class="about">
    <h1>This is an home page</h1>
    <p>Count: {{ store.count }}</p>
    <p>Count: {{ store.doubleCount }}</p>
    <button @click="handleClick">click</button>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores'
const store = useStore()
const handleClick = () => { 
  store.add()
}
</script>
<style>

</style>
