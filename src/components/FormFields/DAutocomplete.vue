<template>
  <div class="autocomplete-container">
    <d-text-field
        v-model="textInputValue"
        class="autocomplete-input"
        @focusin="inputFocused = true"
        @blur="inputFocused = false"
        :placeholder="placeholder"
        @input="$emit('input', $event)"
    />

    <ul v-show="showOptions" class="items-container">
      <li v-for="(item, index) in itemsFiltered" :key="index" class="autocomplete-item" @click="itemSelected(item)">
        <slot name="item" :item="item">
          <div v-html="item.name"></div>
        </slot>
      </li>
    </ul>
  </div>
</template>
<script>
import DTextField from "@/components/FormFields/DTextField";

export default {
  props: {
    modelValue: {
      type: Object,
      required: false,
      default: null
    },
    items: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: ''
    },
    returnObject: {
      type: Boolean,
      required: false,
      default: false
    },
    itemValue: {
      type: String,
      required: false,
      default: 'id'
    },
    itemName: {
      type: [String,Function],
      required: false,
      default: 'name'
    }
  },
  emits: ['update:modelValue', 'input'],
  components: { DTextField },
  data: () => ({
    textInputValue: null,
    inputFocused: false,
    showOptions: false,
  }),
  computed: {
    value: {
      get() {
        return this.modelValue
      },
      set(value) {
        this.$emit('update:modelValue', value)
      }
    },
    itemsFiltered() {
      if (!this.textInputValue) {
        return this.items;
      }

      return this.items.filter(i => i.name.toLowerCase().includes(this.textInputValue.toLowerCase()))
    }
  },
  methods: {
    itemSelected(item) {
      this.value = item;

      if (typeof this.itemName === 'function') {
        this.textInputValue = this.itemName(item)
      } else {
        this.textInputValue = item[this.itemName]
      }
    },
  },
  watch: {
    inputFocused() {
      setTimeout(() => {
        this.showOptions = this.inputFocused
      }, 250)
    }
  }
}
</script>
<style scoped>
.autocomplete-container {
  display: flex;
  flex-direction: column;
}

.items-container {
  margin-top: 0;
  padding: 0;
  background-color: #fff;
  color: #000000;
  border-radius: 4px;
  max-height: 400px;
  overflow: hidden;
  overflow-y: auto;
}

.items-container li {
  text-align: left;
  list-style: none;
  padding: 8px 8px 8px 32px;
  cursor: pointer;
  border-radius: 4px;
}

.items-container li:hover {
  background-color: #d9d9d9;
}

</style>