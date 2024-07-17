import * as ce from './createElements';

const sidebar = () => {
    const parentDiv = ce.createDiv('sidebar');

    const header = ce.createH3('sidebar-header');
    header.innerText = "Projects";

    const projectsContainer = ce.createDiv('sidebar-projects');

    return parentDiv;
}

const todoContainer = () => {
    const parentDiv = ce.createDiv('todo-container');

    return parentDiv;
}

const container = () => {
    const parentDiv = ce.createDiv('content-container');

    parentDiv.appendChild(sidebar());
    parentDiv.appendChild(todoContainer());

    return parentDiv;
}

export { container }