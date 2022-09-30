<template>
  <modal v-model="value">
    <template #header>
      <h1>make a song request</h1>
    </template>

    <song-request-form v-model="songRequest" />

    <template #actions>
      <d-button :disabled="!songRequest" @click="submitSongSuggestion">play my song!</d-button>
    </template>
  </modal>
</template>
<script>
import DButton from "./DancerButton";
import Modal from "@/components/Modal";
import SongRequestForm from "@/components/Forms/SongRequestForm";

export default {
  name: "SongRequestModal",
  components: { DButton, Modal, SongRequestForm },
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
  },
  emits: ['update:modelValue'],
  data: () => ({
    songRequest: null
  }),
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    }
  },
  methods: {
    submitSongSuggestion(song) {
      console.log({ song });
    }
  }
}
</script>