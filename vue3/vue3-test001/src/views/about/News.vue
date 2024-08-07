<!--
 * @Description: 
-->
<template>
  <h2>news</h2>
  <div class="transition-box">
    <button @click="show = !show">Toggle</button>
    <Transition :duration="550">
      <div v-if="show" class="outer">
        <div class="inner">hello</div>
      </div>
    </Transition>
  </div>
  <hr />
  <div class="transitionGroup-box">
    <button @click="insert">insert</button>
    <button @click="reset">reset</button>
    <button @click="shuffle">shuffle</button>
    <TransitionGroup name="list" tag="ul" class="container">
      <li v-for="i in items" :key="i" class="items">
        {{ i }}
        <button @click="remove(i)">x</button>
      </li>
    </TransitionGroup>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { shuffle as _shuffle } from 'lodash-es';
const show = ref<boolean>(false);
const getInitialItems = () => [1, 2, 3, 4, 5];
const items = ref(getInitialItems());
let id = items.value.length + 1;

function insert() {
  const i = Math.round(Math.random() * items.value.length);
  items.value.splice(i, 0, id++);
}

function reset() {
  items.value = getInitialItems();
  id = items.value.length + 1;
}

function shuffle() { 
  items.value = _shuffle(items.value);
}

function remove(item: number) {
  const i = items.value.indexOf(item);
  if (i > -1) {
    items.value.splice(i, 1)
  }
}
</script>

<style lang="scss">
.transition-box {
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
}
.transitionGroup-box {
  .container {
    position: relative;
    padding: 0;
    list-style-type: none;
      // 1. 声明过渡效果
      .list-move,
      .list-enter-active,
      .list-leave-active {
        transition: all .5s cubic-bezier(.55, 0, 0.1, 1);
      }
      // 2. 声明进入和离开的状态
      .list-enter-from,
      .list-leave-to {
        opacity: 0;
        transform: scaleY(0.01) translate(30px 0);
      }
      // 3. 确保离开的项目被移除出了布局溜，以便正确的计算移动时的动画效果
      .list-leave-active {
        position: absolute;
      }
  }
  .items {
    width: 100%;
    height: 30px;
    background-color: #f3f3f3;
    border: 1px solid #666;
    box-sizing: border-box;
  }
}
</style>