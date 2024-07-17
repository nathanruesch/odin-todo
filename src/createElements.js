import { format, isPast, add, addDays } from 'date-fns';

const addClassNames = (element, classNames) => {
    if (Array.isArray(classNames)) {
        element.classList.add(...classNames);
    } else {
        element.classList.add(classNames);
    }
}

const createDiv = (className) => {
    const div = document.createElement("div");
    addClassNames(div, className);
    return div;
};

const createH1 = (className) => {
    const h1 = document.createElement("h1");
    addClassNames(h1, className);
    return h1;
};

const createH3 = (className) => {
    const h3 = document.createElement("h3");
    addClassNames(h3, className);
    return h3;
};

const createP = (className) => {
    const p = document.createElement("p");
    addClassNames(p, className);
    return p;
};

const createButton = (className) => {
    const button = document.createElement("button");
    addClassNames(button, className);
    return button;
}

export {createDiv, createH1, createH3, createP, createButton }