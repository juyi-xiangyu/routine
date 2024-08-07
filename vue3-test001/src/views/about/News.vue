<template>
  <h2>news</h2>
  <button @click="show = !show">Toggle</button>
  <Transition :duration="550">
    <div v-if="show" class="outer">
      <div class="inner">hello</div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const show = ref < boolean > (false);
</script>

<style>
.outer {
  width: 400px;
  height: 200px;
  background-color: #bbb;
  display: flex;
  justify-content: center;
  align-items: center;
}
.inner {
  width: 300px;
  height: 150px;
  background-color: #eee;
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s ease-in-out;
}
.v-leave-active {
  transition-delay: 0.25s;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.v-enter-active .inner,
.v-leave-active .inner {
  transition: all 0.3s ease-in-out;
}
.v-enter-from .inner,
.v-leave-to .inner {
  opacity: 0;
  transform: translateX(30px);
}
.v-enter-active .inner {
  transition-delay: 0.25s;
}
</style>