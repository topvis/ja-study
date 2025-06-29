<template>
  <clean-table columns="8fr 16fr 5fr 17fr 10fr 5fr 17fr 9fr 5fr 15fr">
    <div style="background-color: #ddd" />
    <div class="bold c3">
      <div>动1</div>
      <div>（五段动词）</div>
    </div>

    <div class="bold c3" style="display: block; text-align: center">
      <div>动2（一段动词）</div>
      <div>イ段+る， エ段+る</div>
    </div>
    <div class="bold c3" style="display: block; text-align: center">
      <div>动3</div>
      <div>(サ变：する，カ变：来る)</div>
    </div>

    <template v-for="conj in conjugationsExt" :key="conj.form">
      <div class="h-line" />
      <div :class="['bold', 'r' + conj.rules.length / 3]">{{ conj.form }}</div>
      <template v-for="(rule, idx) in conj.rules" :key="conj.form + idx">
        <template v-if="rule == null">
          <div class="c3"></div>
        </template>
        <template v-else>
          <div class="center" v-html="rule.ending"></div>
          <div class="center">→</div>
          <div class="center" v-html="rule.result"></div>
        </template>
      </template>
    </template>
  </clean-table>
</template>

<script lang="ts" setup>
// import CleanTable from './CleanTable.vue'
import { computed } from "vue"

type Rule = {
  ending: string
  result: string
}

type Conjugation = {
  form: string
  godan: Rule[]
  ichidan: Rule[]
  irregular: Rule[]
}

const conjugations: Conjugation[] = [
  {
    form: "ます",
    godan: [
      { ending: "う", result: "います" },
      { ending: "く", result: "きます" },
      { ending: "ぐ", result: "ぎます" },
      { ending: "す", result: "します" },
      { ending: "つ", result: "ちます" },
      { ending: "ぬ", result: "にます" },
      { ending: "ぶ", result: "びます" },
      { ending: "む", result: "みます" },
      { ending: "る", result: "ります" },
    ],
    ichidan: [{ ending: "～る", result: "ます" }],
    irregular: [
      { ending: "来る", result: "来ます" },
      { ending: "する", result: "します" },
    ],
  },
  {
    form: "て",
    godan: [
      { ending: "う", result: "～って" },
      { ending: "く", result: "～いて" },
      { ending: "ぐ", result: "～いで" },
      { ending: "す", result: "～して" },
      { ending: "つ", result: "～って" },
      { ending: "ぬ", result: "～んで" },
      { ending: "ぶ", result: "～んで" },
      { ending: "む", result: "～んで" },
      { ending: "る", result: "～って" },
    ],
    ichidan: [{ ending: "～る", result: "て" }],
    irregular: [
      { ending: "来る", result: "来て" },
      { ending: "する", result: "して" },
    ],
  },
  {
    form: "た",
    godan: [
      { ending: "う", result: "～った" },
      { ending: "く", result: "～いた" },
      { ending: "ぐ", result: "～いだ" },
      { ending: "す", result: "～した" },
      { ending: "つ", result: "～った" },
      { ending: "ぬ", result: "～んだ" },
      { ending: "ぶ", result: "～んだ" },
      { ending: "む", result: "～んだ" },
      { ending: "る", result: "～った" },
    ],
    ichidan: [{ ending: "～る", result: "た" }],
    irregular: [
      { ending: "来る", result: "来た" },
      { ending: "する", result: "した" },
    ],
  },
  {
    form: "ない",
    godan: [
      { ending: "う", result: "～<b>わ</b>ない" },
      { ending: "く", result: "～かない" },
      { ending: "ぐ", result: "～がない" },
      { ending: "す", result: "～さない" },
      { ending: "つ", result: "～たない" },
      { ending: "ぬ", result: "～なない" },
      { ending: "ぶ", result: "～ばない" },
      { ending: "む", result: "～まない" },
      { ending: "る", result: "～らない" },
    ],
    ichidan: [{ ending: "～る", result: "<span><s>(ます)</s>形+ない</span>" }],
    irregular: [
      { ending: "来る", result: "来<b>(こ)</b>ない" },
      { ending: "する", result: "しない" },
    ],
  },
  {
    form: "命令",
    godan: [
      { ending: "う", result: "～え" },
      { ending: "く", result: "～け" },
      { ending: "ぐ", result: "～げ" },
      { ending: "す", result: "～せ" },
      { ending: "つ", result: "～て" },
      { ending: "ぬ", result: "～ね" },
      { ending: "ぶ", result: "～べ" },
      { ending: "む", result: "～め" },
      { ending: "る", result: "～れ" },
      { ending: "くださる", result: "<b>ください</b>" },
      { ending: "なさる", result: "<b>なさい</b>" },
      { ending: "いらっしゃる", result: "<b>いらっしゃい</b>" },
    ],
    ichidan: [
      { ending: "～る", result: "ろ" },
      { ending: "くれる", result: "<b>くれ</b>" },
    ],
    irregular: [
      { ending: "来る", result: "来<b>(こ)</b>い" },
      { ending: "する", result: "しろ／せよ" },
    ],
  },
  {
    form: "意志",
    godan: [
      { ending: "う", result: "～おう" },
      { ending: "く", result: "～こう" },
      { ending: "ぐ", result: "～ごう" },
      { ending: "す", result: "～そう" },
      { ending: "つ", result: "～とう" },
      { ending: "ぬ", result: "～のう" },
      { ending: "ぶ", result: "～ぼう" },
      { ending: "む", result: "～もう" },
      { ending: "る", result: "～ろう" },
    ],
    ichidan: [{ ending: "～る", result: "よう" }],
    irregular: [
      { ending: "来る", result: "来<b>(こ)</b>よう" },
      { ending: "する", result: "しよう" },
    ],
  },
]

const conjugationsExt = computed(() => {
  const res = conjugations.map((conj) => {
    const rules = [] as Rule[]
    for (let i = 0; i < conj.godan.length; i++) {
      rules.push(conj.godan[i])
      rules.push(conj.ichidan[i] ?? undefined)
      rules.push(conj.irregular[i] ?? undefined)
    }
    return {
      form: conj.form,
      rules,
    }
  })
  console.log(res)
  return res
})
</script>

<style lang="scss" scoped></style>
