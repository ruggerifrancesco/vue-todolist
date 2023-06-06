import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
          messagePlaceholder: 'Placeholder, Vue working!',
          todoItems: [
            'Andare in palestra',
            'Fare la spesa',
            'Riordinare la camera'
          ],
          completedItems: [
            'Fare i compiti'
          ],
          checkItemCompleted: false,
          inputValue: '',
        }
    },
    methods: {
        addItem () {
            if (this.inputValue !== '') {
                this.todoItems.push(this.inputValue);
                this.inputValue = '';

                // Test for pushinginside array
                console.log(this.todoItems)
            }
        },
    }
}).mount('#app')