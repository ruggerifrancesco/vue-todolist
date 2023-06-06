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

                // Test for pushing inside To Do Items List
                console.log(this.todoItems)
            }
        },
        removeItem (item) {
            const index = this.todoItems.indexOf(item);
            if (index > -1) {
                this.todoItems.splice(index, 1);
                this.completedItems.push(item);

                // Test for pushing inside Complete Items List
                console.log(this.completedItems)
            }
        },
        redoItem (item) {
            const index = this.completedItems.indexOf(item);
            if (index > -1) {
                this.completedItems.splice(index, 1);
                this.todoItems.push(item);

                // Test for pushing inside Complete Items List
                console.log(this.todoItems)
            }
        }
    }
}).mount('#app')