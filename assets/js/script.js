import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
  data() {
    return {
      messagePlaceholder: 'Placeholder, Vue working!'
    }
  }
}).mount('#app')