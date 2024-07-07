const header = () => {
    const parentDiv = document.createElement("div");
    parentDiv.classList.add("header-div");

    // Create the page title
    const pageTitle = document.createElement("h1");
    pageTitle.textContent = "Odin Todo";
    pageTitle.classList.add("header-item", "header-title");

    parentDiv.appendChild(pageTitle);

    return parentDiv;
};

export default header;