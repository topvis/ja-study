<template>
  <span class="word-container">
    <slot />
  </span>
</template>

<script setup></script>

<style lang="scss" scoped>
.word-container {
  margin: 2px 2px;
  // display: grid;
  // place-items: center;
  // gap: 10px;
  // align-items: center;
  // :deep(div) {
  font-style: italic;
  //   color: black;
  background-color: gold;
  padding: 5px 10px;
  border-radius: 10px;
  //   white-space: pre;
  //   b {
  //     color: #aa1111;
  //   }
  // }
}
</style>
