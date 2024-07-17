import * as ce from './createElements';

const sidebar = () => {
    const parentDiv = ce.createDiv('sidebar');

    const header = ce.createH3('sidebar-header');
    header.innerText = "Projects";
    parentDiv.appendChild(header);

    const divider = document.createElement('hr');
    divider.classList.add("divider");
    parentDiv.appendChild(divider);

    const projectsContainer = ce.createDiv('sidebar-projects');
    projectsContainer.id = "project-container";

    for (let i = 0; i < 5; i++) {
        const test = ce.createP('sidebar-test');
        test.innerText = "TEST TEST TEST";
        projectsContainer.appendChild(test);
    }

    parentDiv.appendChild(projectsContainer);

    return parentDiv;
}

const todoContainer = () => {
    const parentDiv = ce.createDiv('todos');

    const header = ce.createH3('todo-header');
    header.innerText = 'Project Name';
    header.id = 'todo-header';
    parentDiv.appendChild(header);

    const divider = document.createElement('hr');
    divider.classList.add("divider");
    parentDiv.appendChild(divider);

    const todos = ce.createDiv('todo-container');
    parentDiv.appendChild(todos);

    return parentDiv;
}

const container = () => {
    const parentDiv = ce.createDiv('content-container');

    parentDiv.appendChild(sidebar());
    parentDiv.appendChild(todoContainer());

    return parentDiv;
}

export { container }