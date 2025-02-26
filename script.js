let cols = document.getElementsByClassName('col-sm');
let timeoutID = {}

let items = [
    {
        type: 'Fruit',
        name: 'Apple',
    },
    {
        type: 'Vegetable',
        name: 'Broccoli',
    },
    {
        type: 'Vegetable',
        name: 'Mushroom',
    },
    {
        type: 'Fruit',
        name: 'Banana',
    },
    {
        type: 'Vegetable',
        name: 'Tomato',
    },
    {
        type: 'Fruit',
        name: 'Orange',
    },
    {
        type: 'Fruit',
        name: 'Mango',
    },
    {
        type: 'Fruit',
        name: 'Pineapple',
    },
    {
        type: 'Vegetable',
        name: 'Cucumber',
    },
    {
        type: 'Fruit',
        name: 'Watermelon',
    },
    {
        type: 'Vegetable',
        name: 'Carrot',
    },
]

function createButton() {

    let newButton = document.createElement("button");
    newButton.classList.add("btn", "btn-light", "m-1");

    return newButton;

}

function createItems() {

    for (item in items) {

        let newButton = createButton();

        newButton.id = items[item]['type'];
        newButton.textContent = items[item]['name'];
        newButton.addEventListener("click", setType);

        cols[0].appendChild(newButton);

    }

}

function setType(e) {

    let y = e.target.id;
    let newButton = createButton();
    let content = e.target.textContent;
    newButton.textContent = content;
    newButton.id = e.target.id;
    newButton.addEventListener("click", setRemove);

    if (y == "Fruit") {

        cols[1].appendChild(newButton);

        timeoutID[newButton.textContent] = setTimeout(function () {
            cols[1].removeChild(newButton);
            let secondButton = createButton();
            secondButton.id = y;
            secondButton.textContent = content;
            secondButton.addEventListener("click", setType);
            cols[0].appendChild(secondButton);
        }, 5000);

    } else if (y == "Vegetable") {

        cols[2].appendChild(newButton);

        timeoutID[newButton.textContent] = setTimeout(function () {
            cols[2].removeChild(newButton);

            let secondButton = createButton();
            secondButton.id = y;
            secondButton.textContent = content;
            secondButton.addEventListener("click", setType);
            cols[0].appendChild(secondButton);
        }, 5000);

    }

    e.target.remove();

}

function setRemove(e) {

    e.target.remove();

    let y = e.target.id;
    let newButton = createButton();
    let content = e.target.textContent;
    newButton.textContent = content;
    newButton.id = e.target.id;
    newButton.addEventListener("click", setType);
    cols[0].appendChild(newButton);

    if (timeoutID[e.target.textContent]) {
        clearTimeout(timeoutID[e.target.textContent]);
        delete timeoutID[e.target.textContent];
    }

}

createItems();