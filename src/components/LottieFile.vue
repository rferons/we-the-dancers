<template>
  <lottie-player
      :src="props.src"
      background="transparent"
      speed="1"
      :style="{width: `${props.width}px`, height: `${props.height}px`}"
      loop autoplay></lottie-player>
</template>

<script setup>
  import { defineProps } from "vue";

  const props =  defineProps({
    src: String,
    width: {
      type: Number,
      required: false,
      default: 300
    },
    height: {
      type: Number,
      required: false,
      default: 300
    }
  })
</script>