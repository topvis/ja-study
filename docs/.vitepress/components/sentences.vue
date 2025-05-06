<template>
  <div class="sentences-container">
    <slot></slot>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.sentences-container {
  margin: 5px 0;
  padding: 10px 10px 10px 20px;
  border-radius: 10px;
  color: black;
  background-color: #d7ede7;
  font-style: italic;

  :deep(div) {
    padding: 3px 0;

    b {
      // color: #aa1111;
      background-color: yellow;
      margin: 0 5px;
      padding: 0 5px;
      border-radius: 5px;
      font-weight: normal;
    }
    s {
      color: red;
      margin-left: 2px;
      margin-right: 2px;
    }

    &::before {
      content: "•";
      margin-right: 10px;
      font-size: 16px;
    }
  }
}
</style>
