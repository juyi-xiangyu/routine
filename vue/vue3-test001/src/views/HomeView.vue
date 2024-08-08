<!--
 * @Description: 
-->
<template>
  <div class="about">
    <h1>This is an home page</h1>
    <p>Count: {{ store.count }}</p>
    <p>Count: {{ store.doubleCount }}</p>
    <button @click="handleClick">click</button>
    <hr />
    <Suspense>
      <template #default>
        <TestSuspense />
      </template>
      <template #fallback>
        <Spinner />
      </template>
    </Suspense>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores'
import TestSuspense from '@/components/TestSuspense.vue';
import Spinner from '@/components/Spinner.vue'
const store = useStore()
const handleClick = () => { 
  store.add()
}
</script>
<style>

</style>
