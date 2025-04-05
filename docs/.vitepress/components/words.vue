<template>
  <div class="words-container">
    <slot/>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.words-container {
  margin: 5px 0;
  display: flex;
  gap: 10px;
  :deep(div) {
    font-style: italic;
    color: black;
    background-color: gold;
    padding: 5px 10px;
    border-radius: 10px;
    white-space: pre;
    b {
      color: #aa1111;
    }
  }

}
</style>