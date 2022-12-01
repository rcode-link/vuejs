<template>
  <router-link class="shadow" tag="div" :to="{ name: 'post.details', params:{id: props.post.id} }">
    <h1>{{ props.post.title }}</h1>
    <p>{{ props.post.body }}</p>
    <p>{{ user.name }}</p>
  </router-link>
</template>
<script setup>
import {defineProps, inject, ref, watchEffect} from 'vue';

const users = inject('users');
const props = defineProps({
  post: {
    title: null,
    body: null,
    userId: null,
  }
})

const user = ref({
  name: ''
});

watchEffect(() => {
  users.then(response => {
    user.value = response.find(obj => obj.id === props.post.userId)
  })
})
</script>
<style scoped>
a {
  text-decoration: none;
  display: block;
  color: black;
  background: white;
  margin-bottom: 0.5rem;
  padding: 1rem;
  cursor: pointer;
}

a:hover {
  box-shadow: none;
}
</style>