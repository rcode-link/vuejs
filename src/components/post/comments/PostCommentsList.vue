<template>
  <ul>
      <PostSingleComment v-for="(obj, key) in model" :model="obj"/>
  </ul>
</template>
<script setup>

import {useRoute} from "vue-router";
import {ref, watchEffect} from "vue";
import {fetch_comments_for_post} from "../../../utils/posts.js";
import PostSingleComment from "./PostSingleComment.vue";

const {params} = useRoute();
const model = ref([]);

watchEffect(async () => {
  model.value = await fetch_comments_for_post(params.id);
});

</script>
<style scoped>
ul {
  list-style: none;
}
</style>