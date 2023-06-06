import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
          messagePlaceholder: 'Placeholder, Vue working!',
          todoItems: [],
          completedItems: [],
          checkItemCompleted: false,
          inputValue: '',
        }
    },
    methods: {
        addItem () {
            if (this.inputValue !== '') {
                this.todoItems.push(this.inputValue);
                this.inputValue = '';
            }
        }
    }
}).mount('#app')