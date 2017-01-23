import Vue from 'vue'

let app = new Vue({
    el: "#root",
    data: {
        tasks: [
            { description: "Go to the store", completed: true },
            { description: "Finish the screencast", completed: true },
            { description: "Make donation", completed: false },
            { description: "Clear inbox", completed: false },
            { description: "Make dinner", completed: true },
            { description: "Clean room", completed: false },
        ],
    },
    computed: {
        completedTasks() {
            return this.tasks.filter(task => task.completed);
        },
        incompletedTasks() {
            return this.tasks.filter(task => !task.completed);
        },
    },
    methods: {
        toggleComplete(key) {
            this.tasks[key].completed = this.tasks[key].completed ? false : true;
        },
    },
});
