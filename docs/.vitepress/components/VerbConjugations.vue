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

type RuleMap = { [ending: string]: string }

type ConjugationRuleGroup = {
  godan: RuleMap
  ichidan: RuleMap
  irregular: RuleMap
}

type Conjugations = { [form: string]: ConjugationRuleGroup }

const conjugations: Conjugations = {
  ます: {
    godan: {
      う: "います",
      く: "きます",
      ぐ: "ぎます",
      す: "します",
      つ: "ちます",
      ぬ: "にます",
      ぶ: "びます",
      む: "みます",
      る: "ります",
    },
    ichidan: {
      "～る": "ます",
    },
    irregular: {
      来る: "来ます",
      する: "します",
    },
  },

  て: {
    godan: {
      う: "～って",
      く: "～いて",
      ぐ: "～いで",
      す: "～して",
      つ: "～って",
      ぬ: "～んで",
      ぶ: "～んで",
      む: "～んで",
      る: "～って",
    },
    ichidan: {
      "～る": "て",
    },
    irregular: {
      来る: "来て",
      する: "して",
    },
  },

  た: {
    godan: {
      う: "～った",
      く: "～いた",
      ぐ: "～いだ",
      す: "～した",
      つ: "～った",
      ぬ: "～んだ",
      ぶ: "～んだ",
      む: "～んだ",
      る: "～った",
    },
    ichidan: {
      "～る": "た",
    },
    irregular: {
      来る: "来た",
      する: "した",
    },
  },

  ない: {
    godan: {
      う: "～<b>わ</b>ない",
      く: "～かない",
      ぐ: "～がない",
      す: "～さない",
      つ: "～たない",
      ぬ: "～なない",
      ぶ: "～ばない",
      む: "～まない",
      る: "～らない",
    },
    ichidan: {
      "～る": "<span><s>(ます)</s>形+ない</span>",
    },
    irregular: {
      来る: "来<b>(こ)</b>ない",
      する: "しない",
    },
  },

  命令: {
    godan: {
      う: "～え",
      く: "～け",
      ぐ: "～げ",
      す: "～せ",
      つ: "～て",
      ぬ: "～ね",
      ぶ: "～べ",
      む: "～め",
      る: "～れ",
      くださる: "<b>ください</b>",
      なさる: "<b>なさい</b>",
      いらっしゃる: "<b>いらっしゃい</b>",
    },
    ichidan: {
      "～る": "ろ",
      くれる: "<b>くれ</b>",
    },
    irregular: {
      来る: "来<b>(こ)</b>い",
      する: "しろ／せよ",
    },
  },

  意志: {
    godan: {
      う: "～おう",
      く: "～こう",
      ぐ: "～ごう",
      す: "～そう",
      つ: "～とう",
      ぬ: "～のう",
      ぶ: "～ぼう",
      む: "～もう",
      る: "～ろう",
    },
    ichidan: {
      "～る": "よう",
    },
    irregular: {
      来る: "来<b>(こ)</b>よう",
      する: "しよう",
    },
  },
}

function getObjectByKeyIndex(obj: object, i: number) {
  const key = Object.keys(obj)[i]
  const v = Object.values(obj)[i]
  return { ending: key, result: v }
}

const conjugationsExt = computed(() => {
  const res = Object.entries(conjugations).map(([form, conj]) => {
    const rules: Rule[] = []

    const n = Object.keys(conj.godan).length

    for (let i = 0; i < n; i++) {
      rules.push(getObjectByKeyIndex(conj.godan, i))
      rules.push(getObjectByKeyIndex(conj.ichidan, i))
      rules.push(getObjectByKeyIndex(conj.irregular, i))
    }

    return {
      form,
      rules,
    }
  })

  // console.log(res);
  return res
})
</script>

<style lang="scss" scoped></style>
