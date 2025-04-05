import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './custom.scss'
import sentences from '../components/sentences.vue'
import words from '../components/words.vue'
// export default DefaultTheme

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('sentences', sentences);
    app.component('words', words);
  }
} satisfies Theme