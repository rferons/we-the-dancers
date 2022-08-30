<template>
  <button v-bind="$attrs">
    <slot></slot>
  </button>
</template>
<style>
button {
  font-family: 'Chakra Petch', sans-serif;
  background-color: aqua;
  padding: 10px 15px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #02ecec;
}
</style>