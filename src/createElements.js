import { format, isPast, add, addDays } from 'date-fns';

const createDiv = (className) => {
    const div = document.createElement("div");
    div.classList.add(className);
    return div;
};

const createH1 = (className) => {
    const h1 = document.createElement("h1");
    h1.classList.add(className);
    return h1;
};

const createH3 = (className) => {
    const h3 = document.createElement("h3");
    h3.classList.add(className);
    return h3;
};

const createP = (className) => {
    const p = document.createElement("p");
    p.classList.add(className);
    return p;
};

const createButton = (className) => {
    const button = document.createElement("button");
    button.classList.add(className);
    return button;
}