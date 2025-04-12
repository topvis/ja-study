<template>
  <div class="clean-table-container">
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  columns: { type: String, default: '55px 45px 2.3fr 1.7fr' },
})


</script>

<style lang="scss">
.clean-table-container {
  display: grid;
  grid-template-columns: v-bind(columns);
  grid-auto-rows: auto;
  /* border-top: 1px solid #ccc;
  border-left: 1px solid #ccc; */
  border: 2px solid #333;
  /* Thick outer border */
  background-color: #ccc;
  gap: 1px;
  margin: 15px 0;

  &.more-columns {
    grid-template-columns: 55px 45px 1fr 1.3fr 1fr 0.7fr;
  }

  >div {
    box-sizing: border-box;
    background-color: white;
    font-size: 14px;
    padding: 2px 5px;
    text-align: left;

    &.b {
      font-weight: bold;
    }

    &.reverse {
      background-color: #888;
      color: white;
    }

    &.center {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &.bold {
      font-weight: bold;
    }

    &.c2 {
      @extend .center;
      grid-column: span 2;
    }

    &.c3 {
      @extend .center;
      grid-column: span 3;
    }

    &.c9 {
      @extend .center;
      grid-column: span 9;
    }

    &.r2 {
      @extend .center;
      grid-row: span 2;
    }

    &.r3 {
      @extend .center;
      grid-row: span 3;
    }

    &.r9 {
      @extend .center;
      grid-row: span 9;
    }

    &.h-line {
      all: unset;
      grid-column: 1 / -1;
      height: 2px;
      background-color: #555;
      margin: -1px 0 -1px 0;
    }

  }



}
</style>