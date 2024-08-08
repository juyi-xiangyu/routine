<!--
 * @Description: 
-->
<template>
  <h2>Messages</h2>
  <button @click="open = true">open Modal</button>
  <Teleport to="body">
    <div v-if="open" class="modal">
      <p>Hello, i am a modal</p>
      <button @click="open = false">close</button>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref } from 'vue'; 
const open = ref < boolean > (false);

</script>

<style>
.modal {
  width: 300px;
  height: 150px;
  border-radius: 10px;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  background-color: #fff;
  box-shadow: 0px 0px 2px 2px #eee;
  z-index: 2;
}
</style>