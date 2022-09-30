<template>
  <div class="checkbox-container">
    <input v-model="value" type="checkbox" :id="id" />
    <label :for="id">{{ label }}</label>
  </div>
</template>
<script>
export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
    label: {
      type: String,
      required: false,
      default: ''
    },
    id: {
      type: String,
      required: false,
      default: () => `d-checkbox-${Math.floor(Math.random() * 100)}`
    }
  },
  emits: ['update:modelValue'],
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  }
}
</script>
<style>
.checkbox-container {
  display: flex;
}

input[type=checkbox] {
  accent-color: hotpink;
}
</style>