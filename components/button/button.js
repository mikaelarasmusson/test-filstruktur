"use strict"

function renderButton(parent) {

    const button = document.createElement("button");
    button.id = "redButton";
    button.textContent = "Make Red";
    parent.append(button);

    button.addEventListener("click", function () {
        document.body.classList.toggle("redBack");
    })
}