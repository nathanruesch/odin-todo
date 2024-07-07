import './style.css';

// Content sections
import header from './header';

// Default page sections
const headerElement = document.getElementById("header");
const content = document.getElementById("content");

function setup() {
    headerElement.appendChild(header());

    
}

setup();
testHeight();