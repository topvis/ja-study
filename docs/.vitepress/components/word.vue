<template>
  <span class="word-container" :style="getColorStyle(color)">
    <slot />
  </span>
</template>

<script setup lang="ts">
import { getColorStyle, Color } from "./helpers"

const props = withDefaults(defineProps<{ color?: Color }>(), { color: "gold" })
</script>
<style lang="scss" scoped>
.word-container {
  margin: 2px 2px;
  font-style: italic;
  padding: 5px 10px;
  border-radius: 10px;
}
</style>
