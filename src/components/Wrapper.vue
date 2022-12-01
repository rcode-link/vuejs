<template>
  <div class="main">
    <menu class="menu">
      <div>
        <logo>
          Q Vue
        </logo>
        <ul>
          <li>
            <router-link :to="{name: 'home'}">Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'post.index'}">Posts</router-link>
          </li>
        </ul>
      </div>
    </menu>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import {defineProps} from 'vue';

const {title} = defineProps({
  title: ''
})
import {watchEffect} from "vue";

watchEffect(() => {
  let formatted = import.meta.env.VITE_APP_NAME || '';
  if (title) {
    formatted = `${title} | ${import.meta.env.VITE_APP_NAME || ''}`
  }
  document.title = formatted;
})
</script>
<style scoped>
.menu {
  padding: 0 15px;
  margin: 0;
  box-shadow: 0 0px 16px 0 rgb(0 0 0 / 20%), 0 0px 5px 0 rgb(0 0 0 / 19%);
  background: white;
}

.menu > div {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;

}

.menu > div > logo {
  font-size: 2rem;
  text-transform: uppercase;
}

.menu > div > ul {
  margin: 0;
  padding: 0;
  display: flex;
}

.menu > div > ul > li {
  list-style: none;
  margin-left: 1rem;
}

.content {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 80px);
  padding: 1rem 1rem 0;
  max-width: 1280px;
  margin: auto;
  overflow-y: auto;
}

</style>
