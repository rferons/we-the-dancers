<template>
  <input type="text"
         v-bind="$attrs"
         :value="modelValue"
         @input="$emit('update:modelValue', $event.target.value)" />
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue']
}
</script>

<style scoped>
input {
  border-radius: 4px;
  padding: 8px;
}
</style>