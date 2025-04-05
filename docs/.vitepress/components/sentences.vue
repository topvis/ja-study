<template>
  <div class="sentences-container">
    <slot></slot>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.sentences-container {
  margin: 5px 0;
  padding: 10px 10px 10px 20px;
  border-radius: 10px;
  color: black;
  background-color: #d7ede7;
  font-style: italic;

  ::v-deep > div {
    display: flex;
    align-items: center;
    padding: 3px 0;

    b {
      color: #aa1111;
    }

    &::before {
      content: '•';
      margin-right: 10px;
      font-size: 16px;
    }
  }
}
</style>