<template>
  <div class="highlighted-block-container">
    <slot />
  </div>
</template>

<script setup>
// import { computed } from "vue"
// const props = defineProps({
//   dense: { type: Boolean, default: true },
// })
// const style = computed(() => {
//   const padding = "50px"
//   return props.dense
//     ? {
//         padding: "0px",
//       }
//     : {
//         padding,
//         margin: "150px 0 50px 0",
//       }
// })
</script>

<style lang="scss" scoped>
.highlighted-block-container {
  width: max-content;
  margin: 2px 2px;
  font-style: italic;
  background-color: gold;
  padding: 15px 15px;
  border-radius: 10px;
}
</style>
