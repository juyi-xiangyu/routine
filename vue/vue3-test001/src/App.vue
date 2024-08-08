<!--
 * @Description: 
-->
<script setup lang="ts">
import { RouterLink, RouterView, useRouter } from 'vue-router'

// 全局导航守卫
const router = useRouter();
router.beforeEach((to, from, next) => {
  console.log('beforeEach', to, from)
  next()
})
</script>

<template>
  <div class="app-container">
    <div class="left">
      <RouterLink to="/">home</RouterLink>
      <RouterLink to="/about">about</RouterLink>
    </div>
    <div class="right">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.app-container {
  display: flex;
  justify-content: center;
  height: 100vh;
}
.left {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.left a {
  text-decoration: none;
  color: skyblue;
}
.right {
  flex: 2;
}
</style>
