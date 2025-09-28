<template>
  <div class="words-container">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { getColorStyle, Color } from "./helpers"
import { computed } from "vue"
const props = withDefaults(defineProps<{ color?: Color }>(), { color: "gold" })

const bg = computed(() => getColorStyle(props.color).backgroundColor)
const txt = computed(() => getColorStyle(props.color).color)
</script>

<style lang="scss" scoped>
.words-container {
  margin: 5px 0;
  display: flex;
  gap: 10px;
  align-items: center;
  :deep(div) {
    font-style: italic;
    color: v-bind(txt); //  black;
    background-color: v-bind(bg); // gold;
    padding: 5px 10px;
    border-radius: 10px;
    white-space: pre;
    b {
      color: #aa1111;
    }
  }
}
</style>
