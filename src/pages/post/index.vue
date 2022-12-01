<template>
  <Wrapper title="Posts">
    <Input v-model:value="search" placeholder="Search posts"/>
    <ul>
      <li v-for="(obj, key) in searchResults">
        <PostListItem :post="obj" :key="key"/>
      </li>
    </ul>

  </Wrapper>
</template>
<script setup>
import Wrapper from "../../components/Wrapper.vue";
import {computed, ref, watchEffect} from "vue";
import {fetch_posts} from "../../utils/posts.js";
import PostListItem from "../../components/post/PostListItem.vue";
import Input from '../../components/Input.vue'

const search = ref('');
const posts = ref([]);

watchEffect(async () => {
  posts.value = await fetch_posts();
})

const searchResults = computed(() => {
  if (!posts.value.length) {
    return []
  }

  return posts.value.filter(obj => {
    return obj.title.toLowerCase().includes(search.value.toLowerCase())
  })
})

</script>
<style scoped>
ul > li {
  list-style: none;
}
</style>