<template>
  <span class="word-container">
    <slot />
  </span>
</template>

<script setup></script>
<style lang="scss" scoped>
.word-container {
  margin: 2px 2px;
  font-style: italic;
  background-color: gold;
  padding: 5px 10px;
  border-radius: 10px;
}
</style>
