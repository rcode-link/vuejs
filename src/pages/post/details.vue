<template>
  <Wrapper :key="model" :title="model.title">
    <h1 class="card">{{ model.title }}</h1>

    <div class="content card">
      <div>
        User: {{ user.name }}
      </div>
      <div v-html="model.body">

      </div>
    </div>
    <PostCommentsList/>
  </Wrapper>
</template>

<script setup>
import Wrapper from "../../components/Wrapper.vue";
import {inject, ref, watchEffect} from "vue";
import {fetch_single_post} from "../../utils/posts.js";
import {useRoute} from 'vue-router';
import PostCommentsList from "../../components/post/comments/PostCommentsList.vue";

const route = useRoute();
const users = inject('users');


const model = ref({});

const user = ref({
  name: ''
});

watchEffect(async () => {
  const data = await fetch_single_post(route.params.id);

  model.value = data;
  user.value = users.find(obj => obj.id === data.userId)
})

</script>

<style scoped>
.content {
  max-width: 25rem;
  margin: 0 auto;
}

.content > div:first-child {
  margin-bottom: 1rem;
}
</style>