import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import sentences from '../components/sentences.vue';
import words from '../components/words.vue'
import CleanTable from '../components/CleanTable.vue';
import './custom.scss';
// export default DefaultTheme

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // register your custom global components
    app.component('sentences', sentences);
    app.component('words', words);
    app.component('CleanTable', CleanTable);
  }
} satisfies Theme