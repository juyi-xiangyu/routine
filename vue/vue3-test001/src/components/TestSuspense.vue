<!--
 * @Description: 
-->
<template>
  <div>{{ title }}</div>
</template>

<script setup>
import { ref } from 'vue';
const title = ref('');
const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
const data = await response.json();
title.value = data.title;
console.log(data);
</script>