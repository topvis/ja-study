<template>
  <component :is="isBlock ? 'div' : 'span'" class="fu-container">
    <ruby v-for="(node, index) in parsedNodes" :key="index">
      {{ node.kanji }}
      <rt v-if="node.rt" :class="{ 'pitch-rt': node.isPitch }">{{ node.rt }}</rt>
      <rt v-else>&nbsp;</rt>
    </ruby>
  </component>
</template>

<script setup lang="ts">
import { useSlots, computed, type VNode } from "vue"

const props = defineProps<{
  block?: boolean
  pitch?: number | string
}>()

const isBlock = computed(() => props.block ?? false)
const slots = useSlots()

// Map numbers 0-20 to circled unicode numbers
const circledTone = computed(() => {
  if (props.pitch === undefined || props.pitch === null) return ""

  const num = typeof props.pitch === "number" ? props.pitch : parseInt(String(props.pitch), 10)
  if (isNaN(num)) return ""

  if (num === 0) return "⓪"
  if (num >= 1 && num <= 20) {
    return String.fromCharCode(0x2460 + num - 1)
  }

  return `(${num})` // Fallback for numbers > 20
})

interface RubyNode {
  kanji: string
  rt?: string
  isPitch?: boolean
}

// Helper to extract text from VNodes recursively
function extractText(nodes: VNode[]): string {
  let text = ""
  for (const node of nodes) {
    if (typeof node.children === "string") {
      text += node.children
    } else if (Array.isArray(node.children)) {
      text += extractText(node.children as VNode[])
    }
  }
  return text
}

const parsedNodes = computed<RubyNode[]>(() => {
  const defaultSlot = slots.default ? slots.default() : []
  const text = extractText(defaultSlot)

  if (!text) return []

  const nodes: RubyNode[] = []
  const regex = /([^\[\]\s]+)\[(.*?)\]/g

  let lastIndex = 0
  let match: RegExpExecArray | null

  while ((match = regex.exec(text)) !== null) {
    // Filter out literal spaces from plain text character splits
    if (match.index > lastIndex) {
      const plainChars = text
        .slice(lastIndex, match.index)
        .replace(/\s+/g, "") // Strip spaces
        .split("")

      for (const char of plainChars) {
        nodes.push({ kanji: char })
      }
    }

    const reading = match[2].trim()
    nodes.push({
      kanji: match[1],
      rt: reading || undefined,
    })

    lastIndex = regex.lastIndex
  }

  if (lastIndex < text.length) {
    const plainChars = text.slice(lastIndex).split("")
    for (const char of plainChars) {
      nodes.push({ kanji: char })
    }
  }

  // Append a dedicated ruby node using a zero-width space (\u200B) for the pitch mark
  if (circledTone.value) {
    nodes.push({
      kanji: "\u200B", // Invisible anchor base
      rt: circledTone.value,
      isPitch: true,
    })
  }

  return nodes
})
</script>

<style lang="scss" scoped>
.fu-container {
  display: inline-flex;
  align-items: baseline;
}

ruby {
  /* Distributes hiragana evenly across the full width of the base text */
  ruby-align: space-around;
  line-height: 1.2;
  font-weight: bold;
}

rt {
  font-size: 0.7em;
  user-select: none;
  transform: translateY(-2px);

  /* Force the reading base to match width and stretch content */
  width: 100%;
  text-align-last: justify;
  text-justify: inter-character;

  &.pitch-rt {
    font-size: 0.8em;
    text-align-last: center; /* Do not stretch the pitch accent circle */
  }
}
</style>
