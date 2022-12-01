<template>
  <li class="card">
    <h4 @click="() => showMe = !showMe">&#x27A4; {{ model.name }}</h4>
    <p>by: {{ model.email }}</p>
    <p v-if="showMe" v-html="model.body"></p>
  </li>
</template>
<script setup>
import {inject, ref, watchEffect} from "vue";

const showMe = ref(false);

const {model} = defineProps({
  model: {}
});
</script>

<style scoped>

li > h4:hover {
  text-decoration: underline;

}

li > h4 {
  cursor: pointer;
}
</style>