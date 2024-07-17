import './style.css';
import * as ce from './createElements';

// Content sections
import header from './header';
import { container } from './content';

// Default page sections
const headerElement = document.getElementById("header");
const content = document.getElementById("content");

function setup() {
    headerElement.appendChild(header());

    content.appendChild(container());
}

setup();