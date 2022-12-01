<template>
  <input :value="value" v-on:keyup="keyUp"
         :class="cssClass + ' shadow' "
         :placeholder="placeholder"/>
</template>

<script setup>
import {defineProps} from 'vue';

const emit = defineEmits(['update:value'])
const {value, placeholder, cssClass} = defineProps({
  value: '',
  placeholder: '',
  cssClass: ''
})

function keyUp(e) {
  emit('update:value', e.target.value);
}

</script>

<style scoped>
input {
  padding: .5rem 1rem;
  display: flex;
  border: none;
}
</style>