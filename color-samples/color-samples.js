'use strict';
import {createRGBcode, getRandomInt} from '../rgb-code/rgb-code.js';
import ("./__color-sample/color-samples__color-sample.js");

let colorSamplesRows = document.querySelectorAll(".color-samples__row");
let colorSamples = document.querySelectorAll(".color-samples__color-sample");
let drawnColor = document.querySelector(".color-game-title__rgb-code").textContent;

function isRowHidden(row) {
    if(row.classList.contains("color-samples__row_hidden")) {
        return true;
    }
    else {
        return false;
    }
}

function returnVisibleRowsNumber() {
    let visibleRowsNumber = 0;
    
    colorSamplesRows.forEach(row => {
        if(isRowHidden(row)) {
            return;
        }
        else {
            visibleRowsNumber++;
        }
    });

    return visibleRowsNumber;
}

function appendColorsToSamples() {
    for(let color of colorSamples) {
        let colorCode = createRGBcode();
        color.style.backgroundColor = colorCode;
    }
}
appendColorsToSamples();

function appendDrawnColor() {
    let maxIndex = returnVisibleRowsNumber() * 3;
    let randomIndex = getRandomInt(maxIndex);

    colorSamples[randomIndex].style.backgroundColor = drawnColor;
}
appendDrawnColor();

console.log("%c CONNECTED", "color: blue;");