<template>
  <Teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="modal-backdrop" @click="value = false">
        <div class="modal-wrapper" @click.stop>
          <div style="text-align: right">
            <button @click="value=false">X</button>
          </div>
          <div v-if="$slots.header" class="modal-header">
            <slot name="header"></slot>
          </div>
          <div class="modal-content">
            <slot></slot>
          </div>
          <div v-if="$slots.actions" class="modal-actions">
            <slot name="actions"></slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    modelValue: {
      type: Boolean,
      required: true
    },
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
<style scoped>
.modal-backdrop {
  background-color: rgba(0,0,0, .6);
  z-index: 9998;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  background-color: #333333;
  box-shadow: 0 0 16px black;
  width: 100%;
  height: 98vh;
  padding: 8px;
  transition: all 0.3s ease;
}

.modal-header {
  text-align: center;
}

.modal-content {
  margin: 12px 0;
}

.modal-actions {
  text-align: right;
}

/* SMALL DEVICES */
@media only screen and (min-width: 600px) {

}

/* MEDIUM DEVICES */
@media only screen and (min-width: 768px) {
  .modal-wrapper {
    box-shadow: 0 0 16px black;
    border-radius: 4px;
    width: 80%;
    height: unset;
    min-height: 250px;
  }
}

/* LARGE DEVICES */
@media only screen and (min-width: 992px) {
  .modal-wrapper {
    box-shadow: 0 0 16px black;
    border-radius: 4px;
    width: 600px;
    height: unset;
    min-height: 250px;
  }
}

/* EXTRA LARGE DEVICES */
@media only screen and (min-width: 1200px) {
  .modal-wrapper {
    box-shadow: 0 0 16px black;
    border-radius: 4px;
    width: 600px;
    height: unset;
    min-height: 250px;
  }
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>