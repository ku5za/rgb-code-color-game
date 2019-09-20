'use strict';

import {createNewRGBcode, getRandomInt} from '../rgb-code/rgb-code.js';

let colorSamplesRows = document.querySelectorAll(".color-samples__row");
let colorSamples = document.querySelectorAll(".color-samples__color-sample");

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

function setRandomColorsToSamples() {
    for(let color of colorSamples) {
        let colorCode = createNewRGBcode();
        color.style.backgroundColor = colorCode;
    }
}

function setDrawnByLotsColorToRandomSample() {
    let drawnColor = document.querySelector(".color-game-title__rgb-code").textContent;
    let maxIndex = returnVisibleRowsNumber() * 3;
    let randomIndex = getRandomInt(maxIndex);

    colorSamples[randomIndex].style.backgroundColor = drawnColor;
}

function appendColorsToSamples() {
    setRandomColorsToSamples();
    setDrawnByLotsColorToRandomSample();
}

appendColorsToSamples();

export {
    appendColorsToSamples
}
console.log("%c color-samples.js connected", "color: blue;");