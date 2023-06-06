import { createApp } from 'https://unpkg.com/vue@3/dist/vue.esm-browser.js'

createApp({
    data() {
        return {
          messagePlaceholder: 'Placeholder, Vue working!',
          todoItems: [
            {
                text: 'Andare in palestra',
                done: false,
            },
            {
                text: 'Fare la spesa',
                done: false,
            },
            {
                text: 'Riordinare la camera',
                done: false,
            },
          ],
          completedItems: [
            {
                text: 'Fare i compiti',
                done: true,
            },
          ],
          inputValue: '',
        }
    },
    methods: {
        addItem () {
            if (this.inputValue !== '') {
                this.todoItems.push({text: this.inputValue, done: false});
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
                item.done = true;

                // Test for pushing inside Complete Items List
                console.log(this.completedItems)
            }
        },
        redoItem (item) {
            const index = this.completedItems.indexOf(item);
            if (index > -1) {
                this.completedItems.splice(index, 1);
                this.todoItems.push(item);
                item.done = false;

                // Test for pushing inside Complete Items List
                console.log(this.todoItems)
            }
        }
    }
}).mount('#app')