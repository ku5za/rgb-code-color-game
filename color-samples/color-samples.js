'use strict';

import { createNewRGBcode, getRandomInt, getActualRGBcode } from '../rgb-code/rgb-code.js';
import { compareToDrawnRGBcode } from "./__color-sample/color-samples__color-sample.js";

let colorSamplesRows = document.querySelectorAll(".color-samples__row");
let colorSamples = document.querySelectorAll(".color-samples__color-sample");

for (const colorSample of colorSamples) {
    colorSample.addEventListener("click", () => {
        compareToDrawnRGBcode(colorSample);
    });
}

function appendColorsToSamples() {
    setRandomColorsToSamples();
    setDrawnByLotsColorToRandomSample();
}
appendColorsToSamples();

function setRandomColorsToSamples() {
    for(let color of colorSamples) {
        let colorCode = createNewRGBcode();
        color.style.backgroundColor = colorCode;
    }
}

function setDrawnByLotsColorToRandomSample() {
    let drawnColor = getActualRGBcode();
    let maxIndex = returnVisibleRowsNumber() * 3;
    let randomIndex = getRandomInt(maxIndex);

    colorSamples[randomIndex].style.backgroundColor = drawnColor;
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

function isRowHidden(row) {
    if(row.classList.contains("color-samples__row_hidden")) {
        return true;
    }
    else {
        return false;
    }
}

export {
    appendColorsToSamples
}