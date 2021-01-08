'use strict';

console.log('Scripts Loaded');

const generateMadlib = document.querySelector('#generateMadlib');

generateMadlib.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputSelectors = document.querySelectorAll('input')

    inputSelectors.forEach(function (inputItem) {
        console.log("What is the input item:", inputItem)
    })

})