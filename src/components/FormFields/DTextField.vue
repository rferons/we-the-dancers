<template>
  <div class="input-container">
    <input type="text"
           v-bind="$attrs"
           :value="modelValue"
           :placeholder="placeholder"
           @input="$emit('update:modelValue', $event.target.value)" />
  </div>
</template>

<script>
export default {
  props: ['modelValue', 'placeholder'],
  emits: ['update:modelValue']
}
</script>

<style scoped>
.input-container {
  display: flex;
}

input {
  flex-grow: 1;
  border-radius: 4px;
  padding: 8px;
}
</style>