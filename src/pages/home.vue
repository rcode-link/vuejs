<template>
  <Wrapper title="Home">
    <div class="content card"> Welcome to my site. Click
      <router-link :to="{name:'post.index'}">here</router-link>
      to see posts
    </div>
  </Wrapper>
</template>

<script>
import Wrapper from "../components/Wrapper.vue";

export default {
  name: "home",
  components: {Wrapper}
}
</script>

<style scoped>
.content {
  text-align: center;
  margin-top: 5rem;
  padding: 1rem;
}
</style>