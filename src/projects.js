const projects = (() => {
    let projectsList = [];

    if (localStorage.getItem('projects') === null) {
        projectsList = [
            {
                name: 'Daily',
                todos: [
                    {

                    }
                ]
            }
        ]
    }
})

class Project {
    name = "";
    todos = [];

    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    get todos() {
        return this.todos;
    }

    addTodo(todo) {
        this.todos[todos.length] = todo;
    }
}

export { projects }