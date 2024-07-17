import projects from './projects';

const todos = (() => {
    class Todo {
        constructor(title, description, date, priority, projectIndex, todoIndex) {
            this.title = title;
            this.description = description;
            this.date = date;
            this.priority = priority;
            this.projectIndex = projectIndex;
            this.todoIndex = todoIndex;
            this.completed = false;
        }
    }

    function addTodo(title, description, date, priority, projectIndex, todoIndex) {
        
    }
})

export { todos }